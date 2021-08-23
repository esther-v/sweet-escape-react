import { useState, useEffect } from "react";

function PlaceNameValidator(config = { min: 2, max: 50 }){
    const [place_name, setPlaceName] = useState("");
    const [place_nameError, setPlaceNameError] = useState("");

    useEffect(
        () => {
          setPlaceNameError("");
          if (!place_name) return;
    
          if (place_name.length < config.min) {
            setPlaceNameError(`Le nom du lieu doit faire au moins ${config.min} caractères.`);
          } else if (place_name.length > config.max) {
            setPlaceNameError(
              `Le nom ne peut pas dépasser ${config.max} caractères.`
            );
          }
        },
        [place_name, config.min, config.max]
      );
    
      return [place_name, setPlaceName, place_nameError];
}


export default PlaceNameValidator;