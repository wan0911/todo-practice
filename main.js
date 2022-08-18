//HEADER
let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일


document.querySelector(".top_info").innerHTML = year + "/" + month + "/" + date;

const liEl = document.querySelectorAll("li").length;
document.querySelector(".task_info").innerHTML = liEl + " Tasks";


//TODO-LIST
const btnEl = document.querySelector("#btn_submit");
const todoInput = document.querySelector(".todo_input");
const todos = document.querySelector(".todo_list");
const msg = document.querySelector(".msg");

//element
const deleteBtn = document.querySelector(".delete_btn");


//
btnEl.addEventListener("click", onSubmit);
function onSubmit(e) {
    e.preventDefault;

    if (todoInput.value === "") {
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 2000);
        return;
    }

    const li = document.createElement("li");
    li.classList.add("item");

    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-regular fa-square");
    icon.classList.add("check_item");
    li.append(icon);

    const liText = document.createElement("p");
    liText.classList.add("item__text");
    liText.textContent = todoInput.value;
    // li.append(document.createTextNode(todoInput.value));
    li.append(liText);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete_btn");
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-regular fa-trash-can delete_icon");
    deleteIcon.classList.add("delete_icon");
    deleteBtn.append(deleteIcon);
    li.append(deleteBtn);

    todos.appendChild(li);
    todoInput.value = "";
}


// js 추가 : 클래스, 상단 텍스트, 전환

//DELETE
todos.addEventListener("click", function (e) {
    // console.log(e.target.className);
    if (e.target.className === "delete_btn") {
        // console.log(e.target.parentNode);
        e.target.parentNode.remove();
    } else if (e.target.className === "fa-regular fa-trash-can delete_icon") {
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.remove();
    }
})


//CHECKBOX

todos.addEventListener("click", function (e) {
    if (e.target.className === "fa-regular fa-square check_item") {
        e.target.setAttribute("class", "fa-solid fa-square-check");
        console.log(e.target.className);
        e.target.classList.add("check_item");
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.style = "text-decoration: line-through"
    } else if (e.target.className === "fa-solid fa-square-check") {
        e.target.setAttribute("class", "fa-solid fa-square-check");
        e.target.classList.add("check_item");
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.style = "text-decoration: none"
    }
});
