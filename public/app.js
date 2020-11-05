if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker failed', err));
}

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const submission = Object.fromEntries(new FormData(contactForm));

  console.log(submission);
});