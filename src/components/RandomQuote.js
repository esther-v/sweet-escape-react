import React, {useState} from 'react';
import styled from 'styled-components';
import traveler from '../img/traveler.png';


const RandomQuote = () => {

    const quotesData = [
        {
          "text": "Le plus beau moment de la vie humaine est un départ vers des terres inconnues",
          "author": "Richard Burton, explorateur britannique"
        },
        {
          "text": "Voyager rend modeste. Vous voyez quelle petite place vous occupez dans le monde",
          "author": "Gustave Flaubert, écrivain français"
          },
        {
          "text": "Le voyage c'est aller de soi à soi en passant par les autres",
          "author": "Proverbe Touareg"
        }, 
        {
          "text": "L'homme ne peut découvrir de nouveaux océans sans avoir le courage de perdre de vue le rivage",
          "author": "André Gide, écrivain français"
        },
        {
          "text": "Et il n'est rien de plus beau que l'instant qui précède le voyage, l'instant où l'horizon de demain vient nous rendre visite et nous dire ses promesses",
          "author": "Milan Kundera, écrivain tchèque"
        },
        {
            "text": "L’homme qui veut s’instruire doit lire d’abord, et puis voyager pour rectifier ce qu’il a appris",
            "author": "Giacomo Casanova, aventurier vénitien"
        },
        {
        "text": "Voyager c'est naître et mourir à chaque instant",
        "author": "Victor Hugo, romancier français"
        },
        {
        "text": "On voyage pour changer, non de lieu, mais d'idées",
        "author": "Hippolyte Taine, philosophe français"
        },{
        "text": "Voyageur, il n'y a pas de chemin, le chemin se fait en marchant",
        "author": "Antonio Machado, poète espagnol"
        },{
        "text": "Voyager vous laisse d’abord sans voix, avant de vous transformer en conteur",
        "author": "Ibn Battuta, explorateur marocain"
        },{
        "text": "Les voyages forment la jeunesse",
        "author": "Montaigne, philosophe français"
        },{
            "text": "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux",
            "author": "Marcel Proust, écrivain français"
        },{
        "text": "Un voyage de 1 000 kilomètres commence toujours par un pas",
        "author": "Lao Tseu, sage chinois"
        },{
        "text": "Si vous pensez que l'aventure est dangereuse, je vous propose d'essayer la routine.... Elle est mortelle !",
        "author": "Paulo Coelho, romancier brésilien"
        },{
        "text": "Le plus beau voyage, c'est celui qu'on n’a pas encore fait",
        "author": "Loïck Peyron, navigateur français"
        },{
        "text": "Rester, c’est exister ; Voyager, c’est vivre",
        "author": "Gustave Nadaud, poète français"
        }
        ];

    const colors = [
        '#00909E',
        '#27496D',
        '#548CA8',
        '#5C3D2E',
        '#47597E',
        '#1EAE98',
        '#053742',
        '#2B2B2B',
        '#472E32',
        '#BB8760',
        '#77B1A9',
        '#5F939A'
        ];
    
 
    const [citation, setCitation] = useState("Celui qui voyage sans rencontrer l’autre ne voyage pas, il se déplace");
    const [auteur, setAuteur] = useState("Alexandra David-Néel, exploratrice française");
    const [color, setColor] = useState("#472E32");
   

    function getRandomColor() {
        const randomColor = colors[
          Math.floor(Math.random() * colors.length) //math.floor permet d'arrondir un chiffre à virgule 
        ];  
        setColor(randomColor); 
    }

    function getRandomQuote() {
        const randomQuote = quotesData[
          Math.floor(Math.random() * quotesData.length)
        ];  
        setCitation(randomQuote.text);
        setAuteur(randomQuote.author);
        getRandomColor(); 
    }


    return(
      <StyledQuoteGenerator>
        <div className="quote">
            {/* <p style={{color: color}}>{color}</p> */}
            <p>"{citation}"</p>
            <p style={{color: color}}>{auteur}</p>
            <button onClick={getRandomQuote} style={{backgroundColor: color}} >Nouvelle citation</button>
        </div>
      </StyledQuoteGenerator>
    )
}

const StyledQuoteGenerator = styled.div`
    height: auto;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("${traveler}");
    background-position: center;
    background-size: cover;
    .quote{
        background: rgba(255,255,255, 0.7);
        max-width: 50%;
        padding: 15px;
    }
    p{
        font-size: 18px;
        white-space: pre-line;
        margin-bottom: 10px;
    }
    p:first-of-type{
      font-family: 'Lora', serif;
      font-style: italic;
    }
    p:last-of-type{
        text-align: right;
        font-style: italic;
        font-size: 16px;
    }
    button{
        display: block;
        margin: 5px 0 5px auto;
        padding: 5px 8px;
        color: white;
        border: none;
        &:hover{
          transition: 0.2s ease-in-out;
          font-weight: bold;
        }
    }
`

export default RandomQuote;