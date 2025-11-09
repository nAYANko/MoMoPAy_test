import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no login logic
    console.log("Login attempted");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h1 className="text-[20rem] font-bold text-primary" style={{ 
          WebkitTextStroke: '2px hsl(var(--primary))',
          WebkitTextFillColor: 'transparent'
        }}>
          MAYURA
        </h1>
      </div>

      {/* Large Green Circle */}
      <div className="w-[900px] h-[900px] rounded-full bg-primary flex items-center justify-center relative">
        {/* Login Card */}
        <div className="bg-accent/60 rounded-[40px] p-12 w-[450px] shadow-2xl backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white text-center mb-8">LOGIN</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="username" className="text-white text-sm uppercase tracking-wider">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 rounded-full border-2 border-primary-foreground/30 bg-transparent text-white placeholder:text-white/50"
                placeholder=""
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-white text-sm uppercase tracking-wider">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-full border-2 border-primary-foreground/30 bg-transparent text-white placeholder:text-white/50"
                placeholder=""
              />
            </div>
          </form>
        </div>

        {/* Login Button outside the card */}
        <Button
          type="submit"
          onClick={handleSubmit}
          className="absolute bottom-32 bg-primary/80 hover:bg-primary text-primary-foreground font-bold text-lg px-12 h-14 rounded-full border-2 border-primary-foreground/30"
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default Login;
