

    const buttonSi = document.getElementById('yes');
    const buttonNo = document.getElementById('no');

    const Lo_sabía = () => {
        /*Swal.fire({
            imageUrl: "https://placeholder.pics/svg/300x1500",
            imageHeight: 500,
            imageAlt: "A tall image"
        });*/
        Swal.fire({
            title: "<h1>TARDE DE CINE</h1><h5>Te esperamos el 23 de marzo a las 4:00 PM, no te lo pierdas</h5>",
            html: `
                <div class="video-container">
                    <video id="myVideo" src="./resource/video/cine.mp4" controls autoplay></video>
                </div>
                <p>¡DIOS LE BENDIGA GRANDEMENTE!</p>
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `Confirmar`,
            cancelButtonText: `Cancelar`,
            customClass: {
                popup: 'custom-modal', // Clase personalizada para el popup
            },
            width: '80%', // Ajusta el ancho del modal según tus necesidades
            didOpen: () => {
                const video = document.getElementById('myVideo');
                
                // Detecta cuando el video comienza a reproducirse
                video.addEventListener('play', function() {
                    // Solicita que el video entre en modo pantalla completa
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    } else if (video.mozRequestFullScreen) { // Firefox
                        video.mozRequestFullScreen();
                    } else if (video.webkitRequestFullscreen) { // Chrome, Safari
                        video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) { // IE/Edge
                        video.msRequestFullscreen();
                    }
                });
        
                // Detecta cuando el video se pausa o termina y sale de pantalla completa
                video.addEventListener('pause', exitFullscreen);
                video.addEventListener('ended', exitFullscreen);
            }
        });
    };
    function exitFullscreen() {
        // Verifica si estamos en pantalla completa y salimos
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    }
    const xime_app = () => {
        // Obtener el tamaño del botón
        buttonNo.style.position = 'absolute';
        const buttonWidth = buttonNo.offsetWidth; // Ancho del botón
        const buttonHeight = buttonNo.offsetHeight; // Alto del botón

        // Obtener el tamaño de la ventana
        const windowWidth = window.innerWidth; // Ancho de la ventana
        const windowHeight = window.innerHeight; // Alto de la ventana

        let randomX, randomY;

        // Generar posiciones aleatorias
        do {
            randomX = Math.random() * (windowWidth - buttonWidth); // Ancho de la ventana menos el ancho del botón
            randomY = Math.random() * (windowHeight - buttonHeight); // Alto de la ventana menos el alto del botón
        } while (randomX + buttonWidth > windowWidth || randomY + buttonHeight > windowHeight || randomX < 0 || randomY < 0);

        // Establecer la posición del botón
        buttonNo.style.setProperty('top', randomY + 'px');
        buttonNo.style.setProperty('left', randomX + 'px');
    };

    buttonSi.addEventListener('click', Lo_sabía);
    buttonNo.addEventListener('mouseover', xime_app);

