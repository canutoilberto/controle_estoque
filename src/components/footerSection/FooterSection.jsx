import { Container, Group, Anchor } from "@mantine/core";
import classes from "./footerSection.module.css";

const links = [
  { link: "#", label: "Início" },
  { link: "#", label: "Sobre nós" },
  { link: "#", label: "Contato" },
];

const FooterSection = () => {
  const items = links.map((link) => (
    <Anchor
      component="a"
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(e) => e.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <h2>LOGO</h2>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
};

export default FooterSection;
