// انتخاب تصویر پروفایل
const profileImage = document.querySelector('.profile_user img');

// انتخاب فرم
const form = document.getElementById('myForm');

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
