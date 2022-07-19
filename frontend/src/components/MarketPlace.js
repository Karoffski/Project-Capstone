import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const MarketPlace = () => {
    let [data, setData] = useState([]);
    let [search, setSearch] = useState(``);
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const res = await fetch("https://localhost:5000/marketplace");
            const json = await res.json();
            setData(json);
        } catch (error) {
            console.log(error)
        }
    }

    console.log(data)

    return (
        <div className="marketplace">
                <TextField fullWidth onChange={e => setSearch(e.target.value)} label="Search for specific product" id="search" />
                {data
                .filter(toy => toy.email.toLowerCase().includes(search.toLowerCase()))
                .map((toy, index) => {
                    return(
                    <div className='products'>
                    <p key={index}>{toy.title}</p>
                    </div>
                    )
                })}
        </div>
    )

}

export default MarketPlace;