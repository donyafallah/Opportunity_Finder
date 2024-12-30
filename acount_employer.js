// انتخاب تصویر پروفایل
const profileImage = document.querySelector('.profile_user img');

// انتخاب فرم
const form = document.getElementById('content');
function toggleForm() {
    var form = document.getElementById("myForm");
    if (form.style.display === "none") {
      form.style.display = "block"; // نمایش فرم
    } else {
      form.style.display = "none"; // پنهان کردن فرم
    }
  }

// اطمینان از وجود المان‌های موردنظر
if (profileImage && form) {
    // افزودن رویداد کلیک به تصویر
    profileImage.addEventListener('click', function () {
        // اگر فرم پنهان است، نمایش داده شود و اگر نمایش داده شده، پنهان شود
        if (form.style.display === 'block') {
            form.style.display = 'none'; // مخفی کردن فرم
        } else {
            form.style.display = 'block'; // نمایش فرم
        }
        
    });
} else {
    console.error('عناصر موردنظر پیدا نشدند. مطمئن شوید کلاس‌ها و آی‌دی‌ها درست هستند.');
}
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
  
