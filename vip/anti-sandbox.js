window.addEventListener('message', function(event) {
  if (event.data === 'checkSandbox') {
    if (window.frameElement && window.frameElement.hasAttribute('sandbox')) {
      alert('Peringatan: Situs web ini di-embed dengan atribut sandbox.');
      // Atau, Anda dapat mengambil tindakan lain, seperti mengalihkan halaman
      // window.location.href = 'https://situs-web-anda.com/peringatan';
    }
  }
});

if (window.parent !== window) {
  window.parent.postMessage('checkSandbox', '*');
}
