import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { FireIcon } from "@heroicons/react/24/solid";

const chartConfig = {
  type: "line",
  height: 310,
  series: [
    {
      name: "Sales",
      data: [10, 90, 100, 220, 120, 190, 200, 230, 300]
    }
  ],
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    title: {
      show: ""
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#24496B"],
    stroke: {
      lineCap: "round",
      curve: "smooth"
    },
    markers: {
      size: 0
    },
    xaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400
        }
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400
        }
      }
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 5,
        right: 20
      }
    },
    fill: {
      opacity: 0.8
    },
    tooltip: {
      theme: "dark"
    }
  }
};


export default function ChartComponent() {
  return (
    <Card className="sm:w-[55rem] w-[19rem] mb-10 ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            <p className="mt-5 text-[#24496B] text-2xl">Campaign Overview</p>
          </Typography>
          <div className="flex mt-5 ">
            <Typography variant="small" color="gray" className="max-w-sm font-normal mr-14 flex">
              <FireIcon className="h-2 w-2 mt-[6px] text-orange-700 mr-2 " />
              Room visited
            </Typography>
            <Typography variant="small" color="gray" className="max-w-sm font-normal flex">
              <FireIcon className="h-2 w-2 mt-[6px] text-blue-800 mr-2" />
              Room Booked
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        {/* Assuming Chart is a component that receives chartConfig as a prop */}
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
