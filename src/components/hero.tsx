"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import PepperIcon from "@mui/icons-material/LocalFireDepartment";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  easeOut,
  easeIn,
  easeInOut,
} from "framer-motion";

export default function EnhancedHero() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: (
        <Image
          className="rounded-lg shadow-lg"
          src="/delicious-nigerian-jollof-rice-with-grilled-chicke.jpg"
          alt="Fried rice and turkey"
          width={60}
          height={60}
        />
      ),
      title: "Fried Rice & Turkey",
      description:
        "Crispy fried rice infused with aromatic spices, topped with tender, juicy turkey – a Lagos street food classic that hits all the right spots.",
    },
    {
      icon: (
        <Image
          className="rounded-lg shadow-lg"
          src="/nigerian-jollof-rice-in-a-bowl.jpg"
          alt="Pepper soup and chicken"
          width={60}
          height={60}
        />
      ),
      title: "Pepper Soup & Chicken",
      description:
        "Fiery pepper soup simmering with fresh herbs and bold utazi leaves, served with fall-off-the-bone chicken – pure Naija comfort in every spicy sip.",
    },
    {
      icon: (
        <Image
          className="rounded-lg shadow-lg"
          src="/grilled-suya-meat-skewers.jpg"
          alt="Pounded yam and egusi soup"
          width={60}
          height={60}
        />
      ),
      title: "Pounded Yam & Egusi",
      description:
        "Smooth, swallowable pounded yam paired with rich egusi stew loaded with spinach and crayfish – a hearty embrace of West African tradition.",
    },
    {
      icon: (
        <Image
          className="rounded-lg shadow-lg"
          src="/delicious-nigerian-jollof-rice-with-grilled-chicke.jpg"
          alt="Jollof rice and chicken"
          width={60}
          height={60}
        />
      ),
      title: "Jollof Rice & Chicken",
      description:
        "Our smoky jollof rice, slow-cooked with scotch bonnet fire and caramelized peppers, crowned with grilled chicken – the ultimate party starter.",
    },
    {
      icon: (
        <Image
          className="rounded-lg shadow-lg"
          src="/nigerian-jollof-rice-in-a-bowl.jpg"
          alt="Amala and ewedu soup"
          width={60}
          height={60}
        />
      ),
      title: "Amala & Ewedu",
      description:
        "Velvety amala from fermented yam flour, drawing you into the earthy depths of ewedu soup with locust beans – Yoruba soul food at its finest.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: easeIn,
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-20, 20, -20],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const floatSlowVariants = {
    float: {
      y: [-15, 15, -15],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: easeInOut,
        delay: 0.5,
      },
    },
  };

  const floatDelayVariants = {
    float: {
      y: [-10, 10, -10],
      rotate: [0, -1, 1, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut,
        delay: 1,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <motion.div
      className="relative w-full min-h-[85vh] md:min-h-svh bg-black overflow-hidden flex flex-col justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        variants={itemVariants}
      >
        <motion.div
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-600/15 to-red-600/10 rounded-full blur-3xl"
          variants={floatVariants}
          animate="float"
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-yellow-500/12 to-orange-600/8 rounded-full blur-3xl"
          variants={floatSlowVariants}
          animate="float"
        ></motion.div>
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-5"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-[url('/pattern-dots-dark.svg')] bg-repeat opacity-20"></div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 py-16 flex flex-col mt-[-60px] lg:flex-row items-center justify-between gap-12 relative z-10"
        variants={itemVariants}
      >
        <motion.div
          className="max-w-2xl space-y-8 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <motion.h1
              className="text-5xl xl:text-7xl font-bold tracking-tight"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">
                Hotspot 24/7
              </span>
              <span className="block mt-1 text-gray-100">
                Your 24/7 Food Delivery in Lekki
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-sm md:text-lg leading-relaxed text-gray-300"
            variants={itemVariants}
          >
            Fresh ingredients, expertly cooked with Naija soul, and ready to
            enjoy. Experience restaurant-quality dining at home – straight from
            the heart of Lagos.
          </motion.p>

          <motion.div
            className="relative glass-border-enhanced rounded-2xl p-6 mt-6 shadow-2xl"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-gray-100 text-xs font-semibold rounded-full shadow-md"
              variants={itemVariants}
            >
              TASTE OF NAIJA
            </motion.div>

            <div className="mt-2 relative">
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    activeFeature === index && (
                      <motion.div
                        key={index}
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex items-start gap-4"
                      >
                        {feature.icon}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-100">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            <motion.div
              className="flex justify-center mt-6"
              variants={itemVariants}
            >
              {features.map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    size={"icon"}
                    className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                      activeFeature === index ? "bg-orange-500" : "bg-gray-600"
                    }`}
                    onClick={() => setActiveFeature(index)}
                    aria-label={`Feature ${index + 1}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                aria-label="Order Now"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-gray-100 border-0 px-8 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={"/sign-in"}>
                  Order Now <ShoppingCart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                aria-label="View Menu"
                className="bg-transparent border-gray-600 hover:bg-gray-700/50 text-gray-100 px-8 rounded-xl shadow-md"
              >
                <Menu className="mr-2 h-5 w-5" /> View Menu
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative max-w-md xl:max-w-xl z-0"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div
              className="relative"
              variants={floatVariants}
              animate="float"
            >
              <Image
                src="/delicious-nigerian-jollof-rice-with-grilled-chicke.jpg"
                width={600}
                height={600}
                alt="Hotspot 24/7 Nigerian food delivery experience"
                className="w-full h-auto drop-shadow-2xl aspect-square rounded-2xl border border-white/10"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -top-1 -left-5 glass-border p-4 rounded-xl shadow-2xl"
              variants={floatSlowVariants}
              animate="float"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-2 rounded-full">
                  <FoodBankIcon className="h-5 w-5 text-gray-100" />
                </div>
                <div className="text-gray-100">
                  <p className="text-xs">Fresh Naija Vibes</p>
                  <p className="text-sm font-medium">Authentic Flavors</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 -right-6 glass-border p-4 rounded-xl shadow-2xl"
              variants={floatDelayVariants}
              animate="float"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-600 p-2 rounded-full">
                  <svg
                    className="h-5 w-5 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-gray-100">
                  <p className="text-xs">Lekki Speed</p>
                  <p className="text-sm font-medium">Under 30 mins</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-[-20px] bg-red-600/20 p-3 rounded-full border border-red-500/30 shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: easeInOut,
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <PepperIcon className="h-6 w-6 text-red-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
