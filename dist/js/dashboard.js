const renderDashboard = () => {
  return `
    <section id="dashboard-btns">
      <div class="container">
        <div class="d-flex justify-content-between flex-wrap">
          <div id="btns" class="col-md-5 col-sm-12 p-5 btn d-flex btn-outline-light justify-content-between mt-5">
            <a href="/payments" class="text-dark">Faça um pagamento</a>
          </div>
          <div id="btns" class="col-md-5  col-sm-12 p-5 btn btn-outline-light d-flex mt-5">
            <a href="/loan" class="text-dark">Faça um empréstimo</a>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
          <div id="btns" class="col-md-5 sm-6 p-5 btn d-flex btn-outline-light justify-content-between mt-5">
            <a href="/insurance" class="text-dark">Faça um seguro</a>
          </div>
          <div id="btns" class="col-md-5 sm-6 p-5 btn d-flex justify-content-between  mt-5">
            <a href="/map" class="text-dark">Encontre uma agência <br>próxima a você</a>
          </div>
        </div>
      </div>

    </section>
  `;
};
