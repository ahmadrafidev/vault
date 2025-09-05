import { cn } from "@/src/utils";
import { useMobileLayout } from "@/src/hooks";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  titleId?: string;
}

export function PageHero({ title, description, className, titleId }: PageHeroProps) {
  const { heroSpacing, titleSize, descriptionSize } = useMobileLayout({
    reducePadding: true,
    compactSpacing: true,
    adaptiveMaxWidth: true,
  });

  return (
    <div className={cn(heroSpacing, className)}>
      <h1
        id={titleId || "page-title"}
        className={cn(titleSize, "font-medium tracking-tight text-foreground mb-3")}
      >
        {title}
      </h1>
      {description && (
        <p className={cn(descriptionSize, "text-foreground/60 max-w-2xl leading-relaxed")}>
          {description}
        </p>
      )}
    </div>
  );
}
