import "../css/Orders.scss"
const Orders = () => {
    const data = [
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
        ["BTCUSDC","Sat, Jul 30, 2022 10:24 AM","43,9523.22","0.012132"],
    ]
    
    return(<div className="orders-root">
<div className="menu">
    <div className="menu-item-active menu-item">All Orders</div>
    <div className="menu-item">Pending Orders</div>
    <div className="menu-item">Trades</div>
</div>
<div className="table">
    <div className="table-header">
        </div>
        {data.map((item, index) => (
        <div className="table-row">
            <div className="table-cell">
                {item[0]}
                </div>
                
            <div className="table-cell">
            {item[1]}

                </div>
                
            <div className="table-cell">
            {item[2]}

                </div>
            <div className="table-cell">
            {item[3]}

                </div>
                
            <div className="table-cell sell">
                SELL
                </div>
                
            <div className="table-cell cancel">
                CANCEL
                </div>
        </div>))
        }
</div>

</div>)}

export default Orders;