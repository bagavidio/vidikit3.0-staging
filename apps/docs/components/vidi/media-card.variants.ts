import { cva } from "class-variance-authority";

export const mediaCardVariants = cva(
  "group/media-card relative overflow-hidden rounded-xl bg-card text-card-foreground ring-1 ring-foreground/10 transition-all select-none",
  {
    variants: {
      variant: {
        horizontal: "flex flex-col",
        list: "grid grid-cols-[auto_1fr] items-start",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      // Horizontal — thumbnail on top, info below
      { variant: "horizontal", size: "sm", className: "w-[180px]" },
      { variant: "horizontal", size: "md", className: "w-[280px]" },
      { variant: "horizontal", size: "lg", className: "w-[380px]" },
      // List — thumbnail left, info right
      { variant: "list", size: "sm", className: "[&_[data-slot=media-card-thumbnail]]:w-[120px]" },
      { variant: "list", size: "md", className: "[&_[data-slot=media-card-thumbnail]]:w-[180px]" },
      { variant: "list", size: "lg", className: "[&_[data-slot=media-card-thumbnail]]:w-[240px]" },
    ],
    defaultVariants: {
      variant: "horizontal",
      size: "md",
    },
  }
);
