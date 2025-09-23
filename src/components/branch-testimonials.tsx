"use client";
import { Branch } from "@/lib/branches";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface BranchTestimonialsProps {
  branch: Branch;
}

export default function BranchTestimonials({
  branch,
}: BranchTestimonialsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  const averageRating =
    branch.testimonials.reduce(
      (sum, testimonial) => sum + testimonial.rating,
      0
    ) / branch.testimonials.length;

  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center space-y-4" variants={itemVariants}>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          What Our Customers Say
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            {renderStars(Math.round(averageRating))}
            <span className="text-lg font-semibold text-white">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <div className="h-6 w-px bg-gray-600" />
          <p className="text-gray-300">
            Based on {branch.testimonials.length} reviews
          </p>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real feedback from our valued customers at {branch.name}. We&apos;re
          committed to delivering exceptional food and service every time.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {branch.testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <Card className="glass-border h-full bg-gray-800/20 border-gray-700 hover:border-orange-500/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {formatDate(testimonial.date)}
                    </p>
                  </div>
                  <div className="bg-orange-600/10 p-2 rounded-full">
                    <Quote className="h-5 w-5 text-orange-400" />
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-300 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </blockquote>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span>Verified Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 pt-8"
        variants={containerVariants}
      >
        <motion.div
          className="text-center glass-border-subtle rounded-xl p-6"
          variants={itemVariants}
        >
          <div className="bg-green-600 p-3 rounded-full w-fit mx-auto mb-4">
            <Star className="h-6 w-6 text-white fill-current" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            4.9/5 Rating
          </h3>
          <p className="text-gray-400 text-sm">
            Consistently high ratings from our satisfied customers
          </p>
        </motion.div>

        <motion.div
          className="text-center glass-border-subtle rounded-xl p-6"
          variants={itemVariants}
        >
          <div className="bg-orange-600 p-3 rounded-full w-fit mx-auto mb-4">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">100% Fresh</h3>
          <p className="text-gray-400 text-sm">
            Always using the freshest ingredients for authentic taste
          </p>
        </motion.div>

        <motion.div
          className="text-center glass-border-subtle rounded-xl p-6"
          variants={itemVariants}
        >
          <div className="bg-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-400 text-sm">
            Average delivery time under 30 minutes in our coverage area
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
