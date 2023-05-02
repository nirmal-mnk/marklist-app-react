import CardHeader from "../Components/CardHeader/CardHeader";

function Dashboard() {
  const overview = [1, 2, 3, 4, 5];
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
              <h1>30</h1>
              <h4>Excellent</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Dashboard;
