<template>
  <div>
    <h1>Bar Chart Example</h1>
    <section>
      <bar-chart :chart-data="chartData" :options="options"></bar-chart>
    </section>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import * as ChartUtilities from "@/ChartUtilities";

export default {
  components: { BarChart },
  data: () => {
    return {
      chartData: {
        labels: ["Americas", "Asia Pacific", "EMEIA"],
        datasets: [
          {
            label: "Approved",
            backgroundColor: "#109090",
            data: [7, 5, 4]
          },
          {
            label: "Approved, Won",
            backgroundColor: "#EB4F00",
            data: [5, 5, 2]
          }
        ]
      },
      options: {
        layout: {
          padding: {
            top: 20
          }
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                callback: function(value, index, values) {
                  return "";
                },
                beginAtZero: true
              },
              position: "right"
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        plugins: {
          datalabels: {
            color: "#2e2e38",
            anchor: "end",
            align: "top",
            offset: 0,
            font: {
              size: 16,
              weight: "bold"
            },
            formatter: ChartUtilities.datalabelformatter
          }
        }
      }
    };
  }
};
</script>

<style>
section {
  width: 600px;
}
</style>
