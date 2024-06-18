import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { LuSun, LuMoon } from "react-icons/lu";
import cx from "clsx";
import classes from "./toggleTheme.module.css";

const ToggleTheme = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="gradient"
      gradient={{ from: "#ffb75e", to: "#ed8f03" }}
      size="lg"
      style={{ color: "black" }}
      aria-label="Toggle color scheme"
    >
      <LuSun className={cx(classes.icon, classes.light)} />
      <LuMoon className={cx(classes.icon, classes.dark)} />
    </ActionIcon>
  );
};

export default ToggleTheme;
