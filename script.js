const observer = new IntersectionObserver((entries) =>{
     entries.forEach((entry) =>{
         console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
       }else{
           entry.target.classList.remove('.show')
         }
     });
 });

 const hiddenEl = document.querySelectorAll('.hidden-element');
hiddenEl.forEach((el)=> observer.observe(el));


// document.getElementById("projects").addEventListener("click", function () {
//   document
//     .getElementById("shopify-projects")
//     .scrollIntoView({ behavior: "smooth" });
// });

const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionCollapses = document.querySelectorAll(".accordion-collapse");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    accordionCollapses.forEach((collapse) => {
      if (collapse !== button.nextElementSibling) {
        collapse.classList.remove("show");
      }
    });
  });
});



