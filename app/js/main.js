// let modal = document.getElementById("modal");
// let triggerModal = document.getElementById('triggerModal')

// triggerModal.onclick = function() {
//     modal.style.visibility = 'visible'
// };

// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.visibility = "hidden";
//     }
// };

// function closeDialog() {
//     modal.style.visibility = 'hidden'
// }

const modalWindow = document.querySelectorAll(".toDo-add");
const body = document.querySelector("body");

let unlock = true;

const timeout = 800;

if (modalWindow.length > 0) {
  for (let index = 0; index < modalWindow.length; index++) {
    const modalWindows = modalWindow[index];
    modalWindows.addEventListener("click", function (event) {
      const currentModal = document.getElementById("modal");
      modalOpen(currentModal);
    });
  }
}

// open modal window

function modalOpen(currentModal) {
  if (currentModal && unlock) {
    const modalActive = document.querySelector(".modal.open");
    if (modalActive) {
      modalClose(modalActive, false);
    }
    
    currentModal.classList.add("open");
    currentModal.addEventListener("click", function (e) {
      if (!e.target.closest(".modal__inner")) {
        modalClose(e.target.closest(".modal"));
      }
    });
  }
}

// close modal window area

function modalClose(modalActive = true) {
  if (unlock) {
    modalActive.classList.remove("open");
  }
}

// close Modal window btn

const closeModalBtn = document.getElementById("cancel");
if (closeModalBtn.length > 0) {
  for (let index = 0; index < closeModalBtn.length; index++) {
    const el = closeModalBtn[index];
    el.addEventListener("click", function (event) {
      modalClose(el.closest(".modal"));
    });
  }
}
