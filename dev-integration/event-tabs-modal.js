(function () {
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('.evt-tab');
    if (tab) {
      var tabsWrap = tab.closest('.evt-tabs');
      var targetSel = tab.getAttribute('data-evt-target');
      var target = targetSel ? document.querySelector(targetSel) : null;
      if (tabsWrap && target) {
        tabsWrap.querySelectorAll('.evt-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var group = target.parentElement;
        group.querySelectorAll('.evt-tab-panel').forEach(function (p) { p.classList.remove('active'); });
        target.classList.add('active');
      }
      return;
    }
    var trigger = e.target.closest('.evt-modal-trigger');
    if (trigger) {
      var modalSel = trigger.getAttribute('data-evt-modal-target');
      var modal = modalSel ? document.querySelector(modalSel) : null;
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }
    var closeBtn = e.target.closest('.evt-modal-close');
    var clickedOverlay = (e.target.classList && e.target.classList.contains('evt-modal-overlay')) ? e.target : null;
    if (closeBtn) {
      var m = closeBtn.closest('.evt-modal-overlay');
      if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
    } else if (clickedOverlay) {
      clickedOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.evt-modal-overlay.open').forEach(function (m) {
        m.classList.remove('open');
      });
      document.body.style.overflow = '';
    }
  });
})();
