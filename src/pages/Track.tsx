import Logo from "@/components/Logo";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const Track = () => {
  // Sample data for pie charts
  const categoryData = [
    { name: "Food", value: 30 },
    { name: "Clothes", value: 25 },
    { name: "Ciggs", value: 20 },
    { name: "Others", value: 25 },
  ];

  const weeklyData = [
    { name: "Mon", value: 15 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 12 },
    { name: "Thu", value: 20 },
    { name: "Fri", value: 16 },
    { name: "Sat", value: 10 },
    { name: "Sun", value: 9 },
  ];

  const COLORS = ["#E5E7EB", "#D1D5DB", "#9CA3AF", "#6B7280"];

  // Generate mock contribution data (GitHub-style)
  const generateContributionData = () => {
    const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
    const days = ["Mon", "Wed", "Fri"];
    const data = [];
    
    for (let month = 0; month < months.length; month++) {
      for (let day = 0; day < 4; day++) {
        data.push({
          month: months[month],
          day: day,
          count: Math.random() > 0.7 ? Math.floor(Math.random() * 4) : 0
        });
      }
    }
    return data;
  };

  const contributionData = generateContributionData();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>

      {/* Large green circle at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary flex items-center justify-center">

        <h1 className="text-5xl font-bold text-primary-foreground mt-60">
          Track Expenses
        </h1>
      </div>

      {/* Main content */}
      <div className="relative pt-64 px-12 mt-24 pb-12">
        {/* Remaining Budget */}
        <div className="flex justify-center mb-12">
          <div className="bg-primary/80 text-primary-foreground opacity-75 px-16 py-6 rounded-full text-2xl font-bold border-2 border-primary-foreground/20">
            REMAINING MONTLY BUDGET: 0
          </div>
        </div>

        {/* Pie Charts */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Category Distribution */}
          <div className="bg-primary/80 rounded-3xl opacity-85 p-8 border-2 border-primary-foreground/20">
            <h2 className="text-2xl font-bold text-primary-foreground text-center mb-6">
              Category<br />Distribution
            </h2>
            <div className="flex items-center gap-8">
                <div className="flex flex-col gap-3">
                  {categoryData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-8 h-6 rounded"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-primary-foreground">{entry.name}</span>
                    </div>
                  ))}
                </div>
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    stroke="#000"
                    strokeWidth={2}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weekly Distribution */}
          <div className="bg-primary/80 rounded-3xl p-8 opacity-85 border-2 border-primary-foreground/20">
            <h2 className="text-2xl font-bold text-primary-foreground text-center mb-6">
              Weekly<br />Distribution
            </h2>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={weeklyData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    stroke="#000"
                    strokeWidth={2}
                  >
                    {weeklyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-3">
                {weeklyData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-8 h-6 rounded"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-primary-foreground">{entry.name}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
