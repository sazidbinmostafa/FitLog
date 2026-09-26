const getWorkouts = async () => {
    try {
        const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
            next: { revalidate: 3600 }
        })

        if (!res.ok) {
            throw new Error("Failed to fetch workouts data")
        }
        const data = await res.json()
        return data;
    }
    catch (error) {
        console.error("Failed to fetch workouts:", error)
        return []
    }
}


export default getWorkouts;