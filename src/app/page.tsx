import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import BiasForAction from "@/components/BiasForAction";
import WhatIBuilt from "@/components/WhatIBuilt";
import TheNumbers from "@/components/TheNumbers";
import KitchenBuilt from "@/components/KitchenBuilt";
import Timeline from "@/components/Timeline";
import TheFit from "@/components/TheFit";
import ForTheTeam from "@/components/ForTheTeam";
import CinematicPoster from "@/components/CinematicPoster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Thesis />
      <BiasForAction />
      <WhatIBuilt />
      <TheNumbers />
      <KitchenBuilt />
      <Timeline />
      <TheFit />
      <ForTheTeam />
      <CinematicPoster />
      <Footer />
    </main>
  );
}
