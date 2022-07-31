import "../css/Livetrade.scss"
import TradingViewWidget,{ Themes } from 'react-tradingview-widget';
 
const LiveTrade = () => 
<div className="live-trade-root">
<TradingViewWidget autosize theme={Themes.DARK} symbol="NASDAQ:AAPL" />
</div>

export default LiveTrade;