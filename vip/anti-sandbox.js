(function() {
  function isInSandboxedIframe() {
    try {
      if (window.top === window) return false; // Not in iframe
      // Akses ke top location akan gagal jika sandbox aktif
      window.top.location.href;
      return false;
    } catch (e) {
      return true; // Sandbox aktif
    }
  }

  function injectStyle() {
    const style = document.createElement('style');
    style.textContent = `
      .blocked {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: white;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: red;
        font-family: sans-serif;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(style);
  }

  function showWarning() {
    injectStyle();

    const warning = document.createElement('div');
    warning.className = 'blocked';
    warning.innerHTML = '🚫 Website ini tidak dapat ditampilkan dalam iframe dengan <code>sandbox</code>.';

    // Kosongkan halaman dan tampilkan pesan
    document.body.innerHTML = '';
    document.body.appendChild(warning);
  }

  if (isInSandboxedIframe()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showWarning);
    } else {
      showWarning();
    }
  }
})();
