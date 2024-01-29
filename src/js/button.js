document.getElementsByName('contact-me').forEach(function (element) {
    element.addEventListener('click', function () {
        console.log('clicked');
        window.location = './contact.html';
    });
});

document.getElementsByName('photography-portfolio').forEach(function (element) {
    element.addEventListener('click', function () {
        console.log('clicked');
        window.location = './photography.html';
    });
});