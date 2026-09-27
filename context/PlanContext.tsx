"use client"

import React, { createContext, useEffect, useState } from 'react'
import Workout from '@/types/workout.types'
import { usePathname } from 'next/navigation'

type PlanContextType = {
    todaysPlan: Workout[]
    savedWorkouts: Workout[]
    addToTodaysPlan: (workout: Workout) => void
    removeFromTodaysPlan: (workout: Workout) => void
    addToSavedWorkouts: (Workout: Workout) => void
    removeFromSavedWorkouts: (Workout: Workout) => void

}

export const PlanContext = createContext<PlanContextType | null>(null)


function ScrollToTop() {
    const pathname = usePathname()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior:"smooth"})
    }, [pathname])
    return null
}

function PlanProvider({ children }: { children: React.ReactNode }) {

    const [todaysPlan, setTodaysPlan] = useState<Workout[]>([])
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([])


    const addToTodaysPlan = (workout: Workout) => {
        if (todaysPlan.length < 5) {
            if (!todaysPlan.some(w => w.id === workout.id)) {
                setTodaysPlan([...todaysPlan, workout])
            }
        }
    }

    const removeFromTodaysPlan = (workout: Workout) => {
        if (todaysPlan.some(w => w.id === workout.id)) {
            const restPlan = todaysPlan.filter(w => w.id !== workout.id)
            setTodaysPlan(restPlan)
        }
    }

    const addToSavedWorkouts = (workout: Workout) => {
        if (!savedWorkouts.some(w => w.id === workout.id)) {
            setSavedWorkouts([...savedWorkouts, workout])
        }
    }

    const removeFromSavedWorkouts = (workout: Workout) => {
        if (savedWorkouts.some(w => w.id === workout.id)) {
            const restSaved = savedWorkouts.filter(w => w.id !== workout.id)
            setSavedWorkouts(restSaved)
        }
    }

    


    return (
        <PlanContext.Provider
            value={{
                todaysPlan,
                savedWorkouts,
                addToTodaysPlan,
                removeFromTodaysPlan,
                addToSavedWorkouts,
                removeFromSavedWorkouts,
            }}
        ><ScrollToTop />{children}</PlanContext.Provider>
    )
}

export default PlanProvider