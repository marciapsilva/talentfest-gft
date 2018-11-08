const renderDashboard = () => {
  return `
    <section id="dashboard-btns">
      <div class="btn">
        <a href="/payments" class="">Efetue pagamentos</a>
      </div>
      <div class="btn">
        <a href="/loan" class="">Simule um empréstimo</a>
      </div>
      <div class="btn">
        <a href="/insurance" class="">Simule um seguro</a>
      </div>
      <div class="btn">
        <a href="/map" class="">Encontre uma agência próxima a você</a>
      </div>
    </section>
  `;
};