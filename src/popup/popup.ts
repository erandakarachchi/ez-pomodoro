import Chart from "chart.js/auto";

document.addEventListener("DOMContentLoaded", async () => {
  const CHART_ID = "pomodoro-chart";
  const chartElement = document.getElementById(CHART_ID) as HTMLCanvasElement;
  let remainingTime = 25 * 60;

  if (!chartElement) {
    console.error(`Element with id ${CHART_ID} not found`);
    return;
  }

  const pomodoroChart = new Chart(chartElement, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [remainingTime, 0],
          backgroundColor: ["#79bd58", "#eeeeea"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  const timerInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      return;
    }
    remainingTime--;
    pomodoroChart.data.datasets[0].data = [
      remainingTime,
      25 * 60 - remainingTime,
    ];
    pomodoroChart.update();
  }, 1000);
});
