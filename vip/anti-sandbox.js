window.addEventListener('message', function(event) {
  if (event.data === 'checkSandbox') {
    let sandboxDetected = false;
    try {
      // Coba akses properti yang dibatasi oleh sandbox
      window.top.location.href; // Ini akan gagal jika sandbox melarang navigasi
    } catch (error) {
      sandboxDetected = true;
    }

    if (sandboxDetected) {
      alert('Peringatan: Situs web ini di-embed dengan atribut sandbox.');
      // Atau, lakukan tindakan lain
    }
  }
});

if (window.parent !== window) {
  window.parent.postMessage('checkSandbox', '*');
}
