"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Victoria Island",
      rating: 5,
      review:
        "Hotspot 24 has been a game changer! Their 24/7 service means I can get amazing Nigerian food whenever the craving hits. The jollof rice is absolutely authentic and delivered piping hot.",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Michael Adebayo",
      location: "Lekki Phase 1",
      rating: 5,
      review:
        "The fastest delivery in Lagos! Ordered pepper soup at 2 AM and it arrived in 25 minutes. The quality is restaurant-grade and the portions are generous. Will definitely order again.",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Grace Okafor",
      location: "Ikoyi",
      rating: 5,
      review:
        "As someone who loves fresh, local ingredients, Hotspot 24 delivers on every promise. Their pounded yam and egusi soup tastes exactly like home. The freshness is unbeatable!",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "David Thompson",
      location: "Ajah",
      rating: 5,
      review:
        "Moved to Lagos 6 months ago and Hotspot 24 has made the transition so much easier. Their fried rice and chicken is the best I've had outside of Nigeria. Fast, fresh, and delicious!",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Amara Nwosu",
      location: "Lekki Phase 2",
      rating: 5,
      review:
        "The convenience is unmatched. Working late nights, I can always count on Hotspot 24 for quick, nutritious meals. Their customer service is also top-notch!",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "James Wilson",
      location: "Banana Island",
      rating: 5,
      review:
        "Hotspot 24 sets the standard for food delivery in Lagos. Every dish arrives perfectly cooked, and their commitment to local sourcing shows in every bite. Highly recommended!",
      avatar: "/api/placeholder/64/64",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Real reviews from satisfied customers across Lagos
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              <div className="space-y-4">
                <StarRating rating={testimonial.rating} />

                <p className="text-gray-700 dark:text-white/80 leading-relaxed italic">
                  &quot;{testimonial.review}&quot;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-white/60">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-white/60">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">10,000+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">50,000+</span>
              <span>Meals Delivered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
