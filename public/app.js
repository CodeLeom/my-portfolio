if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker failed', err));
}

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const submission = Object.fromEntries(new FormData(contactForm));

    await firebase.firestore().collection('submissions').add(submission);
    alert('Your appointment has been successfully booked!\nI will reach out to you shortly');
  } catch(error) {
    console.log(error);
    alert(`An error occurred\n ${error}`);
  } finally {
    contactForm.reset();
  }
});