"use client";

import { forwardRef, ReactNode } from "react";
import { Button as TamaguiButton, ButtonProps, Text } from "tamagui";

interface CustomButtonProps extends Omit<ButtonProps, "variant" | "size"> {
  children: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outlined"
    | "secondary"
    | "ghost"
    | "link"
    | undefined;
  size?: "sm" | "md" | "base" | "lg" | undefined;
}

//        default: "bg-primary text-primary-foreground hover:bg-primary/90",
//        destructive:
//          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//        outline:
//          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//        secondary:
//          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//        ghost: "hover:bg-accent hover:text-accent-foreground",
//        link: "text-primary underline-offset-4 hover:underline",

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, variant = "default", size = "base", ...props }, ref) => (
    <TamaguiButton
      ref={ref}
      p="$0"
      {...(variant === "default"
        ? {
            bc: "$primary",
            hoverStyle: {
              opacity: 0.9,
              bc: "$primary",
            },
            pressStyle: {
              opacity: 0.6,
              bc: "$primary",
            },
          }
        : variant === "destructive"
        ? {
            bc: "$destructive",
            hoverStyle: {
              opacity: 0.9,
              bc: "$destructive",
            },
            pressStyle: {
              opacity: 0.6,
              bc: "$destructive",
            },
          }
        : variant === "outlined"
        ? {
            bc: "$background",
            bw: 1,
            boc: "$border",
            hoverStyle: {
              opacity: 0.9,
              bc: "$accent",
              boc: "$border",
            },
            pressStyle: {
              opacity: 0.6,
              bc: "$accent",
              boc: "$border",
            },
          }
        : variant === "secondary"
        ? {
            bc: "$secondary",
            hoverStyle: {
              opacity: 0.9,
              bc: "$secondary",
            },
            pressStyle: {
              opacity: 0.6,
              bc: "$secondary",
            },
          }
        : variant === "ghost"
        ? {
            hoverStyle: {
              opacity: 0.9,
              bc: "$accent",
            },
            pressStyle: {
              opacity: 0.6,
              bc: "$accent",
            },
          }
        : variant === "link"
        ? {
            bc: "$background",
            hoverStyle: {
              opacity: 0.9,
              bc: "$background",
            },
            pressStyle: {
              opacity: 0.6,
              bc: "$background",
            },
          }
        : {})}
      {...(size === "sm"
        ? {}
        : size === "base"
        ? {}
        : size === "md"
        ? {}
        : size === "lg"
        ? {}
        : {})}
      {...props}
    >
      <Text
        w="100%"
        h="100%"
        dsp="flex"
        jc="center"
        ai="center"
        p="$4"
        gap="$2"
        {...(variant === "default"
          ? { col: "$primaryForeground" }
          : variant === "destructive"
          ? { col: "$destructiveForeground" }
          : variant === "outlined"
          ? { hoverStyle: { col: "$accentForeground" } }
          : variant === "secondary"
          ? { col: "$secondaryForeground" }
          : variant === "ghost"
          ? { hoverStyle: { col: "$accentForeground" } }
          : variant === "link"
          ? { hoverStyle: { textDecorationLine: "underline" } }
          : {})}
        {...(size === "sm"
          ? {}
          : size === "base"
          ? {}
          : size === "md"
          ? {}
          : size === "lg"
          ? {}
          : {})}
      >
        {children}
      </Text>
    </TamaguiButton>
  )
);

Button.displayName = "Button";
