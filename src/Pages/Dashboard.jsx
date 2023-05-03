import CardHeader from "../Components/CardHeader/CardHeader";
import { useEffect } from "react";
import { getOverviewData } from "../Features/Actions/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOverviewData());
  }, []);
  const overview = [
    { label: "Excellent", count: 0 },
    { label: "Very Good", count: 0 },
    { label: "Good", count: 0 },
    { label: "Ok", count: 0 },
    { label: "Fair & Fail", count: 0 },
  ];
  const overviewData = useSelector((state) => state.overviewState.overviewData);
  if (overviewData.gradeOverview) {
    for (let i = 0; i < overviewData.gradeOverview.length; i++) {
      console.log(overviewData.gradeOverview[i]);
      const grade = overviewData.gradeOverview[i];
      if (grade["Excellent"]) {
        overview[0].count = grade["Excellent"].length;
      } else if (grade["Very Good"]) {
        overview[1].count = grade["Very Good"].length;
      } else if (grade["Good"]) {
        overview[2].count = grade["Good"].length;
      } else if (grade["Ok"]) {
        overview[3].count = grade["Ok"].length;
      } else {
        overview[4].count = grade["Fair & Fail"].length;
      }
    }
  }
  const options = {
    chart: {
      width: 600,
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Excellent", "Very Good", "Good", "Ok", "Fair & Fail"],
    },
    yAxis: {
      title: {
        text: "No of Students",
      },
    },
    legend: {
      enabled: false,
    },
    colors: ["#006400", "#008080", "#B8860B", "#4682B4", "##8B0000"],
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        colorByPoint: true,
      },
    },
    series: [
      {
        data: [33, 53, 169, 35, 28],
      },
    ],
  };
  const chartTwoOptions = {
    chart: {
      width: 600,
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Boys", "Girls"],
    },
    yAxis: {
      title: {
        text: "No of Students",
      },
    },
    legend: {
      enabled: false,
    },
    colors: ["#006400", "#008080", "#B8860B", "#4682B4", "##8B0000"],
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        colorByPoint: true,
      },
    },
    series: [
      {
        data: [68, 57],
      },
    ],
  };

  return (
    <>
      <CardHeader title="Grade Overview" />
      <div className="dashboard-overview">
        {overview.map((data, index) => (
          <div className="overview-sub" key={index}>
            <div className="overview__image">
              <img
                src={require(`../assets/emoji${index + 1}.png`)}
                alt="Overview image"
              />
            </div>
            <div className="overview-des">
              <h1>{data.count}</h1>
              <h4>{data.label}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="overview-charts">
        <div className="overview-chart-left">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="overview-chart-right">
          <HighchartsReact highcharts={Highcharts} options={chartTwoOptions} />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
