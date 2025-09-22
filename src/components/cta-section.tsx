"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const branches = [
    {
      name: "Lekki Phase 1",
      address: "Plot 123 Admiralty Way, Lekki Phase 1",
      phone: "+234 801 234 5678",
      hours: "24/7",
    },
    {
      name: "Victoria Island",
      address: "45B Kofo Abayomi Street, VI",
      phone: "+234 801 234 5679",
      hours: "24/7",
    },
    {
      name: "Ikoyi",
      address: "18B Parkview Estate, Ikoyi",
      phone: "+234 801 234 5680",
      hours: "24/7",
    },
    {
      name: "Ajah",
      address: "Badore Road, Ajah",
      phone: "+234 801 234 5681",
      hours: "24/7",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-pink-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Choose your nearest branch and enjoy delicious Nigerian cuisine
            delivered fresh to your door
          </p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
            >
              Order Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {branch.name}
                  </h3>
                </div>

                <div className="space-y-3 text-white/90">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{branch.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{branch.hours}</span>
                  </div>
                </div>

                <Link
                  href={`/menu/${branch.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors group/link"
                >
                  View Menu
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Service Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">&lt; 30min</div>
              <div className="text-sm">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Locations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
