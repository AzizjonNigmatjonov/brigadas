const item1 = document.getElementById('clientCount');
const item2 = document.getElementById('serviceCount');
const item3 = document.getElementById('doctorCount');
const item4 = document.getElementById('item3');
let onlyOnce = true;
start();

function start() {
    if (onlyOnce) {
        onlyOnce = false;
        if (item1 && item2 && item3 && item4) {
            animateValue(item1, 0, item1.innerText, 4000);
            animateValue(item2, 0, item2.innerText, 4000);
            animateValue(item3, 0, item3.innerText, 4000);
            animateValue(item4, 0, item4.innerText, 4000);
        }
    }
}

function animateValue(obj, start, end, duration) {

    if (start === end) {
        return;
    }

    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
};

// const productGalleryItems = document.querySelectorAll('.product-gallery-item');
// const productGalleryLists= document.querySelectorAll('.product-gallery-wrapper');

// productGalleryItems.forEach(function(item) {
//     item.addEventListener('click', e => {
//         productGalleryLists.forEach(function(list) {
//             if (e.target.id == list.dataset.target) {
//                 list.classList.add('active');
//                 e.target.classList.add('active')
//             } else {
//                 list.classList.remove('active');
//                 e.target.classList.remove('active');
//             }
//         })
//     })
// })

// productGalleryItems.forEach(function(item) {
//     productGalleryLists.forEach(function(list) {
//         if (item.id == list.dataset.target) {
//             if (list.classList.contains('active')) {
//                 item.classList.add('active')
//             }
//         }
//     })
// })