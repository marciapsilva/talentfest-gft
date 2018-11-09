const renderLogin = () => {
  return `
    <section>
    <h1 style="text-align: center;">Internet banking</h1>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label>Nome</label>
                <input id="loginName" type="text" class="form-control" placeholder="Digite o seu nome">
              </div>
              <div class="form-group">
                <label>Agência</label>
                <input id="loginAg" type="text" class="form-control" placeholder="XXXX" maxlength="4">
                <small class="form-text text-muted">Digite os 4 números de sua agência</small>
              </div>
              <div class="form-group">
                <label>Conta corrente</label>
                <input id="loginCC" type="text" class="form-control" placeholder="XXXXX-X" maxlength="7">
                <small class="form-text text-muted">Digite os 4 números de sua conta corrente</small>
              </div>
              <button id="botaoLogin" type="submit" class="btn btn-primary">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
};
