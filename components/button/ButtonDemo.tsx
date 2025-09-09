// "use client";

// import React, { ReactElement,ReactNode, useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

// const buttonStyles = {
//   default: {
//     defaultColor: "",
//     // success: "bg-green-600 hover:bg-green-500",
//     green: "bg-success hover:bg-success-hover",
//     // warning: "bg-yellow-600 hover:bg-yellow-500",
//     yellow: "bg-warning hover:bg-warning-hover",
//   },
//   secondary: {
//     defaultColor: "",
//     green: "bg-green-50 hover:bg-green-100 text-green-600",
//     yellow: "bg-yellow-50 hover:bg-yellow-100 text-yellow-600",
//   },
//   outline: {
//     defaultColor: "",
//     green: "text-green-600 hover:text-green-600 border-green-200 hover:border-green-300 hover:bg-green-50",
//     yellow:
//       "text-yellow-600 hover:text-yellow-600 border-yellow-200 hover:border-yellow-300 hover:bg-yellow-50",
//   },
//   ghost: {
//     defaultColor: "",
//     green: "text-green-600 hover:text-green-600 hover:bg-green-50",
//     yellow: "text-yellow-600 hover:text-yellow-600 hover:bg-yellow-50",
//   },
//   destructive: {
//     defaultColor: "",
//     green: "bg-red-600 hover:bg-red-500",
//     yellow: "bg-orange-600 hover:bg-orange-500",
//   },
//   link: {
//     defaultColor: "",
//     green: "text-green-600 hover:text-green-500",
//     yellow: "text-yellow-600 hover:text-yellow-500",
//   },
// };

// type ButtonDemoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   className?: string;
//   text?: ReactNode;
//   variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
//   size?: "default" | "sm" | "lg" | "icon" | null | undefined;
//   icon?: ReactElement | null;
//   startIcon?: ReactElement | null;
//   endIcon?: ReactElement | null;
//   color?: "defaultColor" | "green" | "yellow";
//   disabled?: boolean;
//   onClick?: () => void;
// };

// export function ButtonDemo({
//   className = "",
//   text = "",
//   variant = "default",
//   size = "default",
//   icon = null,
//   startIcon = null,
//   endIcon = null,
//   color = "defaultColor",
//   disabled = false,
//   onClick = () => {},
//   ...props
// }: ButtonDemoProps) {
//   const [buttonStyle, setButtonStyle] = useState("");

//   useEffect(() => {
//     const buttonStylesVariant = buttonStyles[variant];

//     if (buttonStylesVariant) {
//       const buttonStylesColor = buttonStylesVariant[color];
//       setButtonStyle(buttonStylesColor);
//     }
//   }, []);

//   return (
//     <Button
//       variant={variant}
//       size={size}
//       disabled={disabled}
//       className={`${className} ${buttonStyle}`}
//       onClick={onClick}
//       {...props}
//     >
//       {startIcon}
//       {text}
//       {icon}
//       {endIcon}
//       {/* <div data-type={type}></div> */}
//     </Button>
//   );
// }
