// toggle map location
const holder = document.getElementById('holder')
const navBtn = document.getElementById('nav__btn')
const btnCloseMap = document.getElementById('btn__close__map')
// console.log(body)
// function for opening hiden side menu and adding dark class for body
navBtn.addEventListener('click', e => {

    if (holder.style.display == 'none') {
        holder.style.display = '';
    } else {
        holder.style.display = 'none';
    }
})
// btn__close__map
btnCloseMap.addEventListener('click', e => {
    const showNav = document.getElementsByClassName('map');
    holder.style.display = 'none';
})

//  fixed nav       container__fixed__trougao       container__fixed__logo
$(document).scroll(function () {
    var y = $(document).scrollTop(), //get page y value 
        header = $(".container__fixed");
    logo = $(".container__fixed__logo");
    trougao = $(".container__fixed__trougao");
    showcase = $(".showcase");
    if (y >= 32) {
        header.css({
            position: "fixed",
            "top": "0",
            "width": "100%",
            "z-index": "2000",
            // "backgroundColor": "red"
            // "left": "0"
        });
        logo.css({
            position: "fixed",
            "top": "5px",
            "z-index": "2001",
            // "width": "100%",
            // "left": "0"
        });
        trougao.css({
            position: "fixed",
            "top": "-29px",
            "z-index": "2000",
            // "backgroundColor": "red"
            // "width": "20%",
            // "left": "0"
        });
    } else {
        showcase.css({
            paddingTop: "80px"
        });
        header.css({
            position: "absolute",
            "top": "2rem",
            "width": "100%",
            "z-index": "2000",
        });
        logo.css({
            position: "absolute",
            "top": "2.5rem"
        });
        trougao.css({
            position: "absolute",
            "top": "2rem"
        });
    }
});


// ------------------trougao scroll 


// function toggle2(id, id2, x) {

//     let n = document.getElementById(id);
//     let ico = document.getElementById(x);
//     // let ico = document.getElementById(x)
//     if (n.style.display != 'none') {
//         n.style.display = 'none';
//         document.getElementById(id2).setAttribute('aria-expanded', 'true');
//         ico.classList.remove('uspravno');
//         ico.classList.add('vodoravno');
//     } else {
//         n.style.display = '';
//         document.getElementById(id2).setAttribute('aria-expanded', 'false');
//         ico.classList.remove('vodoravno');
//         ico.classList.add('uspravno');
//     }

// }