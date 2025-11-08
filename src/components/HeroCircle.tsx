import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroCircle = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-primary flex items-center justify-center overflow-hidden">
      <div className="max-w-lg text-center px-12">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-12 leading-tight">
          "Organize Your Expenses Better Than Ever"
        </h1>
        <Button
          size="lg"
          variant="outline"
          className="text-xl px-12 py-7 rounded-full border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 group"
        >
          Start Now
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default HeroCircle;
