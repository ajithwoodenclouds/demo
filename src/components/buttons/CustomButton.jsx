import React from "react";

export default function CustomButton({
  text = "Click Me", // Default button text
  onClick, // Function to be called on button click
  style = "", // Additional styles for button
  type = "button", // Type of button (submit, button, reset)
}) {
  return (
    <button
      type={type}
      className={`bg-[#0E3281] text-[#F9FBFC]  font-normal ${style}`} // Add dynamic styles
      onClick={onClick}
    >
      {text}
    </button>
  );
}
