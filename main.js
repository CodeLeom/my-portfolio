// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDvrkctdGOb5-zZp4PLaT_9lNfoB324lGw',
  authDomain: 'leomofthings.firebaseapp.com',
  databaseURL: 'https://leomofthings.firebaseio.com',
  projectId: 'leomofthings',
  storageBucket: 'leomofthings.appspot.com',
  messagingSenderId: '415646631982',
  appId: '1:415646631982:web:31604a255f674fc7f0f7bf',
  measurementId: 'G-G7CPVR7DFK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference messages collection
// var messagesRef = firebase.database().ref('messages');

//listen for form submission
document.getElementById('contact').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');
  var web = document.querySelector('input[type="checkbox"]:checked').value;
  var tutor = document.querySelector('input[type="checkbox"]:checked').value;
  var article = document.querySelector('input[type="checkbox"]:checked').value;
  var mentoring = document.querySelector('input[type="checkbox"]:checked')
    .value;

  //save message
  saveMessage(name, email, message, web, tutor, article, mentoring);
}

//function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message, web, tutor, article, mentoring) {
  var newmessageRef = messagesRef.push;
  newmessageRef.set({
    name: name,
    email: email,
    message: message,
    web: web,
    tutor: tutor,
    article: article,
    mentoring: mentoring,
  });
}
