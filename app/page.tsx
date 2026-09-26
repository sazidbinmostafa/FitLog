import Banner from "@/components/home/Banner";
import Workouts from "@/components/workouts/Workouts";

export default function Home() {
  return (
    <div>
      <Banner/>
      <section id="library" className="lg:pt-14">
        <Workouts/>
      </section>
    </div>
  );
}
