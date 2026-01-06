import type { ReactNode } from "react"

interface MenuSectionProps {
  title: string
  children: ReactNode
}

export function MenuSection({ title, children }: MenuSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="bg-primary rounded-full py-4 px-8 mb-8">
        <h2 className="text-white text-center text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">{title}</h2>
      </div>
      <div className="space-y-6 px-4 md:px-8">{children}</div>
    </div>
  )
}
