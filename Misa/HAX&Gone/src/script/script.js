let desktop = document.getElementById("desktop");
function openFullScreen() {
    if (desktop.requestFullscreen) {
        desktop.requestFullscreen();
    } else if (desktop.mozRequestFullScreen) { /* Firefox */
        desktop.mozRequestFullScreen();
    } else if (desktop.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        desktop.webkitRequestFullscreen();
    } else if (desktop.msRequestFullscreen) { /* IE/Edge */
        desktop.msRequestFullscreen();
    }
}
openFullScreen();