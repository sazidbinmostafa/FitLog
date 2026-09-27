import Workout from '@/types/workout.types'
import { Clock, Flame, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function WorkoutCard({ workout }: { workout: Workout }) {

    return (
        <Link href={`/workouts/${workout.id}`}>
            <div className="card bg-base-100 w-full shadow-sm hover:shadow-lg transition group">
                <figure>
                    <Image src={workout.image} alt={`Illustration of ${workout.name}`} width={500} height={500} className="rounded-t-xl h-60 object-[center_25%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-2">
                        {workout.muscleGroups.map((muscle: string, index: number) => (
                            <div className="badge badge-sm badge-accent bg-[#C2F800] border border-[#C2F800] text-black font-bold rounded-3xl" key={index}>{muscle}</div>
                        ))}
                    </div>
                    {/* Workout Card Info */}
                    <div className='mt-1'>
                        <h2 className="card-title text-white font-bold text-xl my-1">
                            {workout.name}
                        </h2>
                        <p>{workout.equipment}</p>
                    </div>
                    <hr />
                    {/* Badges */}
                    <div className="card-actions flex gap-5">
                        <span className='text-sm flex items-center gap-1'><Clock  width={14} height={14} /> {workout.duration} mins</span>
                        <span className='text-sm flex items-center gap-1'><Flame width={14} height={14} /> {workout.caloriesBurned} kcal</span>
                        <span className='text-sm flex items-center gap-1'><Star width={14} height={14} /> {workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WorkoutCard