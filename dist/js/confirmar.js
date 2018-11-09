const renderConfirmation = (valor) => {
  return `
  <div>
    <h1>confirmacao ${valor}</h1>
    <p>Você está ciente de que você esta contrantando esse serviço que te deixara comer uma banana???</p>
    <div class="form-group">
      <label>senha</label>
      <input type="password" class="form-control" maxlength="10" />
    </div>
    <a href="/dashboard">Confirmação com a sua senha</a>
    <a href="/insurance" class="btn btn-secondary">Voltar</a>
  </div>
  `;
};
