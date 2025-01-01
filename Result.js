
function showContent(tabName) {

  const tabs = document.getElementsByClassName('tab-link');


  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }


  event.target.classList.add('active');


  const contentAreas = document.getElementsByClassName('tab-content');
  for (let i = 0; i < contentAreas.length; i++) {
    contentAreas[i].style.display = 'none';
  }


  document.getElementById(tabName).style.display = 'block';
}


var ctx = document.getElementById('myChart').getContext('2d');


var canvas = document.getElementById('myChart');
canvas.width = 400; 
canvas.height = 300; 


var myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['ایرانسل', 'داتین', 'جنگل', 'مجتمع فنی تهران'],
        datasets: [{
            label: 'وضعیت رزومه‌ها',
            data: [5, 3, 2, 6], 
            backgroundColor: 'rgba(87, 36, 100, 0.7)', 
            borderColor: 'rgba(87, 36, 100, 1)', 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
});


