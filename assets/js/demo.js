document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fff',
    lineColor: '#19b9d1'
  });
  var intro = document.getElementById('inner');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);