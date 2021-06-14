alert("hello");

const addButton = document.querySelector('.addButton');
var input= document.querySelector('.input');
const container = document.querySelector('container');

class item{
      constructor(itemName){
      //create the item div //
      this.createDiv(itemName);
  }

  createDiv(itemName){
      Let input= document.createElement('input');
      input.Value = itemName;
      input.disabled = true;
      input.classList.add('item_input');
      input.type = "text";

      let itemBox = document.createElement('div');
      itemBox.classList.add('item');

      let editButton = document.createElement('button');
      editButton.innerHTML = 'EDIT';
      editButton.classList.add('editButton');

      let removeButton = document.createElement('button');
      editButton.innerHTML = 'REMOVE';
      removeButton.classList.add('removeButton');

      container.appendChild(itemBox);
      
      itemBox.appendChild(input);
      itemBox.appendChild(editbutton);
      itemBox.appendChild(removechild);

      editButton.addEventListener('click', () => this.edit(input));

      removeButton.addEventListener('click', () => this.remove(itemBox));
}
 edit(input){
       input.disabled = !input.disabled;
 }
 remove(item){
       container.removechild(item);
 }
}  
function check(){
      if(input.value != "") {
            new item(input.value);
            input.value = "";
      }
}
addButton.addEventListener('click',check);
window.addEventListener('keydown'),(e) =>{
      if(e.which == 13){
            check();
      }
}