import { ReactNode } from "react";
import { View, ScrollView } from "tamagui";
import { Header } from "@/components/layout/header";

export const Layout = ({ children }: { children: ReactNode }) => (
  <View bc="$color4" h="100%">
    <Header />
    <ScrollView>{children}</ScrollView>
  </View>
);
