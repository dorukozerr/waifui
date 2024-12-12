"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const setThemePreference = async (newTheme: "light" | "dark") => {
  const { set } = cookies();

  set({
    name: "themePreference",
    value: newTheme,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  revalidatePath("/");
  revalidatePath("/docs");
  revalidatePath("/components");
};
