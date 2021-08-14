import React, {useState} from 'react';
import styled from 'styled-components';


const RandomQuote = () => {

    const quotesData = [
        {
          "text": "Celui qui voyage sans rencontrer l’autre ne voyage pas, il se déplace",
          "author": "Alexandra David-Néel, écrivaine et exploratrice française"
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
            "author": "Giacomo Casanova, aventurier et écrivain vénitien"
        },
        {
        "text": "Voyager c'est naître et mourir à chaque instant",
        "author": "Victor Hugo, poète, dramaturge, romancier français"
        },
        {
        "text": "On voyage pour changer, non de lieu, mais d'idées",
        "author": "Hippolyte Taine, philosophe et historien français"
        },{
        "text": "Voyageur, il n'y a pas de chemin, le chemin se fait en marchant",
        "author": "Antonio Machado, poète espagnol"
        },{
        "text": "Voyager vous laisse d’abord sans voix, avant de vous transformer en conteur",
        "author": "Ibn Battuta, explorateur et voyageur marocain"
        },{
        "text": "Les voyages forment la jeunesse",
        "author": "Montaigne, philosophe et écrivain français"
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
        "author": "Gustave Nadaud, poète et chansonnier français"
        }
        ];

    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
        ];
    
 
    const [citation, setCitation] = useState("Hello");
    const [auteur, setAuteur] = useState("World");
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
            <button onClick={getRandomQuote} style={{backgroundColor: color}}>Nouvelle citation</button>
        </div>
      </StyledQuoteGenerator>
    )
}

const StyledQuoteGenerator = styled.div`
    height: 200px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80");
    background-position: center;
    background-size: cover;
    .quote{
        border: 1px solid blue;
        background: rgba(255,255,255, 0.7);
        max-width: 50%;
    }
    p{
        font-size: 18px;
        white-space: pre-line;
    }
    p:last-of-type{
        text-align: right;
        font-style: italic;
    }
    button{
        display: block;
        margin: 5px auto;
        padding: 5px 8px;
        color: white;
        border: none;
    }
`

export default RandomQuote;