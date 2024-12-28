document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resumeForm");
    const backgroundColorSelector = document.getElementById("background-color");
    const backgroundPatternSelector = document.getElementById("background-pattern");

    let selectedBackgroundColor = "aquamarine"; // رنگ پیش‌فرض
    let selectedBackgroundPattern = "gradient1"; // طرح پیش‌فرض

    // تغییر رنگ پس‌زمینه
    backgroundColorSelector.addEventListener("change", function (event) {
        selectedBackgroundColor = event.target.value;
        applyBackgroundStyle(); // فراخوانی تغییرات زنده
    });

    // تغییر طرح پس‌زمینه
    backgroundPatternSelector.addEventListener("change", function (event) {
        selectedBackgroundPattern = event.target.value;
        applyBackgroundStyle(); // فراخوانی تغییرات زنده
    });

    // تابع برای اعمال تغییرات زنده در پس‌زمینه رزومه
    function applyBackgroundStyle() {
        const resumeTemplate = document.querySelector(".resume-template");
        if (resumeTemplate) {
            // حذف کلاس‌های قبلی و اضافه کردن طرح جدید
            resumeTemplate.className = `resume-template ${selectedBackgroundPattern}`;
            resumeTemplate.style.backgroundColor = selectedBackgroundColor;
        }
    }

    // مدیریت ارسال فرم و تولید رزومه
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // دریافت داده‌های ورودی
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const jobTitle = document.getElementById("jobTitle").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "نامشخص";
        const education = document.getElementById("education").value;
        const province = document.getElementById("province").value || "نامشخص";
        const description = document.getElementById("description").value;
        const softSkill = document.getElementById("softskill").value;
        const lang = document.getElementById("lang").value;
        const hardSkill = document.getElementById("hardskill").value;
        const socialMedia = document.getElementById("socialmedia").value;
        const photo = document.getElementById("photo").files[0];

        let photoURL = "";
        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoURL = e.target.result;
                generateResume(photoURL);
            };
            reader.readAsDataURL(photo);
        } else {
            generateResume(photoURL);
        }

        function generateResume(photoURL) {
            const resumeTemplate = `
                <div class="resume-template ${selectedBackgroundPattern}" style="background-color: ${selectedBackgroundColor};">
                    ${photoURL ? `<img src="${photoURL}" alt="عکس پروفایل" class="profile-img">` : ""}
                    <div class="resume-content">
                        <p><strong>نام و نام خانوادگی:</strong> ${firstName} ${lastName}</p>
                        <p><strong>عنوان شغلی:</strong> ${jobTitle}</p>
                        <p><strong>ایمیل:</strong> ${email}</p>
                        <p><strong>شماره تماس:</strong> ${phone}</p>
                        <p><strong>جنسیت:</strong> ${gender}</p>
                        <p><strong>تحصیلات:</strong> ${education}</p>
                        <p><strong>استان:</strong> ${province}</p>
                        <p><strong>سوابق کاری:</strong> ${description}</p>
                        <p><strong>مهارت‌های نرم:</strong> ${softSkill}</p>
                        <p><strong>زبان‌ها:</strong> ${lang}</p>
                        <p><strong>مهارت‌های سخت:</strong> ${hardSkill}</p>
                        <p><strong>شبکه‌های اجتماعی:</strong> ${socialMedia}</p>
                    </div>
                </div>
            `;

            const container = document.querySelector(".container");
            const existingResume = document.querySelector(".resume-template");

            // حذف رزومه قبلی
            if (existingResume) {
                container.removeChild(existingResume);
            }

            // افزودن رزومه جدید
            container.insertAdjacentHTML("beforeend", resumeTemplate);

            // اعمال استایل برای تغییرات زنده
            applyBackgroundStyle();
        }
    });
});
