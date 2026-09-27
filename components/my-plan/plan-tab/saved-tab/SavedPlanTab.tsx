import { PlanContext } from '@/context/PlanContext'
import React, { useContext } from 'react'
import EmptyPlan from '../empty-plan/EmptyPlan';
import SavedCard from './SavedCard';
 
function SavedPlanTab() {

    const workoutsPlanContext = useContext(PlanContext);
    if (!workoutsPlanContext) {
        return null
    }
    const { savedWorkouts, removeFromSavedWorkouts } = workoutsPlanContext;

    return (
        <>
            {savedWorkouts.length > 0 ?
            savedWorkouts.map((plan)=> <SavedCard key={plan.id} workout={plan} removeFromSavedWorkouts={removeFromSavedWorkouts} />) :
            <EmptyPlan/>  
        }
        </>
    )
}

export default SavedPlanTab