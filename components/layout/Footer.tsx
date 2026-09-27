"use client"
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (

        <div className="footer text-center md:text-left sm:footer-horizontal bg-dark-bg border-t-2 border-t-[#15171D] items-center py-8 container mt-14">
            <aside className='w-fit mx-auto md:mx-0'>
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn btn-ghost text-xl flex items-center gap-2"><Image src="/icon.png" alt="FITLOG" width={25} height={25} /><h3>FITLOG</h3></Link>
            </aside>
            <div className="md:place-self-center md:justify-self-end">
                <p className='text-sm text-[#8A92A0]'>Copyright © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    )
}

export default Footer