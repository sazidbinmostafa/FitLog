import { PlanContext } from '@/context/PlanContext'
import React, { useContext } from 'react'
import PlanCard from './PlanCard';
import EmptyPlan from '../empty-plan/EmptyPlan';

function TodaysPlanTab() {

    const workoutsPlanContext = useContext(PlanContext);
    if (!workoutsPlanContext) {
        return null
    }
    const { todaysPlan, removeFromTodaysPlan } = workoutsPlanContext;

    return (
        <>
            {todaysPlan.length > 0 ?
            todaysPlan.map((plan)=> <PlanCard key={plan.id} workout={plan} removeFromTodaysPlan={removeFromTodaysPlan} />) :
            <EmptyPlan/>  
        }
        </>
    )
}

export default TodaysPlanTab