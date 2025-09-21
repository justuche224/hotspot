"use client";

import {
  Menu,
  ShoppingCart,
  UserCircle,
  Clock,
  ChefHat,
  Star,
} from "lucide-react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-svh overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/beautiful-gourmet-meal-plated-elegantly-on-white-p.jpg"
          alt="Delicious gourmet meal"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-2 md:p-5 gap-5 flex flex-col">
        {/* Header */}
        <header className="flex items-center w-full liquid-glass-header p-3 rounded-full sticky top-5">
          <nav className="flex items-center justify-between w-full">
            <div>
              <Menu />
            </div>
            <div className=" max-w-7xl gap-10 mx-auto flex items-center justify-between">
              <p
                className={
                  "text-2xl font-bold tracking-tight leading-1.5 text-white"
                }
              >
                Hotspot
              </p>
              <div className="hidden md:flex">
                <Stack direction="row" spacing={1}>
                  <Button variant="contained">
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="contained">
                    <Link href="/branches">Branches</Link>
                  </Button>
                  <Button variant="contained">
                    <Link href="/about">About</Link>
                  </Button>
                  <Button variant="contained">
                    <Link href="/meals">Meals</Link>
                  </Button>
                  <Button variant="contained">
                    <Link href="/contact">Contact</Link>
                  </Button>
                </Stack>
              </div>
              <div></div>
            </div>
            <div className="flex items-center gap-4">
              <ShoppingCart className="text-white" />
              <UserCircle className="text-white" />
            </div>
          </nav>
        </header>
        {/* Main */}
        <section className="flex-1 flex items-center min-h-[90svh] justify-center">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Hotpot 24 - Your 24/7 Food Delivery in Lekki
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
              Fresh ingredients, expertly cooked, and ready to enjoy. Experience
              restaurant-quality dining at home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="contained"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              >
                Order Now
              </Button>
              <Button
                variant="contained"
                className="text-white border-white hover:bg-white hover:text-foreground text-lg px-8 py-6 bg-transparent"
              >
                View Menu
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>30 min delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                <span>Fresh ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </section>
        {/* How it works */}
        <section>
          <div className="liquid-glass p-8 rounded-3xl container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2">How It Works</h2>
              <p className="text-white/80">Get your food in 3 simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl font-bold text-accent mb-2">01</div>
                <h3 className="text-2xl font-semibold">Choose Your Branch</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Visit Hotpot 24 and select the branch closest to you for the
                  fastest delivery
                </p>
                <Button className="w-fit mt-2" variant="contained">
                  View Branches
                </Button>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl font-bold text-accent mb-2">02</div>
                <h3 className="text-2xl font-semibold">Place Your Order</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Browse our menu, customize your meal, and place your order
                  with just a few taps
                </p>
                <Button className="w-fit mt-2" variant="contained">
                  Order Now
                </Button>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl font-bold text-accent mb-2">03</div>
                <h3 className="text-2xl font-semibold">Enjoy Your Meal</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Sit back and relax as we deliver your delicious meal right to
                  your door in 30 minutes
                </p>
                <div className="mt-2">
                  <Clock className="h-6 w-6 text-accent mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured meals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Featured Meals
              </h2>
              <p className="text-white/80 text-lg">
                Delicious meals that will make you want to order more. No need
                to search, we have them all here.
              </p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {[
                {
                  name: "Spicy Ramen",
                  price: "$12.99",
                  description:
                    "Rich broth with fresh noodles and premium toppings",
                },
                {
                  name: "Chicken Teriyaki",
                  price: "$14.99",
                  description:
                    "Grilled chicken with our signature teriyaki sauce",
                },
                {
                  name: "Beef Stir Fry",
                  price: "$16.99",
                  description:
                    "Tender beef with mixed vegetables and soy sauce",
                },
                {
                  name: "Vegetable Curry",
                  price: "$11.99",
                  description:
                    "Creamy coconut curry with fresh seasonal vegetables",
                },
                {
                  name: "Salmon Bowl",
                  price: "$18.99",
                  description: "Fresh salmon with rice and pickled vegetables",
                },
                {
                  name: "Pork Dumplings",
                  price: "$9.99",
                  description: "Handmade dumplings with savory pork filling",
                },
                {
                  name: "Chicken Katsu",
                  price: "$15.99",
                  description: "Crispy breaded chicken with tonkatsu sauce",
                },
                {
                  name: "Tofu Salad",
                  price: "$10.99",
                  description:
                    "Fresh tofu with mixed greens and sesame dressing",
                },
              ].map((meal, index) => (
                <div
                  key={index}
                  className="liquid-glass p-6 rounded-2xl min-w-[280px] snap-center flex-shrink-0"
                >
                  <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-white/10">
                    <Image
                      src={"/images/placeholder-dish.png"}
                      alt={meal.name}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {meal.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-3 leading-relaxed">
                    {meal.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {meal.price}
                    </span>
                    <Button variant="contained" size="small">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Hotpot 24 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Hotpot 24
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We&apos;re not just another food delivery app. Here&apos;s what
                makes us different.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-glass p-8 rounded-2xl text-center">
                <div className="text-6xl mb-4">🕐</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  24/7 Service
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We&apos;re always open! Satisfy your cravings anytime, day or
                  night. Your favorite meals are just a tap away, whenever you
                  want them.
                </p>
              </div>

              <div className="liquid-glass p-8 rounded-2xl text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Get your food delivered in 30 minutes or less. We value your
                  time and ensure your meal arrives hot and fresh, every single
                  time.
                </p>
              </div>

              <div className="liquid-glass p-8 rounded-2xl text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Local & Fresh
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We source ingredients locally and prepare everything fresh
                  daily. Taste the difference with quality ingredients from
                  trusted local suppliers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-white/80 text-lg">
                Don&apos;t just take our word for it. Here&apos;s what our happy
                customers have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-glass p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Sarah Johnson</h4>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  &quot;Hotpot 24 is my go-to for late-night cravings! Their
                  ramen is incredible and always arrives piping hot. The 24/7
                  service is a lifesaver!&quot;
                </p>
              </div>

              <div className="liquid-glass p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Michael Chen</h4>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  &quot;The delivery is incredibly fast - I ordered at 2 AM and
                  got my food in 25 minutes! The quality is restaurant-level.
                  Highly recommend!&quot;
                </p>
              </div>

              <div className="liquid-glass p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Amara Okwu</h4>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  &quot;Love the fresh ingredients! You can taste the quality in
                  every bite. The local sourcing really makes a difference. Best
                  food delivery in Lekki!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="liquid-glass p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Hotpot 24 for
                their food delivery needs. Order now and taste the quality
                difference!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="contained"
                  className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 min-w-[200px]"
                  href="/branches"
                  component={Link}
                >
                  Order Now
                </Button>
                <Button
                  variant="outlined"
                  className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-6 min-w-[200px]"
                  href="/branches"
                  component={Link}
                >
                  View Branches
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>30 min delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="h-5 w-5" />
                    <span>Fresh daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hotpot 24</h3>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed max-w-md">
                  Your 24/7 food delivery partner in Lekki. Fresh, fast, and
                  always available. Experience restaurant-quality meals
                  delivered to your door.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock className="h-4 w-4" />
                    <span>24/7 Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <span>⚡</span>
                    <span>30 min delivery</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/branches"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Branches
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Customer Service */}
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Customer Service
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/track-order"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Track Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Help & Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/returns"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Returns & Refunds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/feedback"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter & Contact */}
            <div className="liquid-glass p-6 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Stay Updated
                  </h4>
                  <p className="text-white/70 mb-4">
                    Get notified about new menu items, special offers, and
                    exclusive deals.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button
                      variant="contained"
                      className="bg-accent hover:bg-accent/90 px-6"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Get in Touch
                  </h4>
                  <div className="space-y-2 text-white/70">
                    <p className="flex items-center gap-2">
                      <span>📧</span>
                      hello@hotpot24.com
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📞</span>
                      +234 123 456 7890
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📍</span>
                      Lekki, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                <p className="text-white/60">
                  © 2025 Hotpot 24. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href="/privacy"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <span className="text-lg">📘</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <span className="text-lg">🐦</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <span className="text-lg">📱</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
