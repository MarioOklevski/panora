interface MenuItemProps {
  name: string
  price: string
  description?: string
}

export function MenuItem({ name, price, description }: MenuItemProps) {
  return (
    <div className="border-b border-primary/30 pb-4">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-xl md:text-2xl font-light text-foreground flex-1">{name}</h3>
        <span className="text-xl md:text-2xl font-light text-foreground whitespace-nowrap">{price}</span>
      </div>
      {description && <p className="text-sm text-muted-foreground mt-2 font-light">{description}</p>}
    </div>
  )
}
