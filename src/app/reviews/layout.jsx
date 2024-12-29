import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Reviews | Tobirama Senju",
    description: "User can give reviews about tobirama senju",
};

export default function RootLayout({ children }) {
    return (

        <div>
            <div>
                <Navbar appTitle={"Tobirama Senju"} />
            </div>
            <div>
                {children}
            </div>
        </div>

    );
}
