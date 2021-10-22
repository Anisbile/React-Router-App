import { Link } from 'react-router-dom';
import stocks from '../data/stocks';

const Stocks = (props) => {
    return( 
        <div className="stocks">
            {
                stocks.map((stock, index) => {
                    const { name, symbol} = stock
                    props.setStock(stock)
                    return(
                        <Link to={{pathname:`/price/${symbol}`, state:stock} } key={index} >
                            <h2>{name}</h2>
                        </Link>

                    )
                })
            }
        </div>
    )
}

export default Stocks