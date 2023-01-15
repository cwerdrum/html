// mailto:e-mail@gmail.com?subject=subiect&body=mesajul

const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit",sendMsg);

const emailLink = 'mailto:chrisrafael20091603@gmail.com'

function sendMsg(event) {
    event.preventDefault(); // previne functionalitatea default
    const url = emailLink + "?subject=" + subject.value + "&body=" + "New message from "
+ name.value + " " + message.value;

    window.location.href = url;

    subject.value = "";
    name.value = "";
    
}