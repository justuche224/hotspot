"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Branch } from "@/lib/branches";
import { Phone, ShoppingCart, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CartItem {
  name: string;
  price: number;
}

interface WhatsAppCheckoutProps {
  branch: Branch;
  cartItems?: CartItem[];
}

interface OrderForm {
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  orderNotes: string;
}

export default function WhatsAppCheckout({
  branch,
  cartItems = [],
}: WhatsAppCheckoutProps) {
  const [orderForm, setOrderForm] = useState<OrderForm>({
    customerName: "",
    customerPhone: "",
    deliveryAddress: "",
    orderNotes: "",
  });

  const generateWhatsAppMessage = () => {
    const orderDetails =
      cartItems.length > 0
        ? cartItems
            .map(
              (item, index) =>
                `${index + 1}. ${item.name} - ₦${(item.price / 100).toFixed(2)}`
            )
            .join("\n")
        : "I'd like to view your menu and place an order.";

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    const deliveryFee = branch.deliveryFee ?? 1500;
    const grandTotal = totalAmount + deliveryFee;

    const message = `🍽️ *NEW ORDER - ${branch.name}*

👤 *Customer Details:*
Name: ${orderForm.customerName || "Not provided"}
Phone: ${orderForm.customerPhone || "Not provided"}
Delivery Address: ${orderForm.deliveryAddress || "Not provided"}

📋 *Order Details:*
${orderDetails}

${
  cartItems.length > 0
    ? `
💰 *Order Summary:*
Subtotal: ₦${(totalAmount / 100).toFixed(2)}
Delivery Fee: ₦${(deliveryFee / 100).toFixed(2)}
*Total: ₦${(grandTotal / 100).toFixed(2)}*
`
    : ""
}

${
  orderForm.orderNotes
    ? `📝 *Special Notes:*
${orderForm.orderNotes}`
    : ""
}

📍 *Branch:* ${branch.name}
📞 *Contact:* ${branch.whatsappNumber || branch.whatsapp}

Please confirm this order and provide estimated delivery time. Thank you! 🙏`;

    return message;
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${(
      branch.whatsappNumber || branch.whatsapp
    ).replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleQuickOrder = () => {
    const quickMessage = `Hello ${branch.name}! 👋

I'd like to place a quick order. Can you please send me your latest menu?

📍 Delivery to: ${branch.address} area
📞 Contact: ${orderForm.customerPhone || "Will provide"}  

Thank you!`;

    const whatsappUrl = `https://wa.me/${(
      branch.whatsappNumber || branch.whatsapp
    ).replace("+", "")}?text=${encodeURIComponent(quickMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="liquid-glass rounded-2xl p-6 lg:p-8 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-4">
        <motion.div
          className="bg-green-600 p-3 rounded-full w-fit mx-auto"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Phone className="h-8 w-8 text-white" />
        </motion.div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Order via WhatsApp
          </h2>
          <p className="text-gray-300">
            Quick and easy ordering through WhatsApp. Get personalized service
            and real-time updates.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <Input
              placeholder="Enter your full name"
              value={orderForm.customerName}
              onChange={(e) =>
                setOrderForm((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <Input
              placeholder="+234 xxx xxx xxxx"
              value={orderForm.customerPhone}
              onChange={(e) =>
                setOrderForm((prev) => ({
                  ...prev,
                  customerPhone: e.target.value,
                }))
              }
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Delivery Address
            </label>
            <Input
              placeholder="Your full delivery address"
              value={orderForm.deliveryAddress}
              onChange={(e) =>
                setOrderForm((prev) => ({
                  ...prev,
                  deliveryAddress: e.target.value,
                }))
              }
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Special Instructions (Optional)
            </label>
            <Textarea
              placeholder="Any special requests or dietary requirements..."
              value={orderForm.orderNotes}
              onChange={(e) =>
                setOrderForm((prev) => ({
                  ...prev,
                  orderNotes: e.target.value,
                }))
              }
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 resize-none h-20"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800/30 rounded-xl p-4 space-y-3">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <MapPin className="h-4 w-4 text-orange-400" />
          Delivery Information
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Coverage Area</p>
            <p className="text-white">
              {branch.deliveryRadius || "5km radius"}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Delivery Fee</p>
            <p className="text-white">
              ₦{((branch.deliveryFee ?? 1500) / 100).toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Est. Time</p>
            <p className="text-white">20-45 mins</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <motion.div
          className="flex-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleWhatsAppOrder}
            size="lg"
            disabled={!orderForm.customerName || !orderForm.customerPhone}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {cartItems.length > 0
              ? "Send Order to WhatsApp"
              : "Contact via WhatsApp"}
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={handleQuickOrder}
            size="lg"
            variant="outline"
            className="bg-transparent border-gray-600 hover:bg-gray-700/50 text-gray-100 rounded-xl"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Quick Order
          </Button>
        </motion.div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-gray-400 text-sm">
          WhatsApp: {branch.whatsappNumber || branch.whatsapp}
        </p>
        <p className="text-gray-500 text-xs">
          Available {branch.operatingHours?.open || "24/7"} •{" "}
          {branch.operatingHours?.days || "Monday - Sunday"}
        </p>
      </div>
    </motion.div>
  );
}
