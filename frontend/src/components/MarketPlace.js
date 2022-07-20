import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const MarketPlace = () => {
    let [data, setData] = useState([]);
    let [search, setSearch] = useState(``);
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch("http://localhost:5000/toys")
            .then((res) => {return res.json()})
            .then((res) => {setData(res)});
        }

    console.log(data.title)

    return (
        <div className="marketplace">
                <TextField fullWidth onChange={e => setSearch(e.target.value)} label="Search for specific product" id="search" />
                <div className='products'>
                {data
                .filter(toy => toy.title.toLowerCase().includes(search.toLowerCase()))
                .map((toy, index) => {
                    return(
                    <div key={index} >
                    <p id='product'>{toy.title}</p>
                    <img src={toy.url}></img>
                    </div>
                    )
                })}
                </div>
        </div>
    )

}

export default MarketPlace;