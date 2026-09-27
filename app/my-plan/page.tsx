"use client"

import PlanTab from "@/components/my-plan/plan-tab/PlanTab";
import { PlanContext } from "@/context/PlanContext";
import { useContext } from "react";

function MyPlanPage() {

  const workoutsPlanContext = useContext(PlanContext)
  if(!workoutsPlanContext){
    return null;
  }

  const {todaysPlan, savedWorkouts, removeFromTodaysPlan, removeFromSavedWorkouts} = workoutsPlanContext;

  console.log(todaysPlan)

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

      <section>
        <PlanTab></PlanTab>
      </section>
    </div>
  );
}

export default MyPlanPage;
