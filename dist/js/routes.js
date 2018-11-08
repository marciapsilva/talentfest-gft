$(document).ready(() => {
  page('/', dashboard);
  page('/payments', payments);
  page('/insurance', insurance);
  page('/map', map);
  page();
})

function dashboard() {
  $('main').html(renderDashboard());
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