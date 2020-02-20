const taskForms=document.getElementById("taskform")
const inputValues=document.querySelector(".form-control")
const taskLists=document.getElementById("tasklist")



taskForms.addEventListener("submit", function(e){  
  e.preventDefault()
    addElement()
})
function addElement() {
    console.log(inputValues)
    var newDiv=document.createElement("li")
    var newBtn=document.createElement("button");
    var newBtn1=document.createElement("button");
    var taskSpan=document.createElement("span");
    var taskValue=inputValues.value;
    var tasksId=document.createTextNode(taskValue)
    newBtn.setAttribute("class","btn btn-outline-secondary")
    newBtn1.setAttribute("class","btn btn-outline-secondary")
    newBtn.innerText="Complete"
    newBtn1.innerText="Delete"
    newDiv.appendChild(newBtn)
    newDiv.appendChild(newBtn1)
    newDiv.appendChild(taskSpan)
    taskSpan.appendChild(tasksId)
    taskLists.appendChild(newDiv)
    
    let x = true

    newBtn.addEventListener("click",function(e){
      if (x === true){
        x = false
        console.log('first x', x)
        newBtn.innerText="Undo" ;
        // taskSpan = tasSpan.style.color  => wrong !!!!!!!
        taskSpan.style.textDecoration= "line-through";        
      } else if (x === false) {
        x = true
        newBtn.innerText="Complete"
        taskSpan.style.textDecoration= "none"
      }
    }
    )
newBtn1.addEventListener("click",function(){
    newDiv=newDiv.style.display="none"
    })
  }



  