
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  text: string;
  href: string;
  className?: string;
  showArrow?: boolean;
}

const CtaButton = ({ text, href, className, showArrow = true }: CtaButtonProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "cta-button flex items-center justify-center gap-2 animate-pulse-strong",
        className
      )}
    >
      {text}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </a>
  );
};

export default CtaButton;
