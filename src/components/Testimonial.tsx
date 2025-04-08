
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  className?: string;
}

const Testimonial = ({ quote, author, className }: TestimonialProps) => {
  return (
    <div className={cn(
      "bg-lazycash-gray-dark p-4 rounded-lg relative border-l-4 border-lazycash-yellow",
      className
    )}>
      <p className="italic text-lazycash-white text-lg mb-2">"{quote}"</p>
      <p className="text-right text-lazycash-white opacity-80 text-sm">- {author}</p>
    </div>
  );
};

export default Testimonial;
