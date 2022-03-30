const imagesArray = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const titlesArray = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton')
let itemActive = document.getElementById('active');
let thumbContainer = document.getElementById('thumbContainer');

const thumbnails = document.getElementsByClassName('item');

const itemsContainer = document.getElementById('items-container')


console.log(itemActive)
console.log(nextButton)


for (let k = 0; k < imagesArray.length; k++) {
    thumbContainer.innerHTML += `<div class= "thumbnail">
    <img class="w-100 d-block" src = "${imagesArray[k]}">
    </div>`
}

for (let k = 1; k < imagesArray.length; k++) {
    itemsContainer.innerHTML += `<div class="items d-none">
    <img class="w-100" src = "${imagesArray[k]}">
    </div>`
}
let items = document.getElementsByClassName('items')



console.log(items)

console.log(imagesArray)


let currentIndex = 0;
nextButton.addEventListener("click", function () {
    if (currentIndex < 4) {
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active"); 
        currentIndex += 1;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }

});

prevButton.addEventListener('click', function () {

    if (currentIndex > 0) {
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active"); 
        currentIndex -= 1;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
})