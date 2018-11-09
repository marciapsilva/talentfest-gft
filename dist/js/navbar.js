function renderNavBar(nome, agencia, conta) {
    const saldo = Math.random(10000) * 10000;
    return `
        <div class="pr-5 pl-5">
            <div class="container-fluid p-4">
                <div class="row d-flex justify-content-between">
                    <div class="text-light col-md-10-sm-12">
                        <h3>Olá, ${nome}!</h3>
                        <div class="d-flex flex-direction-row text-light">
                            <h6 class="mb-2">AG: ${agencia} &nbsp;</h6>
                            <h6>C/C: ${conta}</h6>
                        </div>
                    </div>
                    <div class="d-flex flex-column text-light justify-content-end">
                        <button id="botaoLogout" class="btn btn-primary align-self-end mb-2">Sair</button>
                        <h5 class="">Saldo: <span>R$${saldo.toFixed(2)}</span></h5>
                    </div>
                </div>
            </div>
        </div>
    `;
}