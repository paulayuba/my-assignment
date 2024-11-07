import Image from "next/image";
import HeaderFooter from "@/components/layout/layout";
import { backgroundIMage } from "../../public/icons/index";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero"
import Bussiness from "@/components/layout/Bussiness";
import ModernSolution from "@/components/layout/ModernSolution";
import Clients from "@/components/layout/Clients";


export default function Home() {
  return (
    <HeaderFooter>
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Background Image */}
      <Navbar />
      <Hero />
      <Bussiness />
      <ModernSolution />
      <Clients />
      </div>
    </HeaderFooter>
  );
}
