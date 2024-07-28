import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Bungee_Outline } from "next/font/google";
import { Anton } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
// import Nav from "./ components/Nav";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "500", "300"],
  variable: "--font-poppins",
});
const plus = Plus_Jakarta_Sans({ subsets: ["latin"], weight:['200','300',"400"]}) ;
const anton = Anton({ subsets: ["latin"], weight: "400" });
const bungee = Bungee_Outline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});
export const metadata = {
  title: "StrikeMMA.AI",
  description: "Solving problems of the online socializing space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bungee.variable} ${anton.variable}${inter.variable}  overflow-x-hidden`}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
