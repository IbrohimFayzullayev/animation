let userInput = document.querySelector(".user__input");
let userOutput = document.querySelector(".user__output");
let addBtn = document.querySelector(".add__btn");
let removeBtn = document.querySelector(".remove__btn");
let main = document.querySelector(".main");
let id = 0;
function delete2(id) {
  document.getElementById(id).remove();
}
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let key = "i" + id++;
  let uz = `<div id="${key}" class="write">
    <input
      class="user__output left"
      type="text"
      placeholder="${userInput.value}"
      readonly
    />
    <button class="btn remove__btn right" onclick=delete2("${key}")>Delete</button>
  </div>`;
  main.insertAdjacentHTML("afterbegin", uz);
  userInput.value = "";
});
