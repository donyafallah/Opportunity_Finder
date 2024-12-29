const chatInput = document.querySelector(".chat-input textarea");
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
sendChatBtn.addEventListener ("click" , handleChat);