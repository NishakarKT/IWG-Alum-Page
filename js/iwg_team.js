// Team Slider
$('#customers-teams').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4500,
    checkVisibility: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
    }
});

// Team Carousel
$('#team-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4500,
    checkVisibility: true,
    touchDrag: false,
    mouseDrag: false
});

// Team Content
$('#team-carousel-details').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4500,
    checkVisibility: true,
    smartSpeed: 500,
    touchDrag: false,
    mouseDrag: false,
});

// // Disable Inspect Element
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }