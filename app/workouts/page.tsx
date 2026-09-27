import Workouts from '@/components/workouts/Workouts'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FITLOG | All Workouts'
};

function WorkoutsPage() {
    return (
        <Workouts/>
    )
}

export default WorkoutsPage