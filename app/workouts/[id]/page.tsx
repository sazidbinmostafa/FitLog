import WorkoutDetails from '@/components/workouts/workout/WorkoutDetails';
import { Suspense } from 'react';

async function WorkoutDetailsPage({ params }: { params: { id: string } }) {

    const { id } = await params;

    const getWorkDetails = async () => {
        try {
            const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, {
                next: { revalidate: 3600 }
            })
            if (!res.ok) {
                throw new Error("Failed to fetch workout details")
            }
            const workout = await res.json()
            return workout
        }
        catch (error) {
            console.error("Failed to fetch workout details:", error)
            return null
        }
    }

    const workoutDetails = await getWorkDetails()

    return (
        <Suspense>
            <WorkoutDetails workoutDetails={workoutDetails} />
        </Suspense>
    )
}

export default WorkoutDetailsPage