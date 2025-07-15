// notes container aur create button ko select kia
let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// function jo localStorage se notes uthata hai aur container me dikhata hai
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// function jo notes ko localStorage me save karta hai
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// jb create button par click hoga to naya note create hoga
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p"); // naya paragraph element bna rahe hain
    let img = document.createElement("img"); // delete icon ke liye image bana rahe hain
    inputBox.className = "input-box"; // class assign kar rahe hain
    inputBox.setAttribute("contenteditable", "true"); // is box ko editable bana rahe hain
    img.src = "images/delete.png"; // delete icon ka source set kar rahe hain

    // inputBox me image add kar ke usay notes container me lagate hain
    notesContainer.appendChild(inputBox).appendChild(img);

    // likhne ke baad storage update ho jaye
    inputBox.onkeyup = function () {
        updateStorage();
    };
});

// jb kisi note ya uski delete image par click ho
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        // agar image par click hua to uska parent (note) delete kar do
        e.target.parentElement.remove();
        updateStorage(); // delete hone ke baad storage update karo
    } else if (e.target.tagName === "P") {
        // agar note par click hua to sab notes par keyup lagao taake changes save ho sakein
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

// jb Enter press karein to new line add ho lekin page submit na ho
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak"); // new line insert kar rahe hain
        event.preventDefault(); // default kaam (form submit ya new paragraph) roka
    }
});

// jb page reload ho to saved notes dubara show ho jayein
showNotes();
