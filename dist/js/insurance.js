const renderInsurance = () => {
  return `
  <div class="mx-5">
    <h2 class="mt-4">SEGUROS</h2>
    <div class="">
      <p class="text-size-1-5">O nosso compromisso é lhe oferecer os melhores benefícios. Conte com as vantagens dos nossos seguros.</p>
    </div>
    <p class="text-size-1-5">Selecione abaixo o seguro desejado para ver mais detalhes:</p>
    
    <div class="tab">
      <button id="house" class="tablinks" onclick="openCity(event, 'Residencial')">Residencial</button>
      <button id="life" class="tablinks" onclick="openCity(event, 'Vida')">Vida</button>
      <button id="car" class="tablinks" onclick="openCity(event, 'Auto')">Auto</button>
    </div>
    
    <div id="Residencial" class="tabcontent">
      <h3>Seguro Residencial</h3>
      <table class="table">
        <thead class="bg-primary">
          <tr>
            <th scope="col">Valor do Seguro</th>
            <th scope="col">Valor Mensal</th>
            <th scope="col">Validade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">R$ 2.500</th>
            <td>R$ 250,00</td>
            <td>12 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 2.500</th>
            <td>R$ 175,00</td>
            <td>18 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 2.500</th>
            <td>R$ 150,00</td>
            <td>24 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 2.500</th>
            <td>R$ 125,00</td>
            <td>30 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="Vida" class="tabcontent">
    <h3>Seguro de Vida</h3>
      <table class="table">
        <thead class="bg-primary">
          <tr>
            <th scope="col">Valor do Seguro</th>
            <th scope="col">Valor Mensal</th>
            <th scope="col">Validade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">R$ 3.000</th>
            <td>R$ 300,00</td>
            <td>12 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 3.000</th>
            <td>R$ 150,00</td>
            <td>18 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 3.000</th>
            <td>R$ 120,00</td>
            <td>24 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
          <tr>
            <th scope="row">R$ 3.000</th>
            <td>R$ 125,00</td>
            <td>30 meses</td>
            <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="Auto" class="tabcontent">
      <h3>Seguro Auto</h3>
      <table class="table">
      <thead class="bg-primary">
        <tr>
          <th scope="col">Veículo</th>
          <th scope="col">Marca</th>
          <th scope="col">Ano</th>
          <th scope="col">Parcelas</th>
          <th scope="col">Total</th>
          <th></th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <th scope="row">Gol 1.6 Mi I MOTION T. Flex 8V 4P</th>
        <td>VW - VolksWagen</td>
        <td>2014</td>
        <td>ate 3X S/JUROS</td>
        <td>R$ 1.500,00</td>
        <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
      </tr>
      <tr>
          <th scope="row">Gol 1.6 Mi I MOTION T. Flex 8V 4P</th>
          <td>VW - VolksWagen</td>
          <td>2014</td>
          <td>ate 6X JUROS</td>
          <td>R$ 2.100,00</td>
          <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
      </tr>
      <tr>
          <th scope="row">Gol 1.6 Mi I MOTION T. Flex 8V 4P</th>
          <td>VW - VolksWagen</td>
          <td>2014</td>
          <td>ate 12 X JUROS</td>
          <td>R$ 3.000,00</td>
          <td><a href="/confirmation" class="text-light btn btn-primary p-3 mr-3 btn-font-size font-strong">Contratar</a></td>
       </tbody>
     </table>
    </div>

    <div>
      <p>Gostou dos novos serviços? Vá até uma de nossas <a href="/map">AGÊNCIAS</a>.</p>
  </div>

  <div class="d-flex justify-content-center">
    <a href="/dashboard" class="text-light btn btn-secondary p-3 btn-font-size font-strong">Voltar</a>
  </div>
  `;
};