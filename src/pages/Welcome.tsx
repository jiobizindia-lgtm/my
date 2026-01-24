import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center px-4">
      {/* Main Content */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
          Welcome to the New World of Education
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Where You get access of India's best teacher content Completely free without any ad
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12">
          Our Courses will updated Soon
        </p>

        <Button 
          onClick={handleContinue}
          size="lg"
          className="gradient-primary text-lg px-8 py-6"
        >
          Continue
        </Button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 w-full">
        <p className="text-center text-5xl md:text-6xl font-bold text-muted-foreground/20">
          Made By Prashant Sharma
        </p>
      </div>
    </div>
  );
};

export default Welcome;
