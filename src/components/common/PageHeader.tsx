
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
};

const PageHeader = ({
  title,
  subtitle,
  className,
  align = "center",
  children,
}: PageHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12", alignmentClasses[align], className)}>
      <h1 className="heading-lg mb-4 animate-fade-up">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground text-pretty animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default PageHeader;
