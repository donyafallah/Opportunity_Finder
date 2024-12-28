document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resumeForm");
    const backgroundColorSelector = document.getElementById("background-color");
    const backgroundPatternSelector = document.getElementById("background-pattern");

    let selectedBackgroundColor = "aquamarine"; // رنگ پیش‌فرض
    let selectedBackgroundPattern = "pixel"; // طرح پیش‌فرض

    // تغییر رنگ پس‌زمینه
    backgroundColorSelector.addEventListener("change", function (event) {
        selectedBackgroundColor = event.target.value;
        applyBackgroundStyle();
    });

    // تغییر طرح پس‌زمینه
    backgroundPatternSelector.addEventListener("change", function (event) {
        selectedBackgroundPattern = event.target.value;
        document.documentElement.style.setProperty('--background-color', selectedBackgroundColor);
        applyBackgroundStyle();
    });

    // تابع برای اعمال تغییرات زنده در پس‌زمینه رزومه
    function applyBackgroundStyle() {
        const resumeTemplate = document.querySelector(".resume-template");
        if (resumeTemplate) {
            resumeTemplate.className = `resume-template ${selectedBackgroundPattern}`;
            resumeTemplate.style.backgroundColor = selectedBackgroundColor;
        }
    }

    // مدیریت ارسال فرم و تولید رزومه
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const photo = document.getElementById("photo").files[0];
        let photoURL = "";

        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoURL = e.target.result;
                handleResume(photoURL);
            };
            reader.readAsDataURL(photo);
        } else {
            handleResume(photoURL);
        }

        function handleResume(photoURL) {
            const resumeContent = generateResumeContent(photoURL);
            const existingResume = document.querySelector(".resume-template");
            const container = document.querySelector(".container");

            // حذف رزومه قبلی
            if (existingResume) {
                container.removeChild(existingResume);
            }

            // افزودن رزومه جدید
            container.insertAdjacentHTML("beforeend", resumeContent);

            // اعمال استایل برای تغییرات زنده
            applyBackgroundStyle();
        }
    });

    // دکمه "دیدن رزومه در صفحه‌ای دیگر"
    document.getElementById("viewResume").addEventListener("click", function () {
        const photo = document.getElementById("photo").files[0];
        let photoURL = "";

        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoURL = e.target.result;
                openResumeInNewTab(photoURL);
            };
            reader.readAsDataURL(photo);
        } else {
            openResumeInNewTab(photoURL);
        }
    });

    // تابع تولید محتوای رزومه
    function generateResumeContent(photoURL) {
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

        return `
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
    }

    // نمایش رزومه در صفحه‌ای جدید
    function openResumeInNewTab(photoURL) {
        const resumeContent = generateResumeContent(photoURL);
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html lang="fa">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>رزومه</title>
                <link rel="stylesheet" href="resume.css">
            </head>
            <body>
                ${resumeContent}
            </body>
            </html>
        `);
        newWindow.document.close();
    }
});
