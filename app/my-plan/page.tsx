"use client"

import PlanTab from "@/components/my-plan/PlanTab";
import { PlanContext } from "@/context/PlanContext";
import Workout from "@/types/workout.types";
import { useContext } from "react";

function MyPlanPage() {

  const workoutsPlanContext = useContext(PlanContext)
  if (!workoutsPlanContext) {
    return null;
  }

  const { todaysPlan } = workoutsPlanContext;


  function getSummary(todaysPlan: Workout[]) {
    const exercises = todaysPlan.length
    const minutes = todaysPlan.reduce((acc, workout) => acc + workout.duration, 0)
    const calories = todaysPlan.reduce((acc, workout) => acc + workout.caloriesBurned, 0)
    return { exercises, minutes, calories }
  }

  const { exercises, minutes, calories } = getSummary(todaysPlan)

  return (
    <div className="container mx-auto py-10 text-white">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Plan</h1>
        {
          todaysPlan.length === 0 ?
            <p className="text-[#8A92A0]">No lifts for today.</p> :
            todaysPlan.length === 1 ?
              <p className="text-[#8A92A0]">Cap of 1 lift for today. Finish it, then load more.</p> :
              <p className="text-[#8A92A0]">Cap of {todaysPlan.length} lifts for today. Finish them, then load more.</p>
        }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">

        <div className="bg-[#13161D] p-5 rounded-xl text-center">
          <p className="text-sm text-[#8A92A0] mt-b">Exercises</p>
          <h3 className="text-4xl font-bold text-[#C2F800]">{exercises}</h3>
        </div>

        <div className="bg-[#13161D] p-5 rounded-xl text-center">
          <p className="text-sm text-[#8A92A0] mt-b">Minutes</p>
          <h3 className="text-4xl font-bold text-white">{minutes}</h3>
        </div>

        <div className="bg-[#13161D] p-5 rounded-xl text-center">
          <p className="text-sm text-[#8A92A0] mb-1">Calories</p>
          <h3 className="text-4xl font-bold text-white">{calories}</h3>
        </div>
      </div>



      <section>
        <PlanTab></PlanTab>
      </section>
    </div>
  );
}

export default MyPlanPage;
