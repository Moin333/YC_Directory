import { Analytics } from '@vercel/analytics/next';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "../../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
            <Toaster />
            <Analytics />
        </main>
    )
}