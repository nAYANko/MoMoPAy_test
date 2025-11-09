import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("General");

  const sidebarItems = [
    "General",
    "Privacy",
    "Security",
    "Auth",
    "Parental",
  ];

  const generalItems = [
    "Notifications",
    "Account",
    "Payment Methods",
    "Cards",
    "Vouchers",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Logo */}
      <div className="absolute left-12 top-12 z-10">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen pt-32 px-12 gap-8">
        {/* Sidebar */}
        <div className="w-[230px] bg-primary/40 rounded-[40px] p-8 flex-shrink-0">
          <h2 className="text-3xl font-bold text-foreground mb-8">Settings</h2>
          <nav className="flex flex-col gap-4">
            {sidebarItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`text-left text-xl transition-colors ${
                  activeSection === item
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex gap-1 mt-4 ml-2">
              <div className="w-2 h-2 rounded-full bg-foreground/70"></div>
              <div className="w-2 h-2 rounded-full bg-foreground/70"></div>
              <div className="w-2 h-2 rounded-full bg-foreground/70"></div>
            </div>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-primary rounded-[40px] p-12">
          <h1 className="text-6xl font-bold text-primary-foreground mb-8">
            {activeSection}
          </h1>
          
          {activeSection === "General" && (
            <div className="flex flex-col gap-6 max-w-4xl">
              {generalItems.map((item) => (
                <button
                  key={item}
                  className="w-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground text-left px-8 py-6 rounded-2xl text-2xl transition-colors border border-primary-foreground/20"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {activeSection === "Privacy" && (
            <div className="text-primary-foreground/80 text-xl">
              Privacy settings content...
            </div>
          )}

          {activeSection === "Security" && (
            <div className="text-primary-foreground/80 text-xl">
              Security settings content...
            </div>
          )}

          {activeSection === "Auth" && (
            <div className="text-primary-foreground/80 text-xl">
              Authentication settings content...
            </div>
          )}

          {activeSection === "Parental" && (
            <div className="text-primary-foreground/80 text-xl">
              Parental control settings content...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
