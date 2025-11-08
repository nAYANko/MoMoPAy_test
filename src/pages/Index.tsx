import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import DecorativeCircles from "@/components/DecorativeCircles";
import HeroCircle from "@/components/HeroCircle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative min-h-screen">
        {/* Left side - Logo and Navigation */}
        <div className="absolute left-12 top-12 z-10">
          <Logo />
        </div>

        <div className="absolute left-12 top-1/3 z-10">
          <Navigation />
        </div>

        {/* Decorative floating circles */}
        <DecorativeCircles />

        {/* Right side - Large hero circle */}
        <HeroCircle />
      </div>
    </div>
  );
};

export default Index;
