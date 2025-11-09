import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Payment = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleConfirm = () => {
    if (upiId.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsComplete(true);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative min-h-screen">
        {/* Logo */}
        <div className="absolute left-12 top-12 z-10">
          <Logo />
        </div>

        {/* Back button circle - left */}
        <button
          onClick={() => navigate("/payments-category")}
          className="absolute left-24 top-1/2 -translate-y-1/2 w-32 h-32 opacity-65 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/90 transition-colors z-10"
        >
          <ArrowLeft className="w-8 h-8 text-secondary-foreground" />
        </button>

        {/* Main circle with content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary flex items-center justify-center">
          {!isLoading && !isComplete && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary-foreground mb-12">
                Enter UPI id
              </h1>

              <div className="mb-8 px-12">
                <Input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full h-16 px-8 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground/40 text-primary-foreground placeholder:text-primary-foreground/60 text-center text-lg focus-visible:ring-primary-foreground/50"
                  placeholder=""
                />
              </div>

              <button
                onClick={handleConfirm}
                disabled={!upiId.trim()}
                className="px-16 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground text-2xl hover:bg-primary-foreground/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
            </div>
          )}

          {isLoading && (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-2xl text-primary-foreground">Processing...</p>
            </div>
          )}

          {isComplete && (
            <div className="text-center">
              <h1 className="text-5xl font-bold text-primary-foreground">
                Payment Complete
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
