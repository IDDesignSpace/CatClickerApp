let newList = document.createElement('ol');
document.body.appendChild(newList);


let catNameArr = [["Peanut","img/cat.jpg","blue" ],["Nana","img/cat.jpg","red"],["Courage"," ",""], ["PuffBawlz","",""],["Tiny"]];

catNameArr.forEach(function(item) {
  // Creates new li element and adds it to the 
  let newListItem = document.createElement('li');
  let createdList = document.querySelector('ol');
  newListItem.textContent = item[0];
  createdList.appendChild(newListItem);


});