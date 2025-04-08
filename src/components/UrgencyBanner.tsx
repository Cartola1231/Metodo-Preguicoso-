
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 27, seconds: 19 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="bg-lazycash-red bg-opacity-90 py-2 px-4 fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 z-50">
      <Clock className="w-5 h-5 animate-pulse" />
      <p className="font-bold text-white">
        OFERTA EXPIRA EM: <span className="font-mono">
          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </p>
    </div>
  );
};

export default UrgencyBanner;
