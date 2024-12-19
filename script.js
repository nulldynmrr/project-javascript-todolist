let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can't blank";
    console.log("failure");
  } else {
    console.log("sucsess");
    msg.innerHTML = "";
    dataDiterima();
  }
};

let data = {};
let dataDiterima = () => {
  data["text"] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `<div class="containerPost">
    <p class="box">${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;

  input.value = "";
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  deletePost(e);
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
