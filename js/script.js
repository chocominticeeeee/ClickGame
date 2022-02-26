// animejs使い方
// https://tr.you84815.space/animejs/
// https://easings.net/ja

// zText
// https://bennettfeely.com/ztext/

// Rellax使い方
// https://moshashugyo.com/media/rellax

const clickSe = new Audio("sound/click.mp3");
const niceSe = new Audio("sound/nice.mp3");
const goodSe = new Audio("sound/Good.mp3");
const excellentSe = new Audio("sound/excellent.mp3");
const OMGSe = new Audio("sound/OMG.mp3");
const GreatSe = new Audio("sound/Great.mp3");
const EndSe = new Audio("sound/終了.mp3");

const gameStartBtn = document.querySelector(".gameStartBtn");

// ゲームスタートボタン
function gameStart() {
  gameStartBtn.style.display = "none";
  setTimeout(EndGame, 10000);
}
function EndGame() {
  EndSe.play();
  if (!alert("Score " + ScoreCount + " ポイント")) {
    gameStartBtn.style.display = "block";
    cirlcleElem.style.left = "50%";
    cirlcleElem.style.top = "50%";
    ScoreCount = 0;
    Score.innerHTML = ScoreCount;
  }
}

// サークルがクリックされたとき

const Score = document.querySelector(".Score .__value");
let ScoreCount = 0;
const cirlcleElem = document.querySelector(".circle");
function circleMove() {
  clickSe.pause();
  clickSe.currentTime = 0;
  clickSe.play();
  ScoreCount++;
  if (ScoreCount == 3) {
    goodSe.play();
  } else if (ScoreCount == 6) {
    niceSe.play();
  } else if (ScoreCount == 9) {
    GreatSe.play();
  } else if (ScoreCount == 12) {
    excellentSe.play();
  } else if (ScoreCount == 15) {
    OMGSe.play();
  }
  Score.innerHTML = ScoreCount;
  let windowSizeW = window.innerWidth;
  let windowSizeH = window.innerHeight;
  // 横乱数
  const minW = 100;
  const maxW = windowSizeW - 20;
  const randomW = Math.floor(Math.random() * (maxW + 1 - minW)) + minW;

  // 縦乱数
  const minH = 150;
  const maxH = windowSizeH - 100;
  const randomH = Math.floor(Math.random() * (maxH + 1 - minH)) + minH;

  cirlcleElem.style.left = randomW + "px";
  cirlcleElem.style.top = randomH + "px";
}
// 設定

// サークルサイズ
const settingsCircleSizebig = document.querySelector(".__circleSize .bigBtn");
const currentCircleSizeValue = document.querySelector(".__circleSize--value");

function circleSizeBig() {
  const CurrentSizeW = cirlcleElem.clientWidth;
  const CurrentSizeH = cirlcleElem.clientHeight;
  if (CurrentSizeW < 200) {
    cirlcleElem.style.width = CurrentSizeW + 50 + "px";
    cirlcleElem.style.height = CurrentSizeH + 50 + "px";
    currentCircleSizeValue.innerHTML = cirlcleElem.style.height;
  }
}
function circleSizeSmall() {
  const CurrentSizeW = cirlcleElem.clientWidth;
  const CurrentSizeH = cirlcleElem.clientHeight;
  if (CurrentSizeW > 50) {
    cirlcleElem.style.width = CurrentSizeW - 50 + "px";
    cirlcleElem.style.height = CurrentSizeH - 50 + "px";
    currentCircleSizeValue.innerHTML = cirlcleElem.style.height;
  }
}
