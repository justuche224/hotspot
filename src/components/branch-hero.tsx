"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Branch } from "@/lib/branches";
import { MapPin, Phone, Clock, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BranchHeroProps {
  branch: Branch;
}

export default function BranchHero({ branch }: BranchHeroProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

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

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'd like to place an order from ${branch.name}. Can you help me with the menu?`;
    const whatsappUrl = `https://wa.me/${(
      branch.whatsappNumber || branch.whatsapp
    ).replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="relative w-full bg-black overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-black/50" />

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">
                  {branch.name}
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Authentic Nigerian cuisine delivered fresh to your doorstep,
                24/7. Experience the taste of home with every bite.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="glass-border-enhanced rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-600 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-sm text-gray-300">{branch.address}</p>
                  </div>
                </div>
              </div>

              <div className="glass-border-enhanced rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Hours</h3>
                    <p className="text-sm text-gray-300">
                      {branch.operatingHours?.open || "24/7"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {branch.operatingHours?.days || "Monday - Sunday"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-border-enhanced rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Delivery</h3>
                    <p className="text-sm text-gray-300">
                      {branch.deliveryRadius || "5km radius"}
                    </p>
                    <p className="text-xs text-gray-400">
                      ₦{((branch.deliveryFee || 1500) / 100).toFixed(2)}{" "}
                      delivery fee
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-border-enhanced rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-600 p-2 rounded-full">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Rating</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-yellow-400">★★★★★</span>
                      <span className="text-sm text-gray-300">4.9/5</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {branch.testimonials?.length || 1} reviews
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleWhatsAppOrder}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Order via WhatsApp
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-gray-600 hover:bg-gray-700/50 text-gray-100 px-8 rounded-xl"
                  onClick={() =>
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Menu
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!mapLoaded && (
                <div className="relative h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/delicious-nigerian-jollof-rice-with-grilled-chicke.jpg"
                    alt={`${branch.name} location`}
                    fill
                    className="object-cover rounded-2xl opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                  <div className="relative z-10 text-center">
                    <MapPin className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">{branch.name}</p>
                    <p className="text-gray-300 text-sm mt-2">
                      {branch.address}
                    </p>
                  </div>
                </div>
              )}

              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"
                }&q=${encodeURIComponent(branch.address)}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`rounded-2xl ${mapLoaded ? "block" : "hidden"}`}
                onLoad={() => setMapLoaded(true)}
              />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 glass-border-enhanced rounded-xl p-4 bg-black/80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-center">
                <p className="text-sm text-gray-300">Quick Contact</p>
                <p className="text-orange-400 font-semibold">
                  {branch.whatsappNumber || branch.whatsapp}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
