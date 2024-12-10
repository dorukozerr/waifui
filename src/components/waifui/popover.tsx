"use client";

import { ReactNode } from "react";
import { Adapt, isWeb, Popover as TamaguiPopover, PopoverProps } from "tamagui";

interface CustomPopoverProps extends PopoverProps {
  children: ReactNode;
}

export const PopoverTrigger = TamaguiPopover.Trigger;

export const Popover = ({ children, ...props }: CustomPopoverProps) => (
  <TamaguiPopover allowFlip size="$2" {...props}>
    {children}
  </TamaguiPopover>
);

export const PopoverContent = ({ children }: { children: ReactNode }) => (
  <>
    <TamaguiPopover.Content
      borderWidth={1}
      borderColor="$borderColor"
      enterStyle={{ y: -10, opacity: 0 }}
      exitStyle={{ y: -10, opacity: 0 }}
      elevate
      animation={["quick", { opacity: { overshootClamping: true } }]}
    >
      <TamaguiPopover.Arrow borderWidth={1} borderColor="$borderColor" />
      {children}
    </TamaguiPopover.Content>
    <Adapt when="sm">
      <TamaguiPopover.Sheet modal dismissOnSnapToBottom>
        <TamaguiPopover.Sheet.Overlay />
        <TamaguiPopover.Sheet.Frame>
          <TamaguiPopover.Sheet.ScrollView>
            <Adapt.Contents />
          </TamaguiPopover.Sheet.ScrollView>
        </TamaguiPopover.Sheet.Frame>
      </TamaguiPopover.Sheet>
    </Adapt>
  </>
);

export const PopoverClose = ({ children }: { children: ReactNode }) => (
  <TamaguiPopover.Close asChild>{children}</TamaguiPopover.Close>
);
