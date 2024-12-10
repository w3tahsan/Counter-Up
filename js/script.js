// counterup
const counter = document.querySelectorAll(".counter");
const array = Array.from(counter);

function funfact() {
  array.map((item) => {
    const counterValue = item.textContent;
    let count = 1;
    let speed = item.dataset.speed;

    function counterUp() {
      item.textContent = count++;
      if (counterValue < count) {
        clearInterval(stop);
      }
    }
    const stop = setInterval(counterUp, speed);
  });
}
funfact();
