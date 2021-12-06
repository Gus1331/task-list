// Variáveis
let nome = localStorage.getItem("nome");
let welcome = document.getElementById("welcome");
let input = document.getElementById("taskInput");
let task = "";
let list = document.getElementById("list");
let warning = document.getElementById("warning");
let x = 0;
let li = []


//Usando nome do usuário
if (nome == null){
    nome = prompt("What is your first name?");
    localStorage.setItem("nome", nome);
};
welcome.innerText ="Welcome "+ nome + "!";


//Montado a lista
li.push(localStorage.getItem("list")); //Colocando dados guardados na lista
if (localStorage.getItem("list") != null){
    list.innerHTML = localStorage.getItem("list")
};


//Pegando valor digitado e guardando
function tasker(a){
    return task = a.value
};

//Adicionando valor á tela e guardando valor dentro de um array
function addTask(){
    if (task == ""){warning.style.display = "block";}
    else {
        warning.style.display = "none";
        console.log("Adding new task: "+task);      //Monitorando funções pelo console
        
        input.value = ""
        li.push("<li><input type='checkbox'></input>"+task+"</li>");
        localStorage.setItem("list", li);
        list.innerHTML = localStorage.getItem("list");
    }
};

//Limpando a lista
function clearList(){
    if(localStorage.getItem("list") == null){}
    else {
    console.log("All tasks clear!");                //Monitorando funções pelo console

    localStorage.clear();
    li = [];
    localStorage.setItem("nome", nome);
    list.innerHTML = "<li><input type='checkbox' value=''> Create new tasks</li>"
    }
};