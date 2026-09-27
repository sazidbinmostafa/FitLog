"use client"
import { PlanContext } from '@/context/PlanContext'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

function Navbar() {

    // Getting Pathname \\
    const pathname = usePathname()

    // Workouts Context \\
    const workoutsPlanContext = useContext(PlanContext);
    if (!workoutsPlanContext) {
        return null;
    }

    const { todaysPlan, savedWorkouts } = workoutsPlanContext;


    // Link Styles \\
    const workoutsLinkStyle = `rounded-3xl ${pathname === "/workouts"
        ? "bg-[#2a391c] text-[#C2F800]"
        : "text-[#9CA3AF] hover:bg-[#2a391c] hover:text-[#C2F800]"
        }`

    const planLinkStyle = `rounded-3xl ${pathname === "/my-plan"
        ? "bg-[#2a391c] text-[#C2F800]"
        : "text-[#9CA3AF] hover:bg-[#2a391c] hover:text-[#C2F800]"
        }`


    // Route Links \\
    const Links = <>
        <li><Link href="/workouts" className={workoutsLinkStyle}>Workouts</Link></li>
        <li><Link href="/my-plan" className={planLinkStyle}>My Plan</Link></li>
    </>

    return (
        <nav className="fixed top-0 left-0 bg-dark-bg right-0 z-50 text-white border-b-2 border-b-[#15171D] container">
            <div className="navbar">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        {/* Mobile Menu Links */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                            {Links}
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn btn-ghost text-xl flex items-center gap-2"><Image src="/icon.png" alt="FITLOG" width={25} height={25} /><h3>FITLOG</h3></Link>
                </div>
                {/* NavLinks */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {Links}
                    </ul>
                </div>

                {/* Dynamic Link Badges with dynamic Numbers based on added workouts plan*/}
                <div className="navbar-end ml-2 flex gap-1">
                    <Link href="/my-plan?tab=today" className="btn btn-xs! pr-0 w-fit md:btn-sm! border border-[#15171D] btn-ghost group text-[#9CA3AF] focus:text-[#C2F800] active:text-[#C2F800] hover:text-[#C2F800] rounded-3xl">Plan
                        {todaysPlan.length > 0 ?
                            <span className='badge h-full bg-[#C2F800] border rounded-full text-sm text-black'>{todaysPlan.length}</span> :
                            <span className='badge h-full group-focus:bg-[#C2F800] group-active:bg-[#C2F800] group-hover:bg-[#C2F800] border rounded-full text-sm text-[#9CA3AF] group-hover:text-black group-focus:text-black group-active:text-black'>{0}</span>}
                    </Link>
                    <Link href="/my-plan?tab=saved" className="btn btn-xs! pr-0 w-fit md:btn-sm! border border-[#15171D] btn-ghost group text-[#9CA3AF] focus:text-white active:text-white hover:text-white rounded-3xl">Saved
                        {savedWorkouts.length > 0 ?
                            <span className='badge h-full bg-base-100 border rounded-full text-sm text-white'>{savedWorkouts.length}</span> :
                            <span className='badge h-full group-focus:bg-base-100 group-active:bg-base-100 group-hover:bg-base-100 border rounded-full text-sm text-[#9CA3AF] group-hover:text-white group-focus:text-white group-active:text-white'>{0}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar