$(document).ready(() => {
  page('/', login);
  page('/dashboard', dashboard);
  page('/payments', payments);
  page('/loan', loan);
  page('/insurance', insurance);
  page('/map', map);
  page('/confirmation/:valor', confirmation)
  page('/successful_operation', successfulOperation);

  page();
})

function login() {
  $('nav').html("");
  $('main').html(renderLogin());
  $('#mapContainer').hide();
  $('#banana').hide();

  $('#botaoLogin').click(function(e){
    const nome = $("#loginName").val();
    const agencia = $("#loginAg").val();
    const conta = $("#loginCC").val();
    localStorage.setItem("nome", nome);
    localStorage.setItem("agencia", agencia);
    localStorage.setItem("conta", conta);
    page('/dashboard')
    e.preventDefault()
  })
}

function dashboard() {
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('main').html(renderDashboard());
  $('#botaoLogout').click(function(e){
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function confirmation(ctx) {
  $('main').html(renderConfirmation(ctx.params.valor));
}

function payments() {
  $('main').html(renderPayments());

}

function loan() {
  $('main').html(renderLoan());
}

function insurance() {
  $('main').html(renderInsurance());
  $('#bananaoButao').click(e => {
    page("/confirmation");
    e.preventDefault();
  });

  
}

function map() {
  $('main').html(renderMap());

}

function successfulOperation() {
  $('main').html(renderSucessfulOperation());
}
