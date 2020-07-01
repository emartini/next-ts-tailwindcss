import React from "react";
import cx from "clsx";

const TYPOGRAPHY_VARIANTS = [
  "headline",
  "title1",
  "title2",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "body3",
  "button",
  "caption",
  "overline",
] as const;

const TYPOGRAPHY_WEIGHTS = ["normal", "semibold", "bold"] as const;

type TypographyVariant = typeof TYPOGRAPHY_VARIANTS[number];
type TypographyWeight = typeof TYPOGRAPHY_WEIGHTS[number];

interface TypographyProps {
  component?: string;
  className?: string;
  variant?: TypographyVariant;
  color?: string;
  weight?: TypographyWeight;
  underline?: boolean;
  uppercase?: boolean;
}

const variants = {
  headline: "text-5xl leading-tight",
  title1: "text-4xl leading-tight",
  title2: "text-3xl leading-tight",
  subtitle1: "text-2xl leading-tight",
  subtitle2: "text-xl leading-tight",
  body1: "text-base leading-normal",
  body2: "text-sm leading-normal",
  body3: "text-lg leading-relaxed",
  button: "text-sm leading-4 tracking-wider",
  caption: "text-xs leading-6 inline",
  overline: "text-xs leading-6 tracking-wide",
};

const variantToElement: Record<TypographyVariant, string> = {
  headline: "h1",
  title1: "h2",
  title2: "h3",
  subtitle1: "h4",
  subtitle2: "h5",
  body1: "p",
  body2: "p",
  body3: "p",
  button: "span",
  caption: "caption",
  overline: "span",
};

const fontWeight = TYPOGRAPHY_WEIGHTS.reduce(
  (acc, curr) => ({ ...acc, [curr]: curr }),
  {} as Record<TypographyWeight, TypographyWeight>
);

const textTransformationVariants = {
  button: {
    uppercase: true,
  },
  overline: {
    uppercase: true,
  },
};

// Default font weight by variant name
const fontWeightVariants: Record<TypographyVariant, TypographyWeight> = {
  headline: fontWeight.bold,
  title1: fontWeight.bold,
  title2: fontWeight.bold,
  subtitle1: fontWeight.normal,
  subtitle2: fontWeight.semibold,
  body1: fontWeight.normal,
  body2: fontWeight.normal,
  body3: fontWeight.normal,
  button: fontWeight.semibold,
  caption: fontWeight.normal,
  overline: fontWeight.semibold,
};

const getFontWeight = (weight: TypographyWeight = fontWeight.normal) => ({
  "font-normal": weight === fontWeight.normal,
  "font-bold": weight === fontWeight.bold,
  "font-semibold": weight === fontWeight.semibold,
});

const getFontWeightByVariant = (variant: TypographyVariant) =>
  getFontWeight(fontWeightVariants[variant]);

const getFontWeightClass = (
  weight: TypographyWeight,
  variant: TypographyVariant
) => (weight ? getFontWeight(weight) : getFontWeightByVariant(variant));

export const Typography: React.FC<TypographyProps> = ({
  component,
  className,
  variant,
  color,
  children,
  weight,
  underline = false,
  uppercase,
  ...props
}) => {
  const fontWeight = getFontWeightClass(weight, variant);

  const textDecoration = {
    underline,
  };

  const textTransform = {
    uppercase:
      uppercase !== undefined
        ? uppercase
        : textTransformationVariants[variant]?.uppercase,
  };

  const cssClasses = cx(
    className,
    variants[variant],
    color,
    fontWeight,
    textTransform,
    textDecoration
  );
  const element = component || variantToElement[variant] || "p";

  return React.createElement(
    element,
    { ...props, className: cssClasses },
    children
  );
};

Typography.defaultProps = {
  className: "",
  variant: "body1",
  color: "text-primary-black",
}