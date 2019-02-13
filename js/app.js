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