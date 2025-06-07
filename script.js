// script.js
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const messagesList = document.getElementById('messagesList');

  // 加载所有留言
  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messagesList.innerHTML = '';
    messages.forEach(message => {
      const messageItem = document.createElement('div');
      messageItem.classList.add('message-item');

      const avatar = document.createElement('div');
      avatar.classList.add('avatar');

      const messageContent = document.createElement('div');
      messageContent.classList.add('message-content');

      const messageTextElement = document.createElement('p');
      messageTextElement.classList.add('message-text');
      messageTextElement.textContent = message.text;

      messageContent.appendChild(messageTextElement);
      messageItem.appendChild(avatar);
      messageItem.appendChild(messageContent);

      messagesList.appendChild(messageItem);
    });
  }

  // 保存留言
  function saveMessage(messageText) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ text: messageText });
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  // 提交留言
  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText) {
      saveMessage(messageText);
      loadMessages();
      messageInput.value = '';
    }
  });

  // 页面加载时加载留言
  loadMessages();
});