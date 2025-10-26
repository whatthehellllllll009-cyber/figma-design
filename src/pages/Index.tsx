import { ProfileCard } from "@/components/ProfileCard";
import { Gallery } from "@/components/Gallery";
import { InstructionBox } from "@/components/InstructionBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left half - instruction box */}
      <div className="hidden lg:flex lg:w-1/2 p-6 items-center justify-center">
        <InstructionBox />
      </div>
      
      {/* Right half - widgets */}
      <div className="w-full lg:w-1/2 p-6 space-y-5 flex flex-col justify-center">
        <ProfileCard />
        <Gallery />
      </div>
    </div>
  );
};

export default Index;
