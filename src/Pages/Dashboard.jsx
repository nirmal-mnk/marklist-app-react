import CardHeader from "../Components/CardHeader/CardHeader";
import { useEffect } from "react";
import { getOverviewData } from "../Features/Actions/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const approle = useSelector((state) => state.roleState.role);

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
  let chartOneData = [];
  let chartmaleArr = [];
  let chartfemaleArr = [];
  let chartCategory = [];
  const overviewData = useSelector((state) => state.overviewState.overviewData);
  const getGenderChartData = (gradeType, grade) => {
    let maleArr = [];
    let femaleArr = [];
    gradeType.map((data) => {
      if (data.gender === "Male") {
        maleArr.push(data);
      } else {
        femaleArr.push(data);
      }
    });
    chartmaleArr.push(maleArr.length);
    chartfemaleArr.push(femaleArr.length);
    chartCategory.push(grade);
  };
  if (overviewData.gradeOverview) {
    for (let i = 0; i < overviewData.gradeOverview.length; i++) {
      const grade = overviewData.gradeOverview[i];
      if (grade["Excellent"]) {
        overview[0].count = grade["Excellent"].length;
        getGenderChartData(grade["Excellent"], "Excellent");
      } else if (grade["Very Good"]) {
        overview[1].count = grade["Very Good"].length;
        getGenderChartData(grade["Very Good"], "Very Good");
      } else if (grade["Good"]) {
        overview[2].count = grade["Good"].length;
        getGenderChartData(grade["Good"], "Good");
      } else if (grade["Ok"]) {
        overview[3].count = grade["Ok"].length;
        getGenderChartData(grade["Ok"], "Ok");
      } else {
        overview[4].count = grade["Fair & Fail"].length;
        getGenderChartData(grade["Fair & Fail"], "Fair & Fail");
      }
    }
    for (let j = 0; j < overview.length; j++) {
      chartOneData.push(overview[j].count);
    }
  }

  const options = {
    chart: {
      width: 600,
      height: 350,
      type: "column",
      // animation: false,
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
        data: chartOneData,
      },
    ],
  };
  const chartTwoOptions = {
    chart: {
      width: 800,
      type: "line",
      // animation: false,
    },

    title: {
      text: "",
    },

    xAxis: {
      categories: chartCategory,
    },
    yAxis: {
      title: {
        text: "No of Students",
      },
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 1.5,
      },
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "top",
      y: 10,
    },
    series: [
      {
        name: "Boys",
        color: "#006400",
        data: chartmaleArr,
      },
      {
        name: "Girls",
        color: "#b92c2c",
        data: chartfemaleArr,
      },
    ],
  };

  return (
    <>
      <CardHeader title="Grade Overview" approle={approle} />
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
