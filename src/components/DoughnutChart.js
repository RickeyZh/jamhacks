import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart({ chartData }) {
    return(
        <Doughnut
            data={chartData}
            options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Issue Spread"
                  },
                  legend: {
                    display: false
                  }
                }
            }}
      
        />
    )
}
