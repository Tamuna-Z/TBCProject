// slider data/photos

// let data = [
//     {
//         id: 1,
//         imageUrl: 'images/Capture1.PNG',
//     },
//     {
//         id: 2,
//         imageUrl: 'images/Capture2.PNG',
//     },
//     {
//         id: 3,
//         imageUrl: 'images/Capture3.PNG',
//     },
// ];

let data = [
    {
        id: 1,
        imageUrl: 'images/Capture1.PNG',
    },
    {
        id: 2,
        imageUrl: 'images/Capture2.PNG',
    },
    {
        id: 3,
        imageUrl: 'images/Capture3.PNG',
    },
];

let arrowLeft = document.getElementById ('arrow-left');
let arrowRight = document.getElementById ('arrow-right');
let sliderContainer = document.getElementById ('slider');
let dotsList = document.getElementsByClassName ('dot');

let sliderIndex = 0;


function createImgTag(item) {
    sliderContainer.style.backgroundImage = 'url('+ item.imageUrl +')';
    sliderContainer.style.backgroundRepeat = "no-repeat";
    sliderContainer.style.backgroundSize = "cover";
    sliderContainer.style.width = '850px';
    sliderContainer.style.height = '90px';
}


function createDots() {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id-1);

        dot.onclick = () => {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    })
    return dots;
}

function setSlider() {
    sliderContainer.innerText = '';
    createImgTag(data[sliderIndex]);
    let dots = createDots();
    sliderItem.appendChild(title);
    sliderContainer.appendChild(sliderItem);
    sliderContainer.appendChild(dots);
    currentDotActive();
    
}

function currentDotActive () {
    dotsList[sliderIndex].classList.add('active')
}

function arrowLeftClick () {
    if (sliderIndex == 0) {
        sliderIndex = data.length;
     }
    sliderIndex--;
    setSlider();
}

function arrowRightClick () {   
    if(sliderIndex == data.length-1) {
        sliderIndex = -1;
    }
    sliderIndex++;
    setSlider();
}
//1.
arrowLeft.addEventListener('click', arrowLeftClick)
arrowRight.addEventListener('click', arrowRightClick)
//2.
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        arrowLeftClick();
    } else if (event.keyCode == 39) {
        arrowRightClick();
    }
})
//3.
setInterval( () => {
    arrowRightClick ();
}, 4000);

setSlider();

// accordion
let accordion = document.getElementsByClassName('accordion-container');
for (let i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function() {
        this.classList.toggle('active');
        
    })
}

