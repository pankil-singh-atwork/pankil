const sendMessage = (e) => {
    e.preventDefault();
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email-id').value);
    console.log(document.getElementById('number').value);
    console.log(document.getElementById('message').value);
}