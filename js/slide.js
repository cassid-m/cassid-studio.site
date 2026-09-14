// // --- Swiper の設定 ---
const swiper = new Swiper(".mySwiper", {
  loop: true, // 無限ループ
  speed: 500, // スライドの切り替え速度 (ms)

  // 矢印ナビゲーション
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 自動再生の設定
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// 再生 / 停止ボタンの制御（安全対策の if文 を追加）
const playToggleBtn = document.querySelector(".swiper-button-play-toggle");
let isPlaying = true;

if (playToggleBtn) {
  playToggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      swiper.autoplay.stop();
      playToggleBtn.textContent = "▶"; // 停止中は再生アイコンに
    } else {
      swiper.autoplay.start();
      playToggleBtn.textContent = "❚❚"; // 再生中は一時停止アイコンに
    }
    isPlaying = !isPlaying;
  });
}
