const renderInsurance = () => {
  return `
  <div class="">
    <h2>SEGUROS</h2>
    <p>Conte com as vantagens dos nossos seguros.</p>
    <p>Para melhor atender você, oferecemos desde produtos simples até os mais completos. O nosso compromisso é lhe oferecer os melhores benefícios.</p>
    
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
                <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cobertura básica: R$1500,00</h5>
                <p class="card-text">Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
                <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cobertura básica: R$3000,00</h5>
                <p class="card-text">Direito a comer banana Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
                <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
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
              <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Cobertura básica: R$1500,00</h5>
              <p class="card-text">Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
              <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Cobertura básica: R$3000,00</h5>
              <p class="card-text">Direito a comer banana Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
              <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div id="Auto" class="tabcontent">
          <h3>Seguro Auto</h3>
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cobertura básica: R$350,00</h5>
                    <p class="card-text">Com essa cobertura você pode contar com: encanador, chaveiro, vidraceiro e eletricista</p>
                    <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cobertura básica: R$1500,00</h5>
                    <p class="card-text">Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
                    <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cobertura básica: R$3000,00</h5>
                    <p class="card-text">Direito a comer banana Na cobertura completa conte com: encanador, chaveiro, vidraceiro, eletricista, instalação de ventilador de teto e substituição de telha.</p>
                    <a href="/confirmation/350" class="btn btn-primary">Contratar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>

    <div>
      <p>Interessado em saber mais sobre nossos serviços?</p>
      <p>Entre em contato com a gente pelo telefone: (xx) 555-0000.</p>
      <p>Ou venha em uma de nossas agências.</p>
  </div>
  <a href="/dashboard" class="btn btn-secondary">Voltar</a>
  `;
};