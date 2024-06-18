import { Text, Title, TextInput, Button, Image } from "@mantine/core";
import classes from "./bannerSection.module.css";

const BannerSection = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Se inscreva na nossa Newsletter
        </Text>
        <Text fz="sm" c="dimmed">
          Você nunca perderá atualizações importantes de produtos, as últimas
          notícias e sessões de perguntas e respostas da comunidade. Nossa
          newsletter é semanal, enviada todo domingo.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Seu E-mail"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button
            className={classes.control}
            variant="gradient"
            gradient={{ from: "#ffb75e", to: "#ed8f03" }}
            style={{ color: "black" }}
          >
            Inscreva-se
          </Button>
        </div>
      </div>
      <Image src="./store.svg" className={classes.image} />
    </div>
  );
};

export default BannerSection;
