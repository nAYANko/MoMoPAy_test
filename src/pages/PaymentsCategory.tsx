import Logo from "@/components/Logo";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PaymentsCategory = () => {
  const navigate = useNavigate();

  const categories = ["Food", "Clothes", "Ciggs", "Others"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative min-h-screen">
        {/* Logo */}
        <div className="absolute left-12 top-12 z-10">
          <Logo />
        </div>

        {/* Back button circle - left */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-24 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/90 transition-colors z-10"
        >
          <ArrowLeft className="w-8 h-8 text-secondary-foreground" />
        </button>

        {/* Decorative circle - right */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-secondary z-10" />

        {/* Main circle with categories */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-16">
              Choose Payment Category
            </h1>

            <div className="space-y-6 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full text-3xl text-primary-foreground hover:scale-105 transition-transform"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Three dots */}
            <div className="flex justify-center gap-3 mb-12">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/60" />
              <div className="w-2 h-2 rounded-full bg-primary-foreground/60" />
              <div className="w-2 h-2 rounded-full bg-primary-foreground/60" />
            </div>

            {/* Plus button */}
            <button className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform">
              <Plus className="w-12 h-12 text-primary-foreground stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsCategory;
