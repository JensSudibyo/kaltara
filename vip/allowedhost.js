// /js/host-check.js
export function enforceAllowedHost() {
    const allowedHost = ['bikinbaru96.blogspot.com'];
    const currentHost = window.location.hostname;

    if (!allowedHost.includes(currentHost)) {
        console.error('Access denied: Unauthorized host');
        window.location.href = 'https://akusukagratisanlo.blogspot.com';
    }
}
