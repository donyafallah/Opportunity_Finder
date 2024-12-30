
function showContent(tabName) {
  // گرفتن همه دکمه ها
  const tabs = document.getElementsByClassName('tab-link');

  // حذف کلاس active از همه دکمه ها
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // اضافه کردن کلاس active به دکمه فعلی
  event.target.classList.add('active');

  // پنهان کردن همه بخش های محتوا
  const contentAreas = document.getElementsByClassName('tab-content');
  for (let i = 0; i < contentAreas.length; i++) {
    contentAreas[i].style.display = 'none';
  }

  // نمایش بخش محتوای مورد نظر
  document.getElementById(tabName).style.display = 'block';
}
