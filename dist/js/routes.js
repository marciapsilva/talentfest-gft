$(document).ready(() => {
  page('/', dashboard);
  page('/payments', payments);
  page('/loan', loan);
  page('/insurance', insurance);
  page('/map', map);
  page('/successful_operation', successfulOperation);

  page();
})

function dashboard() {
  $('main').html(renderDashboard());
}

function payments() {
  $('main').html(renderPayments());
}

function loan() {
  $('main').html(renderLoan());
}

function insurance() {
  $('main').html(renderInsurance());
}

function map() {
  $('main').html(renderMap());

}

function successfulOperation() {
  $('main').html(renderSucessfulOperation());
}
