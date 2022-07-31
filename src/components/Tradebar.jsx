import "../css/Tradebar.scss"

const Tradebar = () => <>
    <div className="tradebar-root">
        <div className="tradebar-header">
            <div className="menu menu-active">Buy</div>
            <div className="menu">Sell</div>
        </div>
        <div className="balance-container">

            <div>
                <h1>AVAILABLE BALANCE</h1>
                <h3>0.1231 BTC</h3>
                <h3>12345.32 USDC</h3>
            </div>
            <div>⦼</div>
        </div>
        <div className="card market">MARKET<div>V</div></div>
        <div className="card amount-crypto">
            <div>
                <div>AMOUNT IN USDC</div>
                <div>0.1231</div>
            </div>
            <div>
                USDC
            </div>
        </div>
        <div className="card amount-crypto">
            <div>
                <div>AMOUNT IN BTC</div>
                <div>0.1231 </div>
            </div>
            <div>
                BTC
            </div>
        </div>
        <div className="percentages">
            <div>25%</div>
            <div>50%</div>
            <div>75%</div>
            <div>100%</div>
        </div>
        <div style={{ textAlign: "right", color: "white", margin: "10px 0px", fontWeight: 500 }}>
            Price per BTC = 1929312.21 USDC
        </div>
        <button className="buyBtn">Buy BTC</button>
        <div className="investment-container">
            <div className="first"><div className="element">
                <h1>Invested Value</h1>
                <h3>2,3323.22</h3>
            </div>
            </div>
            <div className="second">
                <div className="element">
                    <h1>Current Value</h1>
                    <h3>2,3323.22</h3>
                </div>
                <div className="element">
                    <h1>Return</h1>
                    <h3>+18.20%</h3></div>

            </div>
        </div>


    </div>
</>
export default Tradebar;