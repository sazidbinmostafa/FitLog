import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: 'FITLOG | 404',
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-dark-bg text-center">
            <h1 className="text-6xl font-extrabold text-[#C2F800] mb-4">404</h1>
            <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
            <p className="text-[#8A92A0] mb-6">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link href="/" className="btn bg-[#C2F800] text-black rounded-xl px-6 py-2">Go Back Home </Link>
        </div>
    )
}
