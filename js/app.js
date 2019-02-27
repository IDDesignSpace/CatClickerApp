let numOfTimesTag= document.querySelector('h2');
let numOfTimes = 0;

// catImage.addEventListener("click", function() {
//       numOfTimes++;
//       numOfTimesTag.textContent = numOfTimes;
//       numOfTimesTag.style.color = "orangered";
//       console.log("I'm being clicked");
// },false);

// newCatImage.addEventListener("click", function () {
//       numOfTimes++;
//       numOfTimesTag.textContent = numOfTimes;
//       numOfTimesTag.style.color = "orangered";
//       console.log("I'm being clicked");
// }, false);


// catNameArr creates an array of cat names, paths to that cats image, and an assigned color
let catNameArr = [["Peanut","img/peanut.jpg.jpg","blue" ],["Nana","img/nana.jpg","red"],["Courage","img/courage.jpg",""], ["PuffBawlz","img/puffbawls",""],["Tiny","img/tiny,jpg","green"]];
let cats = new Array();

// This uses an ES6 Class constructor to create a standard Cat object that creates the html and inserts the cats respective image and color.
class Cat {
  constructor(name,imagePath,color){
    this.name = name;
    this.image = imagePath;
    this.color = color; 
  }

  constructCatPageContent () {
      // Grabs header and img tags  
     this.catHeadingTag = document.querySelector('h1');
     this.imageTag = document.querySelector('img');

     // Creates header and img tags
     this.newCatImage = document.createElement('img');
     this.newCatTag = document.createElement('h1');

     // Appends image and header tag to document    
     document.appendChild(newCatTag);
     document.appendChild(newCatImage);

     // Sets the header text to the cats name 
     this.newCatTag.textContent = this.name;

     // Sets the images path to the imagePath property
     this.newCatImage.setAttribute('src', imagePath);
     this.newCatImage.setAttribute('height', "400");  
  }
}


catNameArr.forEach(function(name){
  cats.push(new Cat(name));
})

let cat = new Cat("whiskers");

// page.js is to create the 
let newList = document.createElement('ol');
document.body.appendChild(newList);


catNameArr.forEach(function(item) {

  // Creates new li element and selects the ol to add it to 
  let newListItem = document.createElement('li');
  let createdList = document.querySelector('ol');

  // Sets the text of each li to the the first item of each  sub-array 
  newListItem.textContent = item[0];

  newListItem.addEventListener('click',function(event) {
    console.log(event);
    console.log("I'm being clicked");
  })

  // Adds each newly created list item to the list element
  createdList.appendChild(newListItem);

});