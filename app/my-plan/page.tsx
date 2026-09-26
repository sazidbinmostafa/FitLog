"use client"

import PlanTab from "@/components/my-plan/plan-tab/PlanTab";
import { PlanContext } from "@/context/PlanContext";
import { useContext } from "react";

function MyPlanPage() {

  const workoutPlanContext = useContext(PlanContext)
  if(!workoutPlanContext){
    return null;
  }

  const {todaysPlan, savedWorkouts, removeFromTodaysPlan, removeFromSavedWorkouts} = workoutPlanContext;

  console.log(todaysPlan)

  return (
    <div className="container mx-auto py-10 text-white">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Plan</h1>
        <p className="text-[#8A92A0]">
          Cap of {0} lifts for today. Finish them, then load more.
        </p>
      </div>

      <section>
        <PlanTab></PlanTab>
      </section>
    </div>
  );
}

export default MyPlanPage;
