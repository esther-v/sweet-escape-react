import { useState, useEffect } from "react";

function usePasswordValidator(config = { min: 6, max: 15 }) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
 

  useEffect(
    () => {
      setPasswordError("");
      if (!password) return;

      if (password.length < config.min) {
        setPasswordError(`Votre mot de passe doit contenir au moins ${config.min} caractères.`);
      } else if (password.length > config.max) {
        setPasswordError(
          `Votre mot de passe ne doit pas dépasser ${config.max} caractères.`
        );
      }
    },
    [password, config.min, config.max]
  );

  return [password, setPassword, passwordError];
}

export default usePasswordValidator;