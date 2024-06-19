import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import classes from "./aboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <Container name="plans" size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Somos um <span className={classes.highlight}>moderno</span> Sistema{" "}
            <br /> de controle de estoque
          </Title>
          <Text c="dimmed" mt={30}>
            Temos o plano ideal para o seu negócio, independente do ramo de
            atuação – Nossa solução vai se encaixar perfeitamente e você terá a
            tranquilidade de contar conosco sempre que precisar
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <FaCheckCircle
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Plano Starter</b> – controle de estoque, com banco de dados
              integrado, até 1GB de storage - R$59,90/mês
            </List.Item>
            <List.Item>
              <b>Plano Open</b> – controle de estoque, com banco de dados
              integrado, até 10GB de storage + CMS personalizado - R$109,90/mês
            </List.Item>
            <List.Item>
              <b>Plano Gold</b> – controle de estoque, com banco de dados
              integrado, até 20GB de storage + CMS personalizado e integração
              total dos serviços do seu negócio - R$199,90/mês
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              variant="default"
              size="md"
              className={classes.control}
            >
              Nos Contate
            </Button>
            <Link to="newsletter" smooth={true} duration={800}>
              <Button
                variant="gradient"
                gradient={{ from: "#ffb75e", to: "#ed8f03" }}
                style={{ color: "black" }}
                radius="xl"
                size="md"
                className={classes.control}
              >
                Inscreva-se
              </Button>
            </Link>
          </Group>
        </div>
        <Image src="./mailing.svg" className={classes.image} />
      </div>
    </Container>
  );
};

export default AboutUsSection;
