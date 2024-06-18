/*setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "block";
}, 1500);*/

function applyAnimationToAllChildrenOfMain(animation, duration) {
  const mainElement = document.querySelector("main");
  if (mainElement) {
    const children = mainElement.querySelectorAll("*");
    children.forEach((child) => {
      child.style.animation = animation;
      child.style.animationDuration = duration;
    });
  }
}
applyAnimationToAllChildrenOfMain("fadeInDown", "2s");

let year = new Date().getFullYear();
let age = year - 2009;

document.getElementById(
  "introtxt"
).innerHTML = `Welcome to my journey in the Hi-Tech world. <br/> im currently ${age} years old and an Intern at Loop.`;
