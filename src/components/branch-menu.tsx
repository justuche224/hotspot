"use client";
import React, { useState } from "react";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Branch } from "@/lib/branches";
import { useCartStore } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface BranchMenuProps {
  branch: Branch;
}

interface FoodItem {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
}

export default function BranchMenu({ branch }: BranchMenuProps) {
  const { addItem, items } = useCartStore();
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    {
      id: 1,
      name: "Breakfast",
      icon: <FreeBreakfastIcon fontSize="large" />,
      isActive: true,
    },
    {
      id: 2,
      name: "Lunch",
      icon: <LunchDiningIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 3,
      name: "Dinner",
      icon: <SoupKitchenIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 4,
      name: "Dessert",
      icon: <CakeIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 5,
      name: "Drinks",
      icon: <LocalBarIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 6,
      name: "Pizza",
      icon: <LocalPizzaIcon fontSize="large" />,
      isActive: false,
    },
  ];

  const foodItems: FoodItem[] = [
    {
      id: "grilled-suya-1",
      name: "Grilled Suya Meat Skewers",
      image: "/grilled-suya-meat-skewers.jpg",
      price: 10000,
      description:
        "Tender beef skewers marinated in spicy peanut sauce, grilled to perfection.",
      rating: 4.8,
    },
    {
      id: "jollof-chicken-1",
      name: "Delicious Nigerian Jollof Rice with Grilled Chicken",
      image: "/delicious-nigerian-jollof-rice-with-grilled-chicke.jpg",
      price: 6000,
      description:
        "Flavorful tomato-based rice served with juicy grilled chicken.",
      rating: 4.7,
    },
    {
      id: "jollof-bowl-1",
      name: "Nigerian Jollof Rice in a Bowl",
      image: "/nigerian-jollof-rice-in-a-bowl.jpg",
      price: 4000,
      description: "Classic party jollof rice, smoky and spicy.",
      rating: 4.5,
    },
    {
      id: "pepper-soup-1",
      name: "Nigerian Pepper Soup with Fish",
      image: "/nigerian-pepper-soup-with-fish.jpg",
      price: 7800,
      description:
        "Spicy traditional pepper soup with fresh fish and aromatic spices.",
      rating: 4.6,
    },
    {
      id: "pounded-yam-1",
      name: "Pounded Yam with Egusi Soup",
      image: "/nigerian-pounded-yam-with-egusi-soup.jpg",
      price: 8000,
      description:
        "Smooth pounded yam served with rich egusi soup loaded with vegetables.",
      rating: 4.8,
    },
  ];

  const activeCategory = menuItems.find((item) => item.isActive);
  const branchCartItems = items.filter(
    (item) => item.branchSlug === branch.slug
  );
  const totalCartItems = branchCartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (foodItem: FoodItem) => {
    addItem({
      id: `${foodItem.id}-${branch.slug}`,
      name: foodItem.name,
      price: foodItem.price,
      quantity: 1,
      image: foodItem.image,
      productSlug: foodItem.id,
      branchSlug: branch.slug,
    });
  };

  return (
    <section
      id="menu"
      className="min-h-screen space-y-8 relative overflow-hidden text-gray-100"
    >
      <div className="absolute -z-10 inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      <div className="absolute -z-10 top-0 left-0 w-full h-[50vh] bg-gradient-to-br from-orange-900/8 to-transparent rounded-b-[4rem]" />
      <div className="absolute -z-10 top-10 right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-bl from-red-900/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-[-20%] left-[-10%] w-[30rem] h-[30rem] bg-gradient-to-tr from-orange-900/5 to-transparent rounded-full blur-3xl" />

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 tracking-tight">
          Our Menu
        </h2>
        <div className="flex items-center space-x-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full glass-border-subtle focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 text-gray-100 placeholder-gray-400"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-3 glass-border-subtle rounded-full shadow-sm hover:border-orange-500/40 transition text-gray-100">
            <FilterListIcon className="mr-2 text-gray-300" />
            Filters
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`p-4 rounded-xl min-w-[6rem] flex flex-col items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg ${
                item.isActive
                  ? "bg-orange-600 text-white scale-105"
                  : "glass-border-subtle text-gray-100 hover:border-orange-500/40"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium mt-1">{item.name}</span>
            </button>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
            {activeCategory?.name}
          </h3>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">
              {filteredFoodItems.length} items available
            </span>
            {totalCartItems > 0 && (
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl"
              >
                <Link href={`/branches/${branch.slug}/cart`}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  View Cart ({totalCartItems})
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredFoodItems.map((item) => (
            <motion.div
              key={item.id}
              className="group rounded-2xl overflow-hidden glass-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-orange-500/30"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 glass-border-enhanced px-2 py-1 rounded-full text-sm font-medium text-gray-100 flex items-center">
                  ⭐ {item.rating}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-lg text-gray-100 line-clamp-1">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-100">
                    ₦{(item.price / 100).toFixed(2)}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {branch.specialOffers && branch.specialOffers.length > 0 && (
        <div className="mt-12 space-y-6">
          <h3 className="text-3xl font-bold text-gray-100 tracking-tight">
            Special Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branch.specialOffers.map((offer, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-gradient-to-r from-orange-800 to-red-900 p-6 text-gray-100 shadow-lg"
              >
                <h4 className="text-2xl font-bold mb-2">{offer.title}</h4>
                <p className="mb-4">{offer.description}</p>
                <button className="glass-border-enhanced text-orange-400 px-6 py-2 rounded-lg font-medium hover:border-orange-500/50">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
