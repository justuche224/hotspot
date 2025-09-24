"use client";
import { Branch } from "@/lib/branches";
import { Clock, MapPin, Truck, DollarSign, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface DeliveryInfoProps {
  branch: Branch;
}

export default function DeliveryInfo({ branch }: DeliveryInfoProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const deliveryZones = [
    { area: "Lekki Phase 1", time: "15-25 mins", fee: "₦15.00" },
    { area: "Victoria Island", time: "20-30 mins", fee: "₦15.00" },
    { area: "Ikoyi", time: "25-35 mins", fee: "₦20.00" },
    { area: "Ajah", time: "30-45 mins", fee: "₦25.00" },
  ];

  const operatingSchedule = [
    { day: "Monday - Friday", hours: "24 Hours", status: "open" },
    { day: "Saturday", hours: "24 Hours", status: "open" },
    { day: "Sunday", hours: "24 Hours", status: "open" },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center space-y-4" variants={itemVariants}>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Delivery & Operating Hours
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We deliver fresh, authentic Nigerian cuisine right to your doorstep.
          Available 24/7 across Lekki and surrounding areas.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div className="space-y-6" variants={itemVariants}>
          <Card className="glass-border bg-gray-800/20 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Delivery Coverage
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {branch.deliveryRadius || "5km radius"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3">
                  {deliveryZones.map((zone, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 glass-border-subtle rounded-lg"
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-orange-400" />
                        <div>
                          <p className="text-white font-medium">{zone.area}</p>
                          <p className="text-gray-400 text-sm">
                            Est. {zone.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{zone.fee}</p>
                        <p className="text-gray-400 text-xs">delivery fee</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">
                      Free Delivery
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Orders above ₦50.00 qualify for free delivery within 3km
                    radius
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-border bg-gray-800/20 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-600 p-2 rounded-full">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Pricing & Fees
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Transparent pricing, no hidden charges
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 glass-border-subtle rounded-lg">
                  <span className="text-gray-300">Standard Delivery Fee</span>
                  <span className="text-white font-semibold">
                    ₦{((branch.deliveryFee || 1500) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 glass-border-subtle rounded-lg">
                  <span className="text-gray-300">Service Charge</span>
                  <span className="text-white font-semibold">₦0.00</span>
                </div>
                <div className="flex justify-between items-center p-3 glass-border-subtle rounded-lg">
                  <span className="text-gray-300">Minimum Order</span>
                  <span className="text-white font-semibold">₦25.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-600/10 border border-green-600/30 rounded-lg">
                  <span className="text-green-300">
                    Free Delivery Threshold
                  </span>
                  <span className="text-green-400 font-semibold">₦50.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <Card className="glass-border bg-gray-800/20 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Operating Hours
                  </h3>
                  <p className="text-gray-400 text-sm">Always open for you</p>
                </div>
              </div>

              <div className="space-y-3">
                {operatingSchedule.map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 glass-border-subtle rounded-lg"
                    variants={itemVariants}
                  >
                    <div>
                      <p className="text-white font-medium">{schedule.day}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-300">{schedule.hours}</span>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-medium">
                          Open
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-orange-600/10 border border-orange-600/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span className="text-orange-400 font-medium">
                    Peak Hours
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Delivery times may extend by 5-10 minutes during peak hours
                  (12-2 PM, 7-9 PM)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-border bg-gray-800/20 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Quality Promise
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our commitment to excellence
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Fresh Ingredients</p>
                    <p className="text-gray-400 text-sm">
                      Sourced daily from local markets
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Hot Delivery</p>
                    <p className="text-gray-400 text-sm">
                      Insulated packaging keeps food hot
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">
                      Customer Satisfaction
                    </p>
                    <p className="text-gray-400 text-sm">
                      100% money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
