
import { useEffect, useState } from "react";

const FloatingMoney = () => {
  const [moneyItems, setMoneyItems] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  
  useEffect(() => {
    const items = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        transform: `rotate(${Math.random() * 30 - 15}deg)`,
      },
    }));
    
    setMoneyItems(items);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {moneyItems.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-money"
          style={item.style}
        >
          <div className="text-lazycash-green text-4xl">$</div>
        </div>
      ))}
    </div>
  );
};

export default FloatingMoney;
