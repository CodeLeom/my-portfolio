if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker failed', err));
}

const contactForm = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

contactForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const submission = Object.fromEntries(new FormData(contactForm));
    submitButton.disabled = true;

    await firebase.firestore().collection('submissions').add(submission);
    await fetch(
      'https://script.google.com/macros/s/AKfycbx8YHlhcZZwxlqfZ-wXqdDThBh3d9mPmzF4YbhSmUUVhbgfqfMk/exec',
      { method: 'POST', body: submission }
    );
    alert('Thanks for contacting.\nI will reach out to you shortly');
  } catch (error) {
    console.log(error);
    alert(`An error occurred\n ${error}`);
  } finally {
    contactForm.reset();
    submitButton.disabled = false;
  }
});