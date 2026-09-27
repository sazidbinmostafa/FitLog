"use client"

import React, { useContext } from 'react'
import WorkoutTable from './WorkoutTable'
import { Bookmark, Calendar, Check, Info, MessageCircleWarning, MessageCircleWarningIcon, MessageSquareWarning, Radiation } from 'lucide-react';
import Image from 'next/image'
import Workout from '@/types/workout.types'
import { PlanContext } from '@/context/PlanContext';
import toast from 'react-hot-toast';

function WorkoutDetails({ workoutDetails }: { workoutDetails: Workout }) {


    // WorkoutPlanContext \\
    const workoutPlanContext = useContext(PlanContext)
    if (!workoutPlanContext) {
        return null;
    }
    const { todaysPlan, savedWorkouts, addToTodaysPlan, addToSavedWorkouts } = workoutPlanContext;

    // Handle Add To Todays Plan Function \\
    const handleAddToTodaysPlan = () => {
        if (todaysPlan.length < 5) {
            addToTodaysPlan(workoutDetails)
            toast.success('Added to Plan Successfully');
        }
        else {
            toast(
                <span>
                    You have already 5 plans for today
                </span>,
                {
                    icon: <MessageSquareWarning className='text-warning font-bold' />,
                }
            );
        }
    }

    // Handle Add To Saved Workouts Function \\
    const handleAddToSavedWorkouts = () => {
        addToSavedWorkouts(workoutDetails)
        toast.success('Saved for later');
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 container">
            <div className="flex justify-center">
                <Image src={workoutDetails.image} alt={workoutDetails.name} width={600} height={600} className="rounded-xl object-cover" />
            </div>
            <div>
                <div >
                    {/* Workout's Details */}
                    <div className='mt-1'>
                        <h2 className="card-title text-white font-bold text-3xl my-1">
                            {workoutDetails.name}
                        </h2>
                        <p className="text-[#9CA3AF] my-2">{workoutDetails.description}</p>
                    </div>
                    <div className="flex gap-2 my-3">
                        {workoutDetails.muscleGroups.map((muscle: string, index: number) => (
                            <div className="badge badge-sm badge-accent bg-[#C2F800] border border-[#C2F800] text-black font-bold rounded-3xl" key={index}>{muscle}</div>
                        ))}
                    </div>
                    {/* Workout's Instruction Table */}
                    <WorkoutTable workoutDetails={workoutDetails} />
                    <div className='my-5'>
                        <h3 className='text-white font-semibold text-lg'>INSTRUCTIONS</h3>
                        <ol className='list-decimal list-inside text-sm'>
                            {workoutDetails.instructions.map((instruction: string, index: number) => (
                                <li key={index} className="text-[#E5E7EB] my-2">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        {
                                todaysPlan.some(w => w.id === workoutDetails.id) ? (
                                <button className="btn btn-sm bg-gray-300 md:btn-md text-[#0F1115] rounded-xl cursor-not-allowed"><Check /> Added to today’s plan</button>) : 
                                todaysPlan.length === 5 ? 
                                (<button onClick={handleAddToTodaysPlan} className="btn btn-sm md:btn-md btn-outline border-[#374151] rounded-xl"><Calendar />Add to today’s plan</button>) : 
                                (<button onClick={handleAddToTodaysPlan} className="btn btn-sm md:btn-md bg-[#C2F800] text-[#0F1115] rounded-xl"><Calendar />Add to today’s plan</button>)
                        }
                        {
                            savedWorkouts.some(w => w.id === workoutDetails.id) ? (
                                <button className="btn btn-sm bg-gray-300 md:btn-md text-[#0F1115] rounded-xl cursor-not-allowed"><Check /> Saved for later</button>) : (
                                <button onClick={handleAddToSavedWorkouts} className="btn btn-sm md:btn-md btn-outline border-[#374151] rounded-xl"><Bookmark />Save for later</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetails