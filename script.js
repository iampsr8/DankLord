const jokeContainer = document.querySelector(".container__joke");
const btnGenerate = document.querySelector(".btn");
const getJoke = async function () {
  const res = await fetch("https://v2.jokeapi.dev/joke/Dark");
  const data = await res.json();
  if (data.joke) {
    jokeContainer.textContent = data.joke;
  } else {
    const joke = `${data.setup}\n\n${data.delivery}`;
    jokeContainer.textContent = joke;
  }
};
getJoke();
btnGenerate.addEventListener("click", function () {
  getJoke();
});
