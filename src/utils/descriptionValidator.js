import { useState, useEffect } from "react";

function DescriptionValidator(config = { min: 2, max: 200 }){
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    useEffect(
        () => {
          setDescriptionError("");
          if (!description) return;
    
          if (description.length < config.min) {
            setDescriptionError(`La description doit faire au moins ${config.min} caractères.`);
          } else if (description.length > config.max) {
            setDescriptionError(
              `La description ne peut pas dépasser ${config.max} caractères.`
            );
          }
        },
        [description, config.min, config.max]
      );
    
      return [description, setDescription, descriptionError];
}


export default DescriptionValidator;