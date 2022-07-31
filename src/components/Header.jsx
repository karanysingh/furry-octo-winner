import "../css/Header.scss"

const Header = () => {
    return (
        <div className="header-root">
            <div className="header-cell">
                <h1>Bitcoin</h1>
                <h3>BTC/USDC</h3>
            </div>
            
            <div className="header-cell">
                <h1>Last Price</h1>
                <h3>23,92392 USDC</h3>
            </div>
            
            <div className="header-cell">
                <h1>24h change</h1>
                <h3>23,92392 USDC</h3>
                
            </div>
            
            <div className="header-cell">
                <h1>24h Low</h1>
                <h3>23,92392 USDC</h3>
                
            </div>
            
            <div className="header-cell">
                <h1>24h High</h1>
                <h3>23,92392 USDC</h3>
                
            </div>
            
            <div className="header-last">
                <div>
                    Pro
                    <span>P</span>
                </div>
                <div>
                <div className="icon">⚙</div>
                <div className="icon">⚙</div>
                <div className="icon">⚙</div>

                </div>
                
            </div>

        </div>)
}

export default Header;