const today = new Date();
const targetDate = new Date('2024-11-14');

const diffTime = targetDate - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


document.getElementById('countdown').innerHTML = `D-${diffDays}`;

function checkProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) checkedCount++;
    });
  
    const totalItems = checkboxes.length;
    const progressMessage = document.getElementById('progressMessage');
  
    if (checkedCount === totalItems) {
      progressMessage.textContent = "모든 준비 완료! 이제 마음 편히 시험을 보세요.";
    } else {
      progressMessage.textContent = `현재 준비 ${checkedCount} / ${totalItems} 완료`;
    }
  }
  