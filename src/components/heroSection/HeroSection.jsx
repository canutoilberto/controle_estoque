import { Container, Title, Text, Button } from "@mantine/core";
import { Link } from "react-scroll";
import classes from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={classes.container}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Sua{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#ffb75e", to: "#ed8f03" }}
              >
                Melhor Solução
              </Text>{" "}
              em organização de estoque
            </Title>
            <Text className={classes.description} mt={30}>
              Diga adeus à desorganização: Tenha uma visão completa do seu
              estoque em tempo real, com informações precisas sobre entrada,
              saída e níveis de estoque mínimo.
            </Text>
            <Link to="plans" smooth={true} duration={800}>
              <Button
                variant="gradient"
                gradient={{ from: "#ffb75e", to: "#ed8f03" }}
                size="xl"
                className={classes.control}
                mt={40}
                style={{ color: "black" }}
              >
                Nos Conheça!
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
