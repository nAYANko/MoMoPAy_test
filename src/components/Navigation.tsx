import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { label: "Track Expenses", href: "#track" },
    { label: "Manage Categories", href: "#categories" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="text-muted-foreground hover:text-foreground transition-colors text-lg font-light tracking-wide"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
