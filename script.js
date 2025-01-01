const chatInput = document.querySelector(".chat-input textarea");
const chatbotToggler = document.querySelector(".chatbot1-toggler")


chatbotToggler.addEventListener("click" , () => document.body.classList.toggle("show-chatbot1"));
sendChatBtn.addEventListener ("click" , handleChat);