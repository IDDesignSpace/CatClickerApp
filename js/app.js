let numOfTimesTag= document.querySelector('h2');
let numOfTimes = 0;
let catImage = document.querySelector('img');
let catDiv = document.querySelector('div');
let newCatImage = document.createElement('img');
let newCatName = document.createElement('h2');

catDiv.appendChild(newCatName);
catDiv.appendChild(newCatImage);
newCatName.textContent = "Mr.Fluffles";
newCatImage.setAttribute('src', "images/cat.jpg");
newCatImage.setAttribute('height', "400");

catImage.addEventListener("click", function() {
      numOfTimes++;
      numOfTimesTag.textContent = numOfTimes;
      numOfTimesTag.style.color = "orangered";
      console.log("I'm being clicked");
},false);

newCatImage.addEventListener("click", function () {
      numOfTimes++;
      numOfTimesTag.textContent = numOfTimes;
      numOfTimesTag.style.color = "orangered";
      console.log("I'm being clicked");
}, false);

let catNameArr = [["Peanut","img/peanut.jpg.jpg","blue" ],["Nana","img/nana.jpg","red"],["Courage","img/courage.jpg",""], ["PuffBawlz","img/puffbawls",""],["Tiny","img/tiny,jpg","green"];
let cats = new Array();

class Cat {
  constructor(name,imagePath,color){
    this.name = name;
    this.image = imagePath;
    this.color = color; 
  }

  constructCatPageContent () {
     this.catHeadingTag = document.querySelector('h1');
     this.imageTag = document.querySelector('img');
     this.newCatImage = document.createElement('img');
     this.newCatTag = document.createElement('h1');
     document.appendChild(newCatTag);
     document.appendChild(newCatImage);
     this.newCatTag.textContent = this.name;
     this.newCatImage.setAttribute('src', "images/cat.jpg");
     this.newCatImage.setAttribute('height', "400");  
  }
}


catNameArr.forEach(function(name){
  cats.push(new Cat(name));
})

console.log(cats);