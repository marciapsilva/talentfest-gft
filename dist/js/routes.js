$(document).ready(() => {
  page('/', login);
  page('/dashboard', dashboard);
  page('/payments', payments);
  page('/loan', loan);
  page('/insurance', insurance);
  page('/map', map);
  page('/confirmation', confirmation)
  page('/successful_operation', successfulOperation);

  page();
})

function login() {
  $('nav').html("");
  $('main').html(renderLogin());
  $('#mapContainer').hide();
  $('#mapText').hide();
  $('#buttonsContainer').hide();
  $('#botaoLogin').click(function (e) {
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
  $('#mapContainer').hide();
  $('main').show();
  $('#mapText').hide();
  $("#buttonsContainer").html("");
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('main').html(renderDashboard());
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function confirmation(ctx) {
  $('#mapContainer').hide();
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('main').html(renderConfirmation(ctx.params.valor));
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function payments() {
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('#mapContainer').hide();
  $('main').html(renderPayments());
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function loan() {
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('#mapContainer').hide();
  $('main').html(renderLoan());
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function insurance() {
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('#mapContainer').hide();
  $('main').html(renderInsurance());
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function map() {
  $('main').hide();
  $('#mapText').show();
  $('#mapContainer').show();
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('#mapText').html(renderMap());
  $("#buttonsContainer").show();
  $("#buttonsContainer").html(`<div class="d-flex justify-content-center mt-4"><a href="/dashboard" class="text-light btn btn-secondary p-3 btn-font-size font-strong ">Voltar</a></div>`);
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}

function successfulOperation() {
  $('#mapContainer').hide();
  const nome = localStorage.getItem("nome");
  const agencia = localStorage.getItem("agencia");
  const conta = localStorage.getItem("conta");
  $('nav').html(renderNavBar(nome, agencia, conta));
  $('main').html(renderSucessfulOperation());
  $('#botaoLogout').click(function (e) {
    localStorage.clear();
    page('/')
    e.preventDefault()
  })
}
