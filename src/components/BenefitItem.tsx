
import { Check } from "lucide-react";

interface BenefitItemProps {
  text: string;
}

const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <div className="benefit-item">
      <span className="bg-lazycash-red rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-4 h-4 text-white" />
      </span>
      <p className="font-bold text-lazycash-white text-lg">{text}</p>
    </div>
  );
};

export default BenefitItem;
