import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

export function ColumnChart() {
  const settings = {
    series: [
      {
        name: 'Ganhos',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Gastos',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: 'Investido',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
          style: {
            colors: [
              '#ffffff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff'
            ], // Cor dos textos no eixo X
          },
        },
      },
      yaxis: {
        title: {
          text: 'R$ total',
          style: {
            color: '#ffffff', // Cor do título do eixo Y
          },
        },
        labels: {
          style: {
            colors: ['#ffffff'], // Cor dos textos no eixo Y
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          //@ts-ignore
          formatter: function (val) {
            return 'R$ ' + val;
          },
        },
      },
      grid: {
        show: false,
      },
      legend: {
        labels: {
          colors: [
            '#ffffff',
            '#fff',
            '#fff',
          ], // Cor das legendas (nomes das séries)
        },
      },
      colors: ['#41F6FA', '#DE5609', '#FFD50A'],
    },
  };
  
  


return (
  <Box
    bgcolor={'#282828'}
    height={'50vh'}
    width={'100% - 20px'}
    borderRadius={'20px'}
    padding={'20px'}
    paddingBottom={'40px'}
  >
    <ReactApexChart
      options={settings.options as any}
      series={settings.series}
      type="bar"
      height={350} />
  </Box>
);
}

