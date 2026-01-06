"use client"

import { useState } from "react"
import Image from "next/image";
import { MenuSection } from "@/components/menu-section"
import { MenuItem } from "@/components/menu-item"
import { CategoryNav } from "@/components/category-nav"

const menuData = {
  COFFEE: [
    { name: "Espresso", price: "80den", description: "" },
    { name: "Macchiato", price: "90den", description: "" },
    { name: "Espresso local", price: "50den", description: "" },
    { name: "Macchiato local", price: "60den", description: "" },
    { name: "Macchiato small", price: "70den", description: "" },
    { name: "Latte", price: "100den", description: "" },
    { name: "Nescafe", price: "100den", description: "" },
    { name: "Turkish coffee", price: "70den", description: "" },
  ],
  TEA: [
    { name: "Black tea", price: "50den", description: "" },
    { name: "Green tea", price: "60den", description: "" },
    { name: "Herbal tea", price: "70den", description: "" },
    { name: "Mint tea", price: "70den", description: "" },
    { name: "Chamomile tea", price: "70den", description: "" },
  ],
  BREAKFAST: [
    {
      name: "Continental breakfast",
      price: "350den",
      description: "Fresh pastries, butter, jam, cheese, and coffee or tea",
    },
    {
      name: "Panora breakfast",
      price: "450den",
      description: "Eggs, bacon, sausage, toast, fresh fruit, and your choice of beverage",
    },
    {
      name: "Avocado toast",
      price: "280den",
      description: "Sourdough bread, mashed avocado, poached egg, cherry tomatoes",
    },
    {
      name: "Greek yogurt parfait",
      price: "220den",
      description: "Greek yogurt, granola, seasonal berries, honey",
    },
  ],
  LUNCH: [
    {
      name: "Caesar salad",
      price: "320den",
      description: "Romaine lettuce, parmesan, croutons, classic Caesar dressing",
    },
    {
      name: "Grilled chicken sandwich",
      price: "380den",
      description: "Marinated chicken breast, lettuce, tomato, aioli, served with fries",
    },
    {
      name: "Pasta primavera",
      price: "340den",
      description: "Fresh seasonal vegetables, garlic, olive oil, parmesan",
    },
    {
      name: "Burger Panora",
      price: "420den",
      description: "Beef patty, cheddar, caramelized onions, special sauce, fries",
    },
  ],
  DESSERTS: [
    { name: "Tiramisu", price: "180den", description: "" },
    { name: "Chocolate lava cake", price: "200den", description: "" },
    { name: "Cheesecake", price: "190den", description: "" },
    { name: "Crème brûlée", price: "210den", description: "" },
  ],
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>("COFFEE")
  const categories = Object.keys(menuData) as Array<keyof typeof menuData>

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="3" className="text-primary" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="3" className="text-primary" />
          <ellipse cx="300" cy="300" rx="180" ry="200" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path
            d="M200 280 Q250 250 300 280 Q350 250 400 280"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 py-12 px-4">
        {/* Header with logo and brand */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Logo icon */}
            <div className="relative">
              <Image
                src="/header-logo.png"
                alt="Example"
                width={600}
                height={400}
                className="block sm:hidden"
                loading="eager"
              />

              <Image
                src="/logo.png"
                alt="Example"
                width={800}
                height={600}
                className="hidden sm:block"
                loading="eager"
              />
            </div>
          </div>
        </header>

        {/* Category navigation */}
        <CategoryNav categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Coffee Section */}
        <MenuSection title={activeCategory}>
          {menuData[activeCategory].map((item, index) => (
            <MenuItem key={index} name={item.name} price={item.price} description={item.description} />
          ))}
        </MenuSection>

        {/* Footer */}
        <footer className="text-center mt-20 text-muted-foreground">
          <p className="text-sm font-light">All prices are in Macedonian denars</p>
          <p className="text-sm font-light mt-2">© 2026 Panora Restaurant</p>
        </footer>
      </div>
    </main>
  )
}
