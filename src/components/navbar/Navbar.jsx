import {
  Button,
  Burger,
  Drawer,
  rem,
  Box,
  Group,
  Divider,
  ScrollArea,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-scroll";
import classes from "./navbar.module.css";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="/" className={classes.logo}>
            <h3>ESTOQUE+</h3>
          </a>
          <Group h="100%" gap={0} ml={100} visibleFrom="sm">
            <a href="/" className={classes.links}>
              Início
            </a>
            <Link
              to="about"
              smooth={true}
              duration={800}
              className={classes.links}
            >
              Sobre nós
            </Link>
            <Link
              to="plans"
              smooth={true}
              duration={800}
              className={classes.links}
            >
              Planos
            </Link>
          </Group>
          <Group visibleFrom="sm">
            <Button variant="default">
              <Anchor
                component="a"
                href="/login"
                underline="never"
                className={classes.anchor}
              >
                Log in
              </Anchor>
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "#ffb75e", to: "#ed8f03" }}
              style={{ color: "black" }}
            >
              <Anchor
                component="a"
                href="/contact"
                underline="never"
                className={classes.anchor}
              >
                Contato
              </Anchor>
            </Button>
            <ToggleTheme />
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Controle de Estoque"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <div className={classes.btn}>
            <ToggleTheme />
          </div>
          <Divider my="sm" />
          <a href="/" className={classes.links}>
            Início
          </a>
          <a href="#" className={classes.links}>
            Sobre nós
          </a>
          <a href="#" className={classes.links}>
            Planos
          </a>
          <Divider my="sm" />
          <Group>
            <div className={classes.btn}>
              <Button variant="default">
                <Anchor component="a" href="/login" className={classes.anchor}>
                  Log in
                </Anchor>
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: "#ffb75e", to: "#ed8f03" }}
                style={{ color: "black" }}
              >
                <Anchor
                  component="a"
                  href="/contact"
                  className={classes.anchor}
                >
                  Contato
                </Anchor>
              </Button>
            </div>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
