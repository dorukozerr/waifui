import {
  Dispatch,
  SetStateAction,
  JSX,
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/theme-context";

const initialState = {
  sheetState: { open: false },
  setSheetState: () => {},
  mobileMenuCategories: [
    { category: "", subCategories: [{ label: "", onPress: () => {} }] },
  ],
};

interface HeaderContextProps {
  sheetState: { open: boolean };
  setSheetState: Dispatch<SetStateAction<{ open: boolean }>>;
  mobileMenuCategories: {
    category: string;
    subCategories: { label: string | JSX.Element; onPress: () => void }[];
  }[];
}

export const HeaderContext = createContext<HeaderContextProps>(initialState);

export const HeaderContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { themeOptions } = useContext(ThemeContext);
  const { Provider } = HeaderContext;
  const [sheetState, setSheetState] = useState({ open: false });
  const { push } = useRouter();

  const onNavigate = useCallback(
    (url: string) => {
      push(url);
      setSheetState({ open: false });
    },
    [push, setSheetState]
  );

  const mobileMenuCategories = useMemo(
    () => [
      {
        category: "Theme",
        subCategories: themeOptions,
      },
      {
        category: "Docs",
        subCategories: [
          { label: "Installation", onPress: () => onNavigate("/docs") },
        ],
      },
      {
        category: "Components",
        subCategories: [
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
          { label: "Button", onPress: () => onNavigate("/components/button") },
          { label: "Sheet", onPress: () => onNavigate("/components/sheet") },
        ],
      },
    ],
    [themeOptions, onNavigate]
  );

  return (
    <Provider value={{ sheetState, setSheetState, mobileMenuCategories }}>
      {children}
    </Provider>
  );
};
