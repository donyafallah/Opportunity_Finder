
const dragArea = document.querySelector(".drag-area"); 
const input = dragArea.querySelector("input[type='file']"); 
const button = dragArea.querySelector("button"); 
const header = dragArea.querySelector("header"); 

button.addEventListener("click", () => { input.click(); }); 

input.addEventListener("change", (event) => { const file = event.target.files[0]; showFile(file); }); 

dragArea.addEventListener("dragover", (event) => { event.preventDefault(); 
   
    dragArea.classList.add("active"); header.textContent = "Release to Upload File"; }); 
    dragArea.addEventListener("dragleave", () => { dragArea.classList.remove("active"); 
    header.textContent = "Drag & Drop To Upload File"; }); 
    dragArea.addEventListener("drop", (event) => { event.preventDefault();
        
         dragArea.classList.remove("active"); const file = event.dataTransfer.files[0]; showFile(file); }); 
         
         function showFile(file) { const validExtensions = ["image/jpeg", "image/png", "application/pdf"]; 
        }