import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barchart1,
  barchart2,
  chartBoxUser,
  chartBoxUser2,
  chartBoxUser3,
  chartBoxUser4,
} from "../../data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUser2} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxUser3} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxUser4} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barchart1} />
      </div>
      <div className="box box9">
        <BarChartBox {...barchart2} />
      </div>
    </div>
  );
};

export default Home;
