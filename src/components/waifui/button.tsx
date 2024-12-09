"use client";

import { forwardRef, ReactNode } from "react";
import { Button as TamaguiButton, ButtonProps } from "tamagui";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, ...props }, ref) => (
    <TamaguiButton ref={ref} {...props}>
      {children}
    </TamaguiButton>
  )
);

Button.displayName = "Button";
