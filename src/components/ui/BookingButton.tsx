
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

type BookingButtonProps = {
  size?: "sm" | "default" | "lg";
  className?: string;
};

const BookingButton = ({ size = "default", className }: BookingButtonProps) => {
  const buttonSizeClasses = {
    sm: "text-xs px-4 py-2",
    default: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  return (
    <Link
      to="/booking"
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium text-white bg-brand-gold hover:bg-opacity-90 transition-all duration-300 ease-in-out shadow-sm disabled:opacity-50 disabled:pointer-events-none",
        buttonSizeClasses[size],
        className
      )}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Now
    </Link>
  );
};

export default BookingButton;
