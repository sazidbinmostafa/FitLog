import Link from 'next/link'

function EmptyPlan() {
    return (
        <div className="flex flex-col items-center justify-center h-[40vh] text-center border border-dashed border-[#25252c] rounded-xl container">
            <h2 className="text-2xl font-bold text-white mb-2">NOTHING HERE YET</h2>
            <p className="text-gray-400 mb-6">
                Browse the library and add a lift to get today moving.
            </p>
            <Link href="/workouts" className="btn bg-[#C2F800] text-black rounded-xl">Go to workouts</Link>
        </div>
    )
}

export default EmptyPlan