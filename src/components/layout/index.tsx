import { ReactNode } from "react";
import { View, Main } from "tamagui";
import { Header } from "@/components/layout/header";

export const Layout = ({ children }: { children: ReactNode }) => (
  <View bc="$background" h="100%" dsp="flex" fd="column">
    <Header />
    <Main f={1}>{children}</Main>
  </View>
);
