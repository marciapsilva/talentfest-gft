const renderDashboard = () => {
  return `
    <section id="dashboard-btns" class="height-100">
      <div class="d-flex justify-content-center align-items-center height-100">
        <div class="container">
          <div class="d-flex justify-content-between flex-wrap">
            <div id="btns" class="col-md-5 col-sm-12 p-5 btn d-flex justify-content-start mt-5 button-blue">
              <a href="/payments" class="w-100 text-light d-flex align-items-center ml-sm-4 ml-md-0">
                <i class="fas fa-barcode icon-size mr-4"></i>
                <div class="w-100 text-btn">Pague suas contas</div>
              </a>
            </div>
            <div id="btns" class="col-md-5 col-sm-12 p-5 btn d-flex justify-content-start mt-5 button-blue">
              <a href="/loan" class="w-100 text-light d-flex align-items-center ml-sm-4 ml-md-0">
                <i class="fas fa-money-bill-alt icon-size mr-4"></i>
                <div class="w-100 text-btn">Faça um empréstimo</div>
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-between flex-wrap">
              <div id="btns" class="col-md-5 sm-6 p-5 btn d-flex justify-content-start mt-5 button-blue">
              <a href="/insurance" class="w-100 text-light d-flex align-items-center ml-sm-4 ml-md-0">
                <i class="fas fa-link icon-size mr-4"></i>
                <div class="w-100 text-btn">Faça um seguro</div>
              </a>
            </div>
            <div id="btns" class="col-md-5 sm-6 p-5 btn d-flex justify-content-start mt-5 button-blue">
              <a href="/map" class="w-100 text-light d-flex align-items-center ml-sm-4 ml-md-0">
                <i class="far fa-building icon-size mr-4"></i>
                <div class="w-100 text-btn">Encontre uma agência perto de você!</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
