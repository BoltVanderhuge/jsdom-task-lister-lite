const header = document.querySelector('h1')
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form#create-task-form')
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = e.target[0].value;
    const priority = e.target[1].value;
    console.log(priority)
    const formLi = document.createElement('li');
    formLi.contentEditable= "true";
    formLi.className = "task";
    const collection = document.querySelector('ul#tasks');

    formLi.innerText = input;
    if (priority === "Low") {
      formLi.style.color = "green"
    } else if (priority === "Medium"){
      formLi.style.color = "yellow"
  } else if (priority === "High"){
      formLi.style.color = "red"
  };
    let button = document.createElement('button');
    button.className = "delete-button";
    button.innerText = ' 🗑 Delete me!';
    formLi.appendChild(button);

    // let ebutton = document.createElement('button');
    // ebutton.className = "edit-button";
    // ebutton.innerText = ' Edit me!';
    // formLi.appendChild(ebutton);
    
    
    collection.append(formLi);
    
    
    button.addEventListener('click', function(e){
      const toDo = e.target.closest('li.task')
      console.log(toDo)
      toDo.remove()
    })
  })

});
