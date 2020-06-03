import React from "react";
import cx from "clsx";
import styles from "./styles.module.css";

interface TypographyProps {
  component?: string;
  className?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "body3"
    | "button"
    | "caption"
    | "overline";
  color?: string;
}

const variants = {
  h1: "text-5xl leading-tight font-bold",
  h2: "text-4xl leading-tight font-bold",
  h3: "text-3xl leading-tight font-bold",
  h4: "text-2xl leading-tight font-bold",
  h5: "text-xl leading-tight font-bold",
  body1: "text-base leading-normal",
  body2: "text-sm leading-normal",
  body3: "text-lg leading-relaxed",
  button: "text-sm uppercase font-semibold leading-4 tracking-wider",
  caption: "text-xs leading-6 inline",
  overline: "text-xs leading-6 uppercase font-semibold tracking-wide",
};

const variantToElement = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h4",
  body1: "p",
  body2: "p",
  body3: "p",
  button: "span",
  caption: "caption",
  overline: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  component,
  className = "",
  variant = "body1",
  color = "text-primary-black",
  children,
  ...props
}) => {
  const cssClasses = cx(className, variants[variant], color);
  const element = component || variantToElement[variant] || "p";

  return React.createElement(
    element,
    { ...props, className: cssClasses },
    children
  );
};
