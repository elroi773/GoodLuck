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


        function flipCard(cardContainer) {
          const card = cardContainer.querySelector('.card');
          card.classList.toggle('is-flipped');
      }