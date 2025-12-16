const audio = new Audio('bgm.mp3');
audio.loop = true;
audio.preload = 'auto';

const btn = document.getElementById('music-toggle');

function updateButton(){
  btn.textContent = audio.paused ? 'Play music' : 'Pause music';
}

btn.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
    } catch (e) {
      // 브라우저가 자동 재생을 막을 경우 사용자 클릭으로 재생 시도
    }
  } else {
    audio.pause();
  }
  updateButton();
});

// 자동 재생 시도 (많은 브라우저는 사용자 제스처 필요)
audio.play().then(updateButton).catch(updateButton);