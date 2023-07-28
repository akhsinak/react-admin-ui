import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechartbox.scss";

const data = [
  { name: "mobile", value: 400, color: "cyan" },
  { name: "desktop", value: 600, color: "violet" },
  { name: "laptop", value: 100, color: "limegreen" },
  { name: "television", value: 200, color: "orange" },
];

const PieChartBox = () => {
  return (
    <div className="piechartbox">
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "rgba(200, 200, 200, 0.5)",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            />

            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value">
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}></div>
              <span>{item.name}</span>
            </div>
            <span className="spanny">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
