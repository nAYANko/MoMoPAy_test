const DecorativeCircles = () => {
  return (
    <>
      {/* Large circles */}
      <div
        className="absolute top-24 left-1/4 w-32 h-32 rounded-full bg-secondary/40 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-secondary/50 animate-float-delayed"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-36 h-36 rounded-full bg-secondary/45 animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Small accent circles */}
      <div
        className="absolute top-20 left-[15%] w-8 h-8 rounded-full bg-primary/60 animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/2 left-[20%] w-6 h-6 rounded-full bg-primary/70 animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-1/4 left-[30%] w-7 h-7 rounded-full bg-primary/65 animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-48 left-[18%] w-5 h-5 rounded-full bg-primary/55 animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />
    </>
  );
};

export default DecorativeCircles;
