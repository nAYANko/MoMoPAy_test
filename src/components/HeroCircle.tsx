import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import "./button.css";

const HeroCircle = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-primary flex items-center justify-center overflow-hidden">
      <div className="max-w-lg text-center px-12">
        <h1 className="text-4xl md:text-4xl font-bold text-primary-foreground mb-12 mr-40 leading-tight">
          "Organize Your Expenses Better Than Ever"
        </h1>
      <div className="mr-40"> 
      <div className="container">
        <a href="/payments-category" className="button type--C">
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">ENTRY</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </a>
      </div>
      </div>

      </div>
    </div>
  );
};

export default HeroCircle;
