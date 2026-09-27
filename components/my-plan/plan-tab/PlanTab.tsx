"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import EmptyPlan from './EmptyPlan'

function PlanTab() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const activeTab = searchParams.get("tab") || "today"

    const handleTabChange = (tab: string) => {
        router.push(`my-plan?tab=${tab}`, {scroll: false})

    }


    return (
        <div className="tabs tabs-box bg-dark-bg border-0 shadow-none my-4">
            {/* Tab 1 */}
            <input type="radio" name="my_tabs_6" className="tab hover:bg-base-100 text-[#9CA3AF] hover:text-white rounded" aria-label="Today’s Plan" checked={activeTab === "today"} onChange={() => handleTabChange("today")} />
            <div className="tab-content bg-dark-bg">
                <EmptyPlan />
            </div>

            {/* Tab 2 */}
            <input type="radio" name="my_tabs_6" className="tab hover:bg-base-100 text-[#9CA3AF] hover:text-white rounded" aria-label="Saved" checked={activeTab === "saved"} onChange={() => handleTabChange("saved")} />
            <div className="tab-content bg-dark-bg">
                <EmptyPlan />
            </div>
        </div>
    )
}

export default PlanTab