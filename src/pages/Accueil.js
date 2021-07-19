import React from 'react';
import LandingAccueil from '../components/LandingAccueil';
import APropos from '../components/APropos';
import SectionBonsPlans from '../components/SectionBonsPlans';


const Accueil = () => {
    return(
        <div>
            <LandingAccueil/>
            <APropos/>
            <SectionBonsPlans/>
       
        </div>
    )
}

export default Accueil;