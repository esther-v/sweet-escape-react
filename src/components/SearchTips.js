import React, {useState} from 'react';
import styled from 'styled-components'
import Tip from './Tip';

const SearchTips = () => {
    const [tips, setTips] = useState([]);
    const [search, setSearch] = useState('');
    
    const getTips = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/search?city=${search}`);
            console.log(response);
            const data = await response.json();
            setTips(data.result);
            setSearch('');
        } catch (error) {
            console.log(error);
        }
        
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    return (
       <StyledSearchBox>
            <h1>Recherche par ville</h1>
            <form onSubmit={getTips} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">Search</button>
            </form> 
            <div className="tips-results">
            {tips.map(tip =>(
            <Tip key={tip.id_tip} place_name={tip.place_name}
            />
            ))}
            </div>
        </StyledSearchBox>
    )
}

const StyledSearchBox = styled.div`
    padding : 40px 60px;
`

export default SearchTips;