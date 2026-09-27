
import Workout from '@/types/workout.types'
import { Clock,  Flame, Star} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


type SavedCardProps = {
    workout: Workout
    removeFromSavedWorkouts: (workout: Workout) => void
}

function SavedCard({ workout, removeFromSavedWorkouts }: SavedCardProps) {

    return (
        <div className="mb-5">
            <div className="bg-[#14171E] shadow-sm rounded-xl flex flex-col sm:flex-row">
                <figure className="w-full sm:w-48">
                    <Image
                        src={workout.image}
                        alt={`Illustration of ${workout.name}`}
                        width={500}
                        height={300}
                        className="rounded-t-xl sm:rounded-l-xl sm:rounded-t-none w-full h-48 md:h-40 object-cover object-[center_25%]"
                    />
                </figure>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 flex-1 gap-4">
                    <div className="space-y-2 flex-1">
                        <h2 className="text-xl font-semibold">{workout.name}</h2>
                        <p className="text-sm text-[#8A92A0]">{workout.equipment}</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="text-sm text-[#8A92A0] flex items-center gap-1">
                                <Clock className="text-[#C2F800]" width={14} height={14} /> {workout.duration} mins
                            </span>
                            <span className="text-sm text-[#8A92A0] flex items-center gap-1">
                                <Flame className="text-[#C2F800]" width={14} height={14} /> {workout.caloriesBurned} kcal
                            </span>
                            <span className="text-sm text-[#8A92A0] flex items-center gap-1">
                                <Star className="text-[#C2F800]" width={14} height={14} /> {workout.rating}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <Link href={`/workouts/${workout.id}`} className='btn btn-outline hover:bg-base-100 active:bg-base-100 focus:bg-base-100 border-[#374151] text-[#8A92A0] rounded-3xl'>View Details</Link>
                        <button onClick={() => removeFromSavedWorkouts(workout)} className="btn btn-outline hover:btn-error focus:btn-error active:btn-error border-[#374151] text-[#8A92A0] hover:text-black focus:text-black active:text-black rounded-3xl w-full sm:w-auto">X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedCard