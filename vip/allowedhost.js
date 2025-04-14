(function () {
    const allowedHost = ['streamkaltaraid.online'];
    const currentHost = window.location.hostname;

    if (!allowedHost.includes(currentHost)) {
        console.error('Access denied: Unauthorized host');
        window.location.href = 'https://kltraid.pages.dev/';
    }
})();
