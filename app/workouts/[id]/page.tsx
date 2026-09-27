import WorkoutDetails from '@/components/workouts/workout/WorkoutDetails';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'FITLOG | Workout Details'
};

async function WorkoutDetailsPage({ params }: { params: { id: string } }) {

    const { id } = await params;

    // Fetching Workout Details \\
    const getWorkoutDetails = async () => {
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

    const workoutDetails = await getWorkoutDetails()

    return (
        <Suspense>
            <WorkoutDetails workoutDetails={workoutDetails} />
        </Suspense>
    )
}

export default WorkoutDetailsPage