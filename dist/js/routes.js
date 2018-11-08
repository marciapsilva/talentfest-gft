$(document).ready(() => {
  page('/', home);
  page('/payments', payments);
  page('/insurance', insurance);
  page('/map', map);
  page();
})

function home() {
  $('main').html(renderHome());
}

function payments() {
  $('main').html(renderPayments());
}

function insurance() {
  $('main').html(renderInsurance());
}

function map() {
  $('main').html(renderMap());
}