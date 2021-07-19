import React from 'react';
import SearchTips from '../components/SearchTips';
import LandingBonsPlans from '../components/LandingBonsPlans';
import NewBonPlan from '../components/NewBonPlan';
import RecentTips from '../components/RecentTips';

const BonsPlans = () => {

    return(
        <div>
            <LandingBonsPlans/>
            <SearchTips/>
            <RecentTips/>
            <NewBonPlan/>
        </div>
    )
}

export default BonsPlans;