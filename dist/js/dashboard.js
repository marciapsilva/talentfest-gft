const renderDashboard = () => {
  return `
    <section id="dashboard-btns">
      <div class="container">
        <div class="d-flex justify-content-between flex-wrap">
          <div id="btns" class="col-md-5 col-sm-12 p-5 btn d-flex btn-outline-light justify-content-start mt-5 button-blue">
            <a href="/payments" class="text-light d-flex flex-direction-row justify-content-between align-items-center ml-4">
              <i class="fas fa-barcode icon-size mr-4"></i>
              <span>Faça um pagamento</span>
            </a>
          </div>
          <div id="btns" class="col-md-5 col-sm-12 p-5 btn btn-outline-light d-flex justify-content-start mt-5 button-blue">
            <a href="/loan" class="text-light d-flex flex-direction-row justify-content-between align-items-center ml-4">
              <i class="fas fa-money-bill-alt icon-size mr-4"></i>
              <span>Faça um empréstimo</span>
            </a>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
            <div id="btns" class="col-md-5 sm-6 p-5 btn d-flex btn-outline-light justify-content-start mt-5 button-blue">
            <a href="/insurance" class="text-light d-flex flex-direction-row justify-content-between align-items-center ml-4">
              <i class="fas fa-link icon-size mr-4"></i>
              <span>Faça um seguro</span>
            </a>
          </div>
          <div id="btns" class="col-md-5 sm-6 p-5 btn d-flex justify-content-start mt-5 button-blue">
            <a href="/map" class="text-light d-flex flex-direction-row justify-content-between align-items-center ml-4">
              <i class="far fa-building icon-size mr-4"></i>
              <span>Encontre uma agência <br>próxima a você</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  `;
};
