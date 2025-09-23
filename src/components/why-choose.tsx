"use client";
import { Clock, Truck, Leaf, Utensils } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-gray-100" />,
      title: "24/7 Naija Vibes",
      description:
        "From dawn prayers to midnight jollof cravings, we're here round the clock – because good food never sleeps in Lagos.",
      bgColor: "bg-gradient-to-br from-orange-600 to-red-600",
    },
    {
      icon: <Truck className="h-8 w-8 text-gray-100" />,
      title: "Lekki Lightning Delivery",
      description:
        "Your suya or egusi hits your door faster than okada traffic – steaming hot, under 30 mins, no wahala.",
      bgColor: "bg-gradient-to-br from-green-600 to-emerald-600",
    },
    {
      icon: <Leaf className="h-8 w-8 text-gray-100" />,
      title: "Fresh from the Market",
      description:
        "Straight from Oshodi markets and backyard farms – palm oil popping, spices singing, every bite a taste of home.",
      bgColor: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-orange-900/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-900/6 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">
              Hotspot 24
            </span>
            <span className="text-gray-100"> Feels Like Home</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            In the heart of Lekki, we&apos;re not just delivering food -
            we&apos;re bringing the soul of Naija to your plate, one flavorful
            bite at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-3"
            >
              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div
                  className={`p-4 rounded-2xl ${feature.bgColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bg-gradient-to-br from-orange-400/10 to-transparent rounded-2xl -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 relative">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to taste the Lekki magic?
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 text-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
            <Utensils className="h-4 w-4" />
            Order Now – 24/7 Naija Heat
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
