import React, {useState} from 'react';
import styled from 'styled-components'
import Tip from './Tip';

const SearchTips = () => {
    const [tips, setTips] = useState([]);
    const [type, setType] = useState("");
    const [search, setSearch] = useState('');
    
    const getTips = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8181/api/search?city=${search}&type=${type}`);
            console.log(response);
            const data = await response.json();
            setTips(data.result);
            setSearch('');
            setType('');
        } catch (error) {
            console.log(error);
        }    
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const updateType = e => {
        setType(e.target.value);
    }

    return (
       <StyledSearchBox>
            <h1>Recherche par ville / par type</h1>
            <form onSubmit={getTips} className="search-form">
                <div className="box-search">
                    <input className="search-bar" type="search" value={search} onChange={updateSearch} />
                    <select name="types" id="types" onChange={updateType}>
                        <option value={type}>Sélectionnez un type d'activité</option>
                        <option value="culture">Activités culturelles</option>
                        <option value="exterieur">Activités extérieures</option>
                        <option value="restaurant">Restaurants/Bars/Cafés</option>
                        <option value="hebergement">Hébergements</option>                
                    </select>
                </div>
                <button className="search-button" type="submit">Chercher</button>
            </form> 
            <div className="tips-results">
            {tips && tips.map(tip =>(
            <Tip 
            key={tip.id_tip} 
            place_name={tip.place_name}
            description={tip.description}
            
            />
            ))}
            </div>
        </StyledSearchBox>
    )
}

const StyledSearchBox = styled.div`
    padding : 40px 60px;
    form{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .search-bar{
        width: 100%;
        margin-right: 5px;
        border : 1px dashed #00909E;
        border-radius: 5px;
        padding: 10px;
    }
    .search-button {
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
        color: white;
        cursor: pointer;
        &:hover{
            border: 1px solid #00909E;
            background: white;
            color: #00909E;
        }   
    }
    select {
        margin-top: 10px;
        width: 100%;
    }
`

export default SearchTips;