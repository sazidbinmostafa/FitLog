"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import TodaysPlanTab from './plan-tab/todays-tab/TodaysPlanTab'
import SavedWorkoutsTab from './plan-tab/saved-tab/SavedWorkoutsTab';
import { useContext, useState } from 'react';
import { PlanContext } from '@/context/PlanContext';

function PlanTab() {

    const router = useRouter();
    const searchParams = useSearchParams();


    // SortBy State \\
    const [sortBy, setSortBy] = useState("duration")

    // Workouts Plan Context
    const workoutsPlanContext = useContext(PlanContext);
    if (!workoutsPlanContext) {
        return null
    }
    const { todaysPlan, removeFromTodaysPlan, savedWorkouts, removeFromSavedWorkouts } = workoutsPlanContext;


    // Setting Active Tab
    const activeTab = searchParams.get("tab") || "today"

    const handleTabChange = (tab: string) => {
        router.push(`my-plan?tab=${tab}`, { scroll: false })

    }

    // Sorted Today's Plan
    const sortedTodaysPlan = [...todaysPlan].sort((a, b): number => {
        if (sortBy === "duration") { return a.duration - b.duration }
        if (sortBy === "caloriesBurned") { return b.caloriesBurned - a.caloriesBurned }
        if (sortBy === "rating") { return b.rating - a.rating }
        return 0
    })

    // Sorted Saved Workouts
    const sortedSavedWorkouts = [...savedWorkouts].sort((a, b): number => {
        if (sortBy === "duration") { return a.duration - b.duration }
        if (sortBy === "caloriesBurned") { return b.caloriesBurned - a.caloriesBurned }
        if (sortBy === "rating") { return b.rating - a.rating }
        return 0
    })


    // Tab button Style
    const tabStyle = (tab: string) => {
        if (tab === activeTab) {
            return "btn bg-[#1F242D] text-white rounded-xl"
        }
        else {
            return "btn border-none btn-outline hover:bg-base-100 text-[#8A92A0] hover:text-white rounded-xl"
        }
    }


    return (
        <>
            <div className="bg-dark-bg border-0 shadow-none my-4">
                <div className="flex items-center justify-between mb-6">
                    {/* Tab Buttons */}
                    <div className="flex bg-[#151921] border border-[#232732] rounded-xl p-1">
                        <button onClick={() => handleTabChange("today")} className={tabStyle("today")} >Today’s Plan</button>
                        <button onClick={() => handleTabChange("saved")} className={tabStyle("saved")} >Saved</button>
                    </div>

                    {/* Sorting Dropdown */}
                    <select
                        className="select select-bordered bg-[#14171E] text-[#8A92A0] w-fit"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="duration">Duration</option>
                        <option value="caloriesBurned">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>

                {/* Tab content */}
                <div className="bg-dark-bg my-8">
                    {activeTab === "today" ?
                        (<TodaysPlanTab
                            sortedTodaysPlan={sortedTodaysPlan}
                            removeFromTodaysPlan={removeFromTodaysPlan}
                        />) :
                        (<SavedWorkoutsTab
                            sortedSavedWorkouts={sortedSavedWorkouts}
                            removeFromSavedWorkouts={removeFromSavedWorkouts}
                        />)}
                </div>
            </div>
        </>
    )
}

export default PlanTab