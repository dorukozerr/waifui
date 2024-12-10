import { ReactNode } from "react";
import { View, ScrollView } from "tamagui";
import { Header } from "@/components/layout/header";

export const Layout = ({ children }: { children: ReactNode }) => (
  <View bc="$blue11" h="100%">
    <Header />
    <ScrollView bg="$pink5">{children}</ScrollView>
  </View>
);
