"use client";
import { motion } from "framer-motion";
import { Clock, Truck, Leaf } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "24/7 Service",
      description:
        "We're always open, ready to serve you anytime, day or night. No more waiting for restaurant hours.",
      bgColor: "bg-primary",
    },
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Fast Delivery",
      description:
        "Hot, fresh meals delivered to your door in under 30 minutes. Speed you can count on.",
      bgColor: "bg-green-500",
    },
    {
      icon: <Leaf className="h-8 w-8 text-white" />,
      title: "Local & Fresh",
      description:
        "Sourced from local farmers and markets, ensuring the freshest ingredients in every dish.",
      bgColor: "bg-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
              Hotspot 24
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for food delivery in
            Lekki
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative liquid-glass rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div
                  className={`p-4 rounded-2xl ${feature.bgColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Ready to experience the difference?
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
            <Clock className="h-4 w-4" />
            Order Now - Available 24/7
          </div>
        </motion.div>
      </div>
    </section>
  );
}
