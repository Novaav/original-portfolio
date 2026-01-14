// src/components/Button.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  iconOnly?: boolean;
  ariaLabel?: string;
  className?: string;
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-xl md:text-2xl",
};

const variantClasses = {
  primary:
    "border-2 border-black text-black hover:bg-black hover:text-white",
  secondary:
    "text-black font-medium hover:text-gray-800 border-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-3xl transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black";

const iconOnlyClasses = "p-4";

const MotionLink = motion(Link);
const MotionAnchor = motion.a;

const Button = ({
  href,
  children,
  size = "md",
  variant = "primary",
  iconOnly = false,
  ariaLabel,
  className,
}: ButtonProps) => {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    iconOnly ? iconOnlyClasses : sizeClasses[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const sharedProps = {
    ...motionProps,
    className: classes,
    "aria-label": iconOnly ? ariaLabel : undefined,
  };

  if (isExternal) {
    return (
      <MotionAnchor
        {...sharedProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </MotionAnchor>
    );
  }

  return (
    <MotionLink {...sharedProps} to={href}>
      {children}
    </MotionLink>
  );
};

export default Button;
