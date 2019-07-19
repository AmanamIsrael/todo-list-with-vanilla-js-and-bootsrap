let addItem = document.querySelector("#btn");
addItem.addEventListener('click', addTask);

document.querySelector('body').addEventListener('keyup', event=>{
   if(event.keyCode == 13){

      if(document.querySelector('#input').value == ''){
         return;
      }

      addTask();
   }
});

function addTask(){
   let item = document.querySelector('#list');
   let li = document.createElement('li');
   let icon = document.createElement('i');
   let btn = document.createElement('button');
   icon.className = "fa fa-window-close close-button";
   li.className = "list-group-item";
   btn.className = 'float-right btn-close';
   let taskInput = document.getElementById("input");
   let task = taskInput.value; 
   li.appendChild(document.createTextNode(task));
   item.appendChild(li); 
   li.appendChild(btn);
   btn.appendChild(icon);
   document.querySelector('#input').value = '';
   
   btn.onclick = function(){
      removeTask(item, li)
   };
   

}
 function removeTask(item, li){
   item.removeChild(li);
  
 
}



