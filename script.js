// script.js
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const messagesList = document.getElementById('messagesList');

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText) {
      const messageItem = document.createElement('div');
      messageItem.classList.add('message-item');

      const avatar = document.createElement('div');
      avatar.classList.add('avatar');

      const messageContent = document.createElement('div');
      messageContent.classList.add('message-content');

      const messageTextElement = document.createElement('p');
      messageTextElement.classList.add('message-text');
      messageTextElement.textContent = messageText;

      messageContent.appendChild(messageTextElement);
      messageItem.appendChild(avatar);
      messageItem.appendChild(messageContent);

      messagesList.appendChild(messageItem);

      messageInput.value = '';
    }
  });
});