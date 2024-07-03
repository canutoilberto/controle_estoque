import {
  Switch,
  useMantineTheme,
  rem,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { LuSun, LuMoon } from "react-icons/lu";

const SwitchTheme = () => {
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const sunIcon = (
    <LuSun
      style={{ width: rem(16), height: rem(16) }}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <LuMoon
      style={{ width: rem(16), height: rem(16) }}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      size="lg"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  );
};

export default SwitchTheme;
