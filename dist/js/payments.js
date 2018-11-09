$(document).ready(() => {
  $('main').on('click', '#open-modal', confirmData);
  $('main').on('click', '#close-modal', clearModal);
  $('main').on('click', '#cancel-operation', clearModal);
  $('main').on('click', '#confirm-operation', clearModal);
});

const renderPayments = () => {
  return `
  <section id="loan-page">
  <h2 class="mt-4">PAGUE SUAS CONTAS</h2>
    <p class="font-strong">Digite aqui o código de barras</p>
    <form>
      <div>
        <input id="ipt-boleto-1" type="text" size="5" maxlength="5">.<input id="ipt-boleto-2" type="text" size="5" maxlength="5"> <input id="ipt-boleto-3" type="text" size="5" maxlength="5">.<input id="ipt-boleto-4" type="text" size="6" maxlength="6"> <input id="ipt-boleto-5" type="text" size="5" maxlength="5">.<input id="ipt-boleto-6" type="text" size="6" maxlength="6"> <input id="ipt-boleto-7"  type="text" size="1" maxlength="1"> <input id="ipt-boleto-8" type="text" size="14" maxlength="14">
      </div>
      <div>
        <p class="mb-3">Data de vencimento  <input id="ipt-boleto-date" type="date"></p>
      </div>
      <div>
        <p>Valor R$ <input id="ipt-boleto-value" placeholder="0,00" type="text"></p>
      </div>
      <div class="d-flex justify-content-center">
        <div class="mt-5">
          <button id="open-modal" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong" data-toggle="modal" data-target="#exampleModal">Pagar</button>
          <a href="/dashboard" class="text-light btn btn-secondary p-3 btn-font-size font-strong">Voltar</a>
        </div>
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
        <div class="modal-header bg-modal-header">
          <h5 class="modal-title text-white" id="exampleModalLabel">Confirme os dados da operação</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-white text-close">Fechar</span>
          </button>
        </div>
        <div class="modal-body">
              <div class="col-7">
                <p class=""><span>Código de barras: </span>${boletoNumber}</p>
                <p class=""><span>Data de Vencimento: </span>${boletoDate}</p>
                <p class=""><span>Valor: </span>${boletoValue}</p>
              </div>
              <div class="d-flex align-items-center mb-3">
                <p class="mr-2">Digite sua senha</p>
                <input type="password" id="password-input" class="input-date">
              </div>
              <div class="d-flex align-items-center justify-content-center mb-3">
                <div class="btn btn-primary mr-3">
                  <a href="/successful_operation" id="confirm-operation" class="text-white">Confirmar</a>
                </div>
              <button id="cancel-operation" type="button" class="btn btn-warning text-white" data-dismiss="modal" aria-label="Close">Cancelar</button>
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
