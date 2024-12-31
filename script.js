const chatInput = document.querySelector(".chat-input textarea");
const chatbotToggler = document.querySelector(".chatbot1-toggler")
let userMessage;
const createChatli = (message, className) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat" , className );
    let chatContent = className == "outgoing" ? '<p>${message}</p>' : '<p>${message}</p>' ;
}
const handleChat = () => {
    userMessage = chatInput.Value.trim();
    if(!userMessage) return;
    console.log(userMessage) ;
    createChatli(userMessage , "outgoing");

}
chatbotToggler.addEventListener("click" , () => document.body.classList.toggle("show-chatbot1"));
sendChatBtn.addEventListener ("click" , handleChat);