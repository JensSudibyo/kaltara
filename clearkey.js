
function decode(encoded) {
    return atob(encoded);
}

		// Channel data - add more channels if needed
		const channels = {
		  'ar1': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTEubXBk'), 
			drm: { 'YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=': decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'ar2': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTIubXBk'), 
			drm: { 'YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=': decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'vsport': { 
			url: decode('aHR0cHM6Ly9jb3JzLXByb3h5LmNvb2tzLmZ5aS9odHRwczovL2RpcmVjdG9yLnN0cmVhbWluZy50ZWxpYS5jb20vdHZtLXBhY2thZ2VyLXByb2QvZ3JvdXAxLzYwODk2YzM2NDdhMjNkN2YxMTVjZDU3YS9tYW5pZmVzdC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: 'eab13e69793756eda77d8d71fda90d5d',
				key: 'cd022e9bffa6a0d1523ee5d9fcda9ed4'
			  }
			}
		  }
		};

        async function init() { 
            const video = document.getElementById('video'); 
            const ui = video['ui']; 
            const controls = ui.getControls(); 
            const player = controls.getPlayer(); 
            window.player = player; 
            window.ui = ui; 
            player.addEventListener('error', onPlayerErrorEvent); 
            controls.addEventListener('error', onUIErrorEvent); 

            const urlParams = new URLSearchParams(window.location.search);
            const key = urlParams.get('channel');
            if (channels[key]) {
                const channel = channels[key];
                if (channel.drm.clearkey) {
                    player.configure({
                        drm: {
                            clearKeys: {
                                [channel.drm.clearkey.keyId]: channel.drm.clearkey.key
                            }
                        }
                    });
                } else {
                    player.configure({
                        drm: {
                            clearKeys: channel.drm
                        }
                    });
                }
                try {
                    await player.load(channel.url); 
                    console.log('The video has now been loaded!');
                } catch (error) {
                    onPlayerError(error);
                }
            } else {
                console.error('Channel not found');
            }

            // Menambahkan listener untuk fullscreen
            controls.addEventListener('fullscreen', () => {
                if (document.fullscreenElement) {
                    lockOrientationToLandscape();
                }
            });
 
            // Konfigurasi warna seekBar menggunakan UI config
            ui.configure({
                seekBarColors: {
                    base: 'rgba(255, 0, 0, 0.3)', // Warna latar belakang merah transparan
                    buffered: 'rgba(255, 0, 0, 0.5)', // Warna buffer merah sedikit transparan
                    played: 'red', // Warna bagian yang dimainkan
                    adBreaks: 'yellow', // Warna untuk jeda iklan
                }
            });

            // Ganti ikon menu dengan ikon gear
            const menuButton = document.querySelector('.shaka-overflow-menu-button');
            if (menuButton) {
                menuButton.innerHTML = '<i class="fas fa-cog"></i>'; // Ikon gear dari Font Awesome
            }
        }

        function onPlayerErrorEvent(errorEvent) { 
            onPlayerError(event.detail);
        }

        function onPlayerError(error) {
            console.error('Error code', error.code, 'object', error);
        }

        function onUIErrorEvent(errorEvent) { 
            onPlayerError(event.detail);
        }

        function initFailed(errorEvent) {
            console.error('Unable to load the UI library!');
        }

        function lockOrientationToLandscape() {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch((error) => {
                    console.warn('Orientation lock failed:', error);
                });
            }
        }

        document.addEventListener('shaka-ui-loaded', init); 
        document.addEventListener('shaka-ui-load-failed', initFailed); 