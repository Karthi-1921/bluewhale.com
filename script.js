const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage("You", input);
  respond(input.toLowerCase());
  userInput.value = "";
}

function addMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(input) {
  let response = "I'm not sure how to respond to that.";

  if (input.includes("hello") || input.includes("hi")) {
    response = "Hello! How can I help you today?";
  } else if (input.includes("your name")) {
    response = "I'm your Blue whale AI assistant.";
  } else if (input.includes("time")) {
    response = `The current time is ${new Date().toLocaleTimeString()}`;
  }

  setTimeout(() => {
    addMessage("AI", response);
  }, 500);
}