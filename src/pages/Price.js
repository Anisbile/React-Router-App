import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Price = (props) => {
    const location = useLocation()
    // const apiKey = '71df0ad70bb0d285131be69e30c3c116'
    // const { symbol } = useParams()
    // const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
    // const [ stock, setStock ] = useState(null)
    // const getStock = async () => {
    //     const response = await fetch(url)
    //     // const data = await response.json
    //     console.log(response)
    //     // setStock(data)
    // }
    // useEffect(() => {
    //     getStock()
    // }, [])
    // const loading = () => {
    //     return <h1>Loading...</h1>
    // }
    // const loaded = () => {
        return (
            <div>
                <h1>
                    {location.state.name}
                </h1>
                <h2>{location.state.lastPrice}</h2>
            </div>
        )
    // return stock ? loaded() : loading()
}

export default Price