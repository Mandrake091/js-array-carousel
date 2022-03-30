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
let items = document.getElementById('items');



console.log(itemActive)
console.log(nextButton)
console.log(imagesArray)

for (let k = 0; k < imagesArray.length; k++) {

    items.innerHTML += `<div class= "item">
    <img class="w-100" src = "${imagesArray[k]}">
    </div>`
}







nextButton.addEventListener('click', nextImage);
let i = 1;

function nextImage() {

    if (i <= 4) {
        itemActive.innerHTML = `
      <div class= "item">
          <img class="w-75" src = "${imagesArray[i]}">
          </div>`

        i++

    } else if (i > 4) {
        itemActive.innerHTML = `
      <div class= "item">
          <img class="w-75" src = "${imagesArray[0]}">
          </div>`
        i = 0

    }
}
console.log(i)

prevButton.addEventListener('click', prevImage);


console.log(i)
 k=i;
function prevImage() {
   
    if (k < 4) {
        itemActive.innerHTML = `
      <div class= "item">
          <img class="w-75" src = "${imagesArray[k]}">
          </div>`
        k--
        console.log(k)
    } else if (k == 0) {

        k = 0;
        }
    
}
console.log(k)