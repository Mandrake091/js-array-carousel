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
let items = document.getElementsByClassName('items');
const itemsContainer = document.getElementById('items-container');
const thumbnails = document.getElementsByClassName('thumbnail');


console.log(itemActive)
console.log(nextButton)



for (let k = 0; k < imagesArray.length; k++) {

}


let currentIndex = 0;

for (let i = 0; i < imagesArray.length; i++) {

    let classActive = ""
    if (i === currentIndex) {
        classActive = "active"
    }
    itemsContainer.innerHTML += `<div class="items ${classActive} ">
                                    <img src="${imagesArray[i]}">
                                    <div class="container">
                                    <div class="row justify-content-center align-items-center">
                                    <div class="col-12">
                                        <div class="title">
                                            <h2 class="h2">${titlesArray[i]}</h2>
                                            <p class="text">${text[i]}.</p>
                                    </div>
                                       
                                    </div>
                          
                                    </div>
                                        
                                    </div>`


    thumbContainer.innerHTML += `<div class= "thumbnail ${classActive}">
                                    <img class="w-100" src = "${imagesArray[i]}">
                                    </div>`

}

//let firstItem = document.querySelector(".items").classList.add("active");


console.log(titlesArray)
console.log(items)
console.log(imagesArray)


nextButton.addEventListener("click", function () {
    if (currentIndex < 4) {
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");
        thumbnails[currentIndex].classList.remove("active");
      
        currentIndex ++;
        
        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }

});

prevButton.addEventListener('click', function () {

    if (currentIndex > 0) {
        thumbnails[currentIndex].classList.remove("active");
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");
        currentIndex --;
        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
})