/**
 * @vidikit/ui-react/tv — TV / 10-foot Platform Exports
 * ─────────────────────────────────────────────────────────────
 * Thin re-exports that lock in the `platform="tv"` variant.
 * Web/Mobile apps import from "@vidikit/ui-react" and never see TV ring styles.
 * TV React app imports from "@vidikit/ui-react/tv".
 *
 * @example
 *   import { TVButton, TVItem } from "@vidikit/ui-react/tv"
 */

import * as React from "react";
import { Button, type ButtonProps } from "./design-system/button";
import { Item, type ItemProps } from "./design-system/item";

/** Button variant locked to TV platform (3px focus ring + scale). */
export const TVButton = (props: Omit<ButtonProps, "platform">) =>
  React.createElement(Button, { ...props, platform: "tv" as never });

/** Item variant locked to TV platform (oversized focus ring + scale). */
export const TVItem = (props: Omit<ItemProps, "platform">) =>
  React.createElement(Item, { ...props, platform: "tv" as never });

TVButton.displayName = "TVButton";
TVItem.displayName = "TVItem";
