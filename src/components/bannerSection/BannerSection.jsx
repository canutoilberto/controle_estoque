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
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
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
