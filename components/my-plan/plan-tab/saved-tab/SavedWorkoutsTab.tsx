import Workout from '@/types/workout.types';
import EmptyPlan from '../empty-plan/EmptyPlan';
import SavedCard from './SavedCard';

// Props Types \\
type SavedWorkoutsProps = {
    sortedSavedWorkouts: Workout[]
    removeFromSavedWorkouts: (workout : Workout) => void

}
 
function SavedWorkoutsTab({sortedSavedWorkouts, removeFromSavedWorkouts} : SavedWorkoutsProps) {

    return (
        <>
            {sortedSavedWorkouts.length > 0 ?
            sortedSavedWorkouts.map((plan)=> <SavedCard key={plan.id} workout={plan} removeFromSavedWorkouts={removeFromSavedWorkouts} />) :
            <EmptyPlan/>  
        }
        </>
    )
}

export default SavedWorkoutsTab