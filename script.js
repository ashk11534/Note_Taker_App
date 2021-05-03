const title = document.querySelector(".title");
const message = document.querySelector(".message-text");
const btnSubmit = document.querySelector(".btn-submit");
const showNotes = document.querySelector(".show-notes");
const icon = document.querySelector(".icon-1");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const incrementId = Math.random();
  const titleText = title.value;
  const messageText = message.value;
  title.value = message.value = "";

  //   console.log(titleText, messageText);
  const html = `<ul class="note-items" id="${incrementId}">  
            <div class="d-flex align-items-center justify-content-center"><div class="hidden"><button type="submit" id="${incrementId}" class="btn btn-light">${(document.createElement(
    "button"
  ).innerHTML = "Unlock")}</button></div></div>       
            <div class="card">
               <div class="card-header">
                    <li>${titleText}</li>
               </div>
               <div class="card-body">
                    <li class="mb-3">${messageText}</li>
               
                    <button type="submit" id="${incrementId}" class="btn btn-primary">${(document.createElement(
    "button"
  ).innerHTML = "Update")}</button>
                    <button type="submit" id="${incrementId}" class="btn btn-warning">${(document.createElement(
    "button"
  ).innerHTML = "Hide")}</button>
                    <button type="submit" id="${incrementId}" class="btn btn-danger">${(document.createElement(
    "button"
  ).innerHTML = "Delete")}</button>
               </div>
              </div>
                </ul>`;

  showNotes.insertAdjacentHTML("afterbegin", html);
  const buttons = document.querySelectorAll("button");
  const notes = document.querySelectorAll("ul");

  buttons.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.innerHTML === "Update") {
        for (const note of notes) {
          if (element.id === note.id) {
            const updatedTitle = prompt("Enter title");
            const updatedText = prompt("Write what you want");
            note.children[1].children[0].children[0].textContent = updatedTitle;
            note.children[1].children[1].children[0].textContent = updatedText;
          }
          break;
        }
      } else if (element.innerHTML === "Delete") {
        for (const note of notes) {
          if (element.id === note.id) {
            note.style.display = "none";
          }
          break;
        }
      } else if (element.innerHTML === "Hide") {
        for (const note of notes) {
          if (element.id === note.id) {
            const password = prompt("Enter password");
            note.classList.add(password);
            note.children[0].classList.add("overlay");
            note.children[0].children[0].classList.remove("hidden");
          }
          break;
        }
      } else if (element.innerHTML === "Unlock") {
        for (const note of notes) {
          if (element.id === note.id) {
            const password2 = prompt("Enter password");
            if (note.classList.contains(password2)) {
              note.children[0].classList.remove("overlay");
              note.children[0].children[0].classList.add("hidden");
            } else alert("Wrong password!!!");
          }
          break;
        }
      }
    });
  });
});

icon.addEventListener("click", function () {
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
  document.querySelector("body").classList.toggle("dark");
  icon.classList.toggle("icon-color");
  document.querySelector("h1").classList.toggle("h1-text-color");
});
