console.log('hello');

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.style.opacity = "0";
  // this means all the loader element is animatable and the opacity is 0

  loader.classList.add("hide");
});