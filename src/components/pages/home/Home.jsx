import "./Home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";
import { userData } from "../../dummyData";

export default function Home() {
    return (
        <div className="home">
          <FeaturedInfo />
          <Chart data={userData} title="User Analysis" grid dataKey="Active User" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
    )
}
