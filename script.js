document.getElementById("projects").addEventListener("click", function () {
  document
    .getElementById("shopify-projects")
    .scrollIntoView({ behavior: "smooth" });
});

const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionCollapses = document.querySelectorAll(".accordion-collapse");

document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.querySelector(".content");
  const imgElement = document.querySelector(".image img");

  const tl = gsap.timeline();

  tl.from(contentElement, {
    x: -1000,
    opacity: 0,
    duration: 1,
  }).from(
    imgElement,
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    0
  );

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.from('.skill', {
          y: -100,
          duration: 0.5,
          stagger: 0.1
        });

        observer.unobserve(entry.target);
      }
    });
  }

  const options = {
    root: null, 
    threshold: 0.1
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  const mySkillsElement = document.querySelector('.skill');

  if (mySkillsElement) {
    observer.observe(mySkillsElement);
  }

  function handleShopifyIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to('#shopify', {
          opacity: 1,
          duration: 3
        });
        observer.unobserve(entry.target);
      }
    });
  }

  const shopifyOptions = {
    root: null,
    threshold: 0.6
  };

  const shopifyObserver = new IntersectionObserver(handleShopifyIntersection, shopifyOptions);

  const shopifyElement = document.getElementById('shopify');

  if (shopifyElement) {
    gsap.set(shopifyElement, { opacity: 0 });
    shopifyObserver.observe(shopifyElement);
  }

  const c1Card = document.querySelector('.card[for="c1"]');
  c1Card.classList.add("expanded");

  if (window.innerWidth <= 987) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (c) {
          c.classList.remove("expanded");
        });

        this.classList.add("expanded");
      });
    });
  }
});
