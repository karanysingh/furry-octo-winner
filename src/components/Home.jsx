import "../css/Home.scss"
import Sidebar from "./Sidebar";
import Tradebar from "./Tradebar";
import Header from "./Header";
import Orderbook from "./Orderbook";
import LiveTrade from "./LiveTrade";
import Orders from "./Orders"

const Home = () => <>
    {/* <Header />
<LiveTrade />
<Sidebar />
<Tradebar /> */}
    <Header />

<Sidebar />
    <div className="home-root">
        <div className="main-container">
            <LiveTrade />
            <Orders />
        </div>
        <div className="orderbook-container">
            <Orderbook />
        </div>
        <div className="buysell-container">
            <Tradebar />
        </div>
    </div>

</>

export default Home;