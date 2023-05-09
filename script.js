document.addEventListener("DOMContentLoaded", function() {
  // Simulated data (replace with your actual data retrieval logic)
  const salesData = 15000;
  const expensesData = 8000;
  const customersData = 500;

  // Update the metric values on the dashboard
  document.getElementById("sales-value").textContent = "$" + salesData.toLocaleString();
  document.getElementById("expenses-value").textContent = "$" + expensesData.toLocaleString();
  document.getElementById("customers-value").textContent = customersData.toLocaleString();

  // Create a sample chart (replace with your actual charting library)
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "Sales",
        data: [12000, 15000, 18000, 14000, 16000, 20000],
        backgroundColor: "rgba(75, 192, 192, 0.5)"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
