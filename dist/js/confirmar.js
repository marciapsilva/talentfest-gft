const renderConfirmation = (valor) => {
  return `
  <div class="d-flex justify-content-center align-items-center confirmation-page-container">
    <div class="">
      <h1 class="font-strong">Você deseja confirmar essa ação?</h1>
      <p class="text-dark">Se estiver certo disso, digite sua senha abaixo:</p>
      <div class="form-group text-dark">
        <label class="font-strong">Senha: </label>
        <div class="row">
          <input type="password" class="form-control col-8 mx-3 text-size-2" maxlength="10" />
        </div>
      </div>
      <a href="/successful_operation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong ">Confirmação com a sua senha</a>
      <a href="/dashboard" class="text-light btn btn-secondary p-3 btn-font-size font-strong ">Voltar</a>
    </div>
  </div>
  `;
};
