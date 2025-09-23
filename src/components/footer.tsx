"use client";
import { Mail, MapPin, Phone, Clock, Truck, Star } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Menu", href: "/menu" },
      { name: "Branches", href: "/branches" },
      { name: "Catering", href: "/catering" },
      { name: "Gift Cards", href: "/gift-cards" },
      { name: "Order Tracking", href: "/track" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "FAQs", href: "/faqs" },
      { name: "Contact Support", href: "/support" },
      { name: "Delivery Info", href: "/delivery" },
      { name: "Refund Policy", href: "/refunds" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Food Safety", href: "/food-safety" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  };

  const branches = [
    {
      name: "Lekki Phase 1",
      address: "Plot 123 Admiralty Way, Lekki Phase 1",
      phone: "+234 801 234 5678",
    },
    {
      name: "Victoria Island",
      address: "45B Kofo Abayomi Street, VI",
      phone: "+234 801 234 5679",
    },
    {
      name: "Ikoyi",
      address: "18B Parkview Estate, Ikoyi",
      phone: "+234 801 234 5680",
    },
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* AMOLED Black with subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Hotspot 24/7
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Your 24/7 Nigerian food delivery partner in Lekki. Fresh
                ingredients, authentic flavors, and lightning-fast delivery –
                straight from the heart of Lagos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@hotspot247.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+234 801 HOT SPOT</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-400">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Truck className="h-4 w-4" />
                <span className="text-sm">&lt; 30min Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span className="text-sm">24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-semibold text-white mb-4">Branches</h4>
            <ul className="space-y-3">
              {branches.map((branch, index) => (
                <li key={index} className="text-gray-400">
                  <div className="font-medium text-white text-sm">
                    {branch.name}
                  </div>
                  <div className="text-xs mt-1">{branch.phone}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get the latest menu updates, exclusive deals, and Naija food tips
              delivered to your inbox.
            </p>
            <div className="flex gap-2 flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-border-subtle rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 bg-transparent"
              />
              <button
                aria-label="Subscribe"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Hotspot 24/7. All rights reserved. Made with ❤️ in Lagos.
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <span className="text-sm">
                Follow us for the best Naija vibes!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-center opacity-5 pointer-events-none"></div>
    </footer>
  );
}
