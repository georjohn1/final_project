(function () {
  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyLightboxMotionPreference() {
    if (!window.lightbox || typeof window.lightbox.option !== 'function') {
      return;
    }

    var prefersReducedMotion = reducedMotionQuery.matches;

    window.lightbox.option({
      fadeDuration: prefersReducedMotion ? 0 : 600,
      imageFadeDuration: prefersReducedMotion ? 0 : 600,
      resizeDuration: prefersReducedMotion ? 0 : 200,
      wrapAround: true
    });
  }

  applyLightboxMotionPreference();

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', applyLightboxMotionPreference);
  } else if (typeof reducedMotionQuery.addListener === 'function') {
    reducedMotionQuery.addListener(applyLightboxMotionPreference);
  }
})();
