const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav(){
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('poo');
        if(overlay.classList.contains('poo')){
            // Animate In - Overlay
                overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
            // Animate In - Nav Items
                nav1.classList.replace('slide-out-1', 'slide-in-1' );
                nav2.classList.replace('slide-out-2', 'slide-in-2');
                nav3.classList.replace('slide-out-3', 'slide-in-3');
                nav4.classList.replace('slide-out-4', 'slide-in-4');
                nav5.classList.replace('slide-out-5', 'slide-in-5');
        }else {
            //Animate Out - Overlay
                overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
             // Animate Out - Nav Items
                nav1.classList.replace('slide-in-1', 'slide-out-1');
                nav2.classList.replace('slide-in-2', 'slide-out-2');
                nav3.classList.replace('slide-in-3', 'slide-out-3');
                nav4.classList.replace('slide-in-4', 'slide-out-4');
                nav5.classList.replace('slide-in-5', 'slide-out-5');
        }
}

// EventListeners
menuBars.addEventListener('click', toggleNav);


const navArray = [nav1, nav2, nav3, nav4, nav5];
navArray.forEach(nav => {
    nav.addEventListener('click', toggleNav);
})





