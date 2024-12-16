
function decode(encoded) {
    return atob(encoded);
}

		// Channel data - add more channels if needed
		const channels = {
		  'ad1': { 
			url: decode('aHR0cHM6Ly91c2VsZWN0b3IuY2RuLmludGlncmFsLW90dC5uZXQvQURTUDEvQURTUDEuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('ZWI1YTNhNDhmM2UxOTFhMDBlM2FjMWUyZDQ3MGM0OTE=')]: decode('MmM4YjcxOTg1NjM1MjdlNTI0ZDY2NjI4YzA5MmVmMWY=') }
		  },
		  'vsport': { 
			url: decode('aHR0cHM6Ly9jb3JzLXByb3h5LmNvb2tzLmZ5aS9odHRwczovL2RpcmVjdG9yLnN0cmVhbWluZy50ZWxpYS5jb20vdHZtLXBhY2thZ2VyLXByb2QvZ3JvdXAxLzYwODk2YzM2NDdhMjNkN2YxMTVjZDU3YS9tYW5pZmVzdC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('ZWFiMTNlNjk3OTM3NTZlZGE3N2Q4ZDcxZmRhOTBkNWQ='), key: decode('Y2QwMjJlOWJmZmE2YTBkMTUyM2VlNWQ5ZmNkYTllZDQ=')
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
