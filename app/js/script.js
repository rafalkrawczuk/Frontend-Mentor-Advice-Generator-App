const adviceButton = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceQuote = document.getElementById("advice-quote");
const adviceImg = document.getElementById("advice-img");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    adviceImg.src = "images/pattern-divider-desktop.svg";
  } else {
    adviceImg.src = "images/pattern-divider-mobile.svg";
  }
});

const displayQuote = (advice, id) => {
  adviceId.textContent = `#${id}`;
  adviceQuote.textContent = `“${advice}”`;
};

const getAdvice = async () => {
  const urlApi = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    const { advice, id } = data.slip;
    displayQuote(advice, id);
  } catch (error) {
    console.log("Whoops!", error);
  }
};

adviceButton.addEventListener("click", getAdvice);
