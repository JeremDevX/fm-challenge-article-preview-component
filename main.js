const btnShare = document.querySelector(".btn");
const socials = document.querySelector(".preview__socials");
const socialLinks = document.querySelectorAll(".preview__socials-link");

// Function : Close socials
const closeSocials = () => {
  socials.classList.remove("preview__socials--active");
  btnShare.classList.remove("btn--active");
};

// Function : Toggle or close socials
const toggleSocials = (e) => {
  socials.classList.toggle("preview__socials--active");
  btnShare.classList.toggle("btn--active");
  e.stopPropagation();
};

// Open or close socials on click
btnShare.addEventListener("click", toggleSocials);

// Close socials on click outside
document.addEventListener("click", (e) => {
  if (!socials.contains(e.target) && !btnShare.contains(e.target)) {
    closeSocials();
  }
});

// Close socials on click on a social link
socialLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    closeSocials();
    e.stopPropagation();
  });
});
