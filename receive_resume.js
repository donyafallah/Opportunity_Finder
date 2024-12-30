function toggleMessages() {
    var messages = document.getElementById('messages');
    if (messages.style.display === 'none' || messages.style.display === '') {
      messages.style.display = 'block'; // نمایش پیام‌ها
    } else {
      messages.style.display = 'none'; // پنهان کردن پیام‌ها
    }
  }
  
  // این کد برای پنهان کردن پیام‌ها بعد از اینکه موس از روی آیکون رفت
  document.querySelector('.bell').addEventListener('mouseleave', function() {
    document.getElementById('messages').style.display = 'none';
});