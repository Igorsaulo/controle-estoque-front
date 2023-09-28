import ReactApexChart from "react-apexcharts";

export function VolumeChart() {
    const settings = {
        series: [
            {
                data: [1000, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false,
                },
                offsetY: 0, // Remova o espaçamento do topo
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    columnWidth: '55%',
                    barWidth: '40%',
                    barHeight: '50%',
                }
            },
            dataLabels: {
                enabled: false
            },
            yaxis: {
                show: false,
                floating: true,
            },
            grid: {
                show: false
            },
            colors: ["#044DA0"],
        },
    };

    return (
        <ReactApexChart
            options={settings.options as any}
            series={settings.series}
            type="bar"
            height={220}
        />
    )
}
