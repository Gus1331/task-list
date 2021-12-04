

// Variáveis

let nome = localStorage.getItem("nome");
let welcome = document.getElementById("welcome");
let input = document.getElementById("taskInput");
let task = "";

//Usando nome do usuário
if (nome == null){
    nome = prompt("What is your first name?");
    localStorage.setItem("nome", nome);
};
welcome.innerText ="Welcome "+ nome + "!";

function tasker(a){
    return task = a.value
}
function addTask(){
    console.log(task);
    if (task == ""){
        let warning = document.getElementById("warning");
        warning.style.display = "block";
    }
    else {
        warning.style.display = "none";
        localStorage.setItem("task",task)
        // Adicionar task á lista // forEach task push 
    }
}