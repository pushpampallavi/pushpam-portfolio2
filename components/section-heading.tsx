interface SectionHeadingProps {
  title: string
  description?: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">{title}</h2>
      {description && <p className="max-w-[800px] text-muted-foreground md:text-lg">{description}</p>}
    </div>
  )
}
