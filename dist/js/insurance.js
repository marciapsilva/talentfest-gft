const renderInsurance = () => {
  return `
  <div class="">
    <h2>SEGUROS</h2>
    <div class="d-flex">
      <p class="text-size-1-5">Conte com as vantagens dos nossos seguros.</p>
      <p class="text-size-1-5">Para melhor atender você, oferecemos desde produtos simples até os mais completos. <br> O nosso compromisso é lhe oferecer os melhores benefícios.</p>
    </div>
    <p class="text-size-1-5">Selecione abaixo o seguro desejado para ver mais detalhes</p>
    
    <div class="tab">
      <button id="house" class="tablinks" onclick="openCity(event, 'Residencial')">Residencial</button>
      <button id="life" class="tablinks" onclick="openCity(event, 'Vida')">Vida</button>
      <button id="car" class="tablinks" onclick="openCity(event, 'Auto')">Auto</button>
    </div>
    
    <div id="Residencial" class="tabcontent">
      <h3>Seguro Residencial</h3>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cobertura básica: R$350,00</h5>
                <p class="card-text">Com essa cobertura você pode contar com: encanador, chaveiro, vidraceiro e eletricista</p>
                <a href="/confirmation" class="btn btn-primary">Contratar</a>
                </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cobertura completa: R$1500,00</h5>
                <p class="card-text">Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
                <a href="/confirmation" class="btn btn-primary">Contratar</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="Vida" class="tabcontent">
    <h3>Seguro de Vida</h3>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Cobertura básica: R$350,00</h5>
              <p class="card-text">Com essa cobertura você pode contar com: encanador, chaveiro, vidraceiro e eletricista</p>
              <a href="/confirmation" class="btn btn-primary">Contratar</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Cobertura complera: R$1500,00</h5>
              <p class="card-text">Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
              <a href="/confirmation" class="btn btn-primary">Contratar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        </tr>
      </thead>
    <tbody>
      <tr>
        <th scope="row">Gol 1.6 Mi I MOTION T. Flex 8V 4P</th>
        <td>VW - VolksWagen</td>
        <td>2014</td>
        <td>ate 3X S/JUROS</td>
        <td>R$ 1.500,00</td>
      </tr>
      <tr>
          <th scope="row">Gol 1.6 Mi I MOTION T. Flex 8V 4P</th>
          <td>VW - VolksWagen</td>
          <td>2014</td>
          <td>ate 6X JUROS</td>
          <td>R$ 2.100,00</td>
      </tr>
      <tr>
          <th scope="row">Gol 1.6 Mi I MOTION T. Flex 8V 4P</th>
          <td>VW - VolksWagen</td>
          <td>2014</td>
          <td>ate 12 X JUROS</td>
          <td>R$ 3.000,00</td>
       </tbody>
     </table>
    </div>

    <div>
      <p>Interessado em saber mais sobre nossos serviços?</p>
      <p>Entre em contato com a gente pelo telefone: (xx) 555-0000.</p>
      <p>Ou venha em uma de nossas agências.</p>
  </div>

  <div class="d-flex justify-content-center">
    <a href="/dashboard" class="text-light btn btn-secondary p-3 btn-font-size font-strong">Voltar</a>
  </div>
  `;
};