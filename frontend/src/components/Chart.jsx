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
      data: [10, 490, 100, 220, 300, 350, 200, 230, 280]
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
    colors: ["#020617"],
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
    <Card className="w-[55rem]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography  variant="h6" color="blue-gray">
            <p className="mt-5 text-[#24496B] text-2xl">Campaign Overview</p>
          </Typography>
          <div className="flex">
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal mr-14"
            >
              <div className="flex mt-5">
                <FireIcon className="h-2 w-2 mt-[6px] text-orange-700 mr-2" />
                Room visited
              </div>
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              <div className="flex mt-5">
                <FireIcon className="h-2 w-2 mt-[6px] text-blue-800 mr-2" />
                Room Booked
              </div>
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
