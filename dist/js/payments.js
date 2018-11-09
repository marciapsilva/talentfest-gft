$(document).ready(() => {
  $('main').on('click', '#open-modal', confirmData);
  $('main').on('click', '#close-modal', clearModal);
  $('main').on('click', '#cancel-operation', clearModal);
  $('main').on('click', '#confirm-operation', clearModal);
});

const renderPayments = () => {
  return `
  <section id="loan-page">
    <h2>Digite aqui o código de barras</h2>
    <form>
      <div>
        <input id="ipt-boleto-1" type="text" size="5" maxlength="5">.<input id="ipt-boleto-2" type="text" size="5" maxlength="5"> <input id="ipt-boleto-3" type="text" size="5" maxlength="5">.<input id="ipt-boleto-4" type="text" size="6" maxlength="6"> <input id="ipt-boleto-5" type="text" size="5" maxlength="5">.<input id="ipt-boleto-6" type="text" size="6" maxlength="6"> <input id="ipt-boleto-7"  type="text" size="1" maxlength="1"> <input id="ipt-boleto-8" type="text" size="14" maxlength="14">
      </div>
      <div>
        <p>Data de vencimento</p>
        <input id="ipt-boleto-date" type="date">
      </div>
      <div>
        <p>Valor</p>
        <div>
          <p>R$<p>
          <input id="ipt-boleto-value" placeholder="0,00" type="text">
        </div>
      </div>
      <div>
        <button id="open-modal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Pagar</button>
      </div>
    </form>
  </section>
  `;
};

const confirmData = (e) => {
  e.preventDefault();
  const iptBoleto1 = $('#ipt-boleto-1').val();
  const iptBoleto2 = $('#ipt-boleto-2').val();
  const iptBoleto3 = $('#ipt-boleto-3').val();
  const iptBoleto4 = $('#ipt-boleto-4').val();
  const iptBoleto5 = $('#ipt-boleto-5').val();
  const iptBoleto6 = $('#ipt-boleto-6').val();
  const iptBoleto7 = $('#ipt-boleto-7').val();
  const iptBoleto8 = $('#ipt-boleto-8').val();

  const boletoNumber = iptBoleto1 + '.' + iptBoleto2 + ' ' + iptBoleto3 + '.' + iptBoleto4 + ' ' + iptBoleto5 + '.' + iptBoleto6 + ' ' + iptBoleto7 + ' ' + iptBoleto8;

  const boletoDate = $('#ipt-boleto-date').val().split('-').reverse().join('/');
  const boletoValue = $('#ipt-boleto-value').val();

  showModal(boletoNumber, boletoDate, boletoValue);
};

const showModal = (boletoNumber, boletoDate, boletoValue) => {
  const modalTemplate = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button id="close-modal" type="button" class="close" data-dismiss="modal" aria-label="Close">Fechar</button>
          <div class="container">
            <div class="row">
              <div class="col-4 modal-img-box">
                <h1>Confirme os dados dessa operação</h1>
              </div>
              <div class="col-7">
                <p class=""><span>Código de barras: </span>${boletoNumber}</p>
                <p class=""><span>Data de Vencimento: </span>${boletoDate}</p>
                <p class=""><span>Valor: </span>${boletoValue}</p>
              </div>
              <div>
                <p>Digite sua senha</p>
                <input type="password" id="password-input">
              </div>
              <div class="btn btn-success">
                <a href="/successful_operation" id="confirm-operation" class="">Confirmar</a>
              </div>
              <button id="cancel-operation" type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  return $('main').append(modalTemplate);
};

const clearModal = () => {
  $('form').trigger('reset');
  $('#exampleModal').remove();
  $('.modal-backdrop').remove();
};