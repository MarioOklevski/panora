"use client"

interface CategoryNavProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-primary/20 mb-12">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-light tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
