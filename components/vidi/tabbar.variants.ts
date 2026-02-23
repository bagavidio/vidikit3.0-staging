import { cva } from "class-variance-authority";

export const tabbarVariants = cva(
  "fixed bottom-0 inset-x-0 z-50 flex items-center justify-around border-t border-border bg-background/80 backdrop-blur-md px-2 pb-[env(safe-area-inset-bottom)] lg:hidden",
  {
    variants: {
      size: {
        default: "h-14",
        compact: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export const tabbarItemVariants = cva(
  "relative flex flex-col items-center justify-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors select-none",
  {
    variants: {
      active: {
        true: "text-primary",
        false: "text-muted-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
