const renderLoan = category => {
  return `
    <div class="mx-5">
    <h2 class="mt-4 text-center">FAÇA UM EMPRÉSTIMO</h2>
      <table class="table table-striped">
        <thead class="">
          <tr>
            <th scope="col">Valor Empréstimo</th>
            <th scope="col">Valor Mensal</th>
            <th scope="col">Meses</th>
            <th scope="col">Juros (% ao mês)</th>
            <th scope="col">Total a ser pago</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">R$ 2.500,00</th>
            <td>R$ 250,00</td>
            <td>12</td>
            <td>10%</td>
            <td><strong>R$ 3.000,00</strong></td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 2.500,00</th>
            <td>R$ 175,00</td>
            <td>18</td>
            <td>7%</td>
            <td><strong>R$ 3.150,00</strong></td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 2.500,00</th>
            <td>R$ 150,00</td>
            <td>24</td>
            <td>6%</td>
            <td><strong>R$ 3.600,00</strong></td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 2.500,00</th>
            <td>R$ 125,00</td>
            <td>30</td>
            <td>5%</td>
            <td><strong>R$ 3.750,00</strong></td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center">
      <a href="/dashboard" class="text-light btn btn-secondary p-3 btn-font-size font-strong">Voltar</a>
    </div>
    </div>
  `;
};
