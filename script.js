
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");



submit.addEventListener('click', function() {
    // Clear input fields after 1 second
    setTimeout(function() {
        fullname.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    }, 1000); // 1000 milliseconds = 1 second
});
    
   
