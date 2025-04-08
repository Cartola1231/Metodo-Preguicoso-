
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-lazycash-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-anton text-lazycash-red mb-4">404</h1>
        <p className="text-xl text-lazycash-yellow mb-6">
          ISSO SIM É VACILO! ESSA PÁGINA NÃO EXISTE.
        </p>
        <Button 
          className="bg-lazycash-yellow text-black hover:bg-lazycash-yellow-hover"
          onClick={() => window.location.href = "/"}
        >
          VOLTAR PRO ESQUEMA
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
