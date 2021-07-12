import React from 'react';
import SearchTips from '../components/SearchTips';
import LandingBonsPlans from '../components/LandingBonsPlans';
import NewBonPlan from '../components/NewBonPlan';

const BonsPlans = () => {

    return(
        <div>
            <LandingBonsPlans/>
            <SearchTips/>
            <NewBonPlan/>
        </div>
    )
}

export default BonsPlans;