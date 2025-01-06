// Select the target element you want to observe using querySelector
const targetElement = document.querySelector('.skills-flex'); 
const targetElementa = document.querySelector('.about-flex');
const targetElementx = document.querySelector('.exp-flex');


// Create an IntersectionObserver
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'observed' class when the element enters the viewport
      entry.target.classList.add('observed');
    } else {
      // Remove the 'observed' class when it leaves the viewport
      entry.target.classList.remove('observed');
    }
  });
}, {
  threshold: 0.1 // Trigger when 50% of the element is visible
});

// Start observing the target element
observer.observe(targetElementa); 
observer.observe(targetElementx);
observer.observe(targetElement);

// Pass the variable directly
let SendButton = document.querySelector("#send-button");

SendButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the form submission
  alert("Message Sent!");
});