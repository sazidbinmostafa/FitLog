import Workout from '@/types/workout.types';
import React, { Suspense } from 'react'
import WorkoutCard from './workout/WorkoutCard';
import SkeletonWorkouts from '../skeleton/SkeletonWorkouts';
import getWorkouts from '@/lib/getWorkouts';

async function Workouts() {

    const workouts: Workout[] = await getWorkouts()

    return (
        <section className="my-5 container">
            <div className='text-center md:text-left space-y-2'>
                <h2 className="text-3xl font-bold text-white">THE LIBRARY</h2>
                <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 w-full">
                <Suspense fallback={<SkeletonWorkouts />}>
                    {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
                </Suspense>
            </div>
        </section>
    )
}

export default Workouts