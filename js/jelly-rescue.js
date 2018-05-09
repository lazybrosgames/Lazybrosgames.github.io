$('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
});
$(document).on('click', '.portfolio-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});
var html5 = document.getElementById('html5-link');

html5.addEventListener('click', function (event) {

    event.preventDefault();

    ga('send', 'event', 'Platform', 'click', 'Itchio', {
        hitCallback: function () {
            window.location.replace('https://lazybrosgames.itch.io/jellyrescue');
        }
    });
    ga('send', 'event', 'Signup Form', 'submit', {
        hitCallback: function () {
            form.submit();
        }
    });
});