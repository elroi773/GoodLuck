const examDate = new Date('2024-11-14T00:00:00');

        function updateCountdown() {
            const now = new Date();
            const timeDifference = examDate - now;

            if (timeDifference <= 0) {
                document.getElementById('countdown').innerText = 'D-Day';
                clearInterval(countdownInterval);
                return;
            }

            const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerText = `D-${days}`;
        }

        const countdownInterval = setInterval(updateCountdown, 1000);

        function flipCard(cardContainer) {
          const card = cardContainer.querySelector('.card');
          card.classList.toggle('is-flipped');
      }

      const userName = localStorage.getItem("userName");
        if (userName) {
            document.getElementById("greeting").innerText = `${userName}님의
            첫 도전을 응원합니다.`;
        }
        function checkProgress() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let checkedCount = 0;
            
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) checkedCount++;
            });

            const totalItems = checkboxes.length;
            const progressMessage = document.getElementById('progressMessage');

            if (checkedCount === totalItems) {
                progressMessage.textContent = "모든 준비 완료! 이제 마음 편히 시험을 보세요!!";
            } else {
                progressMessage.textContent = `현재 준비 ${checkedCount} / ${totalItems} 완료`;
            }
        }
  