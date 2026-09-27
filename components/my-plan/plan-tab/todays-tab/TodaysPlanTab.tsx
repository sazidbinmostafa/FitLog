import Workout from '@/types/workout.types';
import PlanCard from './PlanCard';
import EmptyPlan from '../empty-plan/EmptyPlan';

// Props Type \\
type TodaysPlanProps = {
    sortedTodaysPlan: Workout[]
    removeFromTodaysPlan: (Workout: Workout) => void
}

function TodaysPlanTab({sortedTodaysPlan, removeFromTodaysPlan} : TodaysPlanProps) {

    return (
        <>
            {sortedTodaysPlan.length > 0 ?
                sortedTodaysPlan.map((plan) => <PlanCard key={plan.id} workout={plan} removeFromTodaysPlan={removeFromTodaysPlan}/>) :
                <EmptyPlan />
            }
        </>
    )
}

export default TodaysPlanTab