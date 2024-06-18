import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import { LuGaugeCircle, LuUser, LuCookie } from "react-icons/lu";
import classes from "./cardSection.module.css";

const mockdata = [
  {
    title: "Performance excelente",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: <LuGaugeCircle size={50} color="#ed8f03" />,
  },
  {
    title: "Focado em Privacidade",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: <LuUser size={50} color="#ed8f03" />,
  },
  {
    title: "Sem elemntos de terceiros",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: <LuCookie size={50} color="#ed8f03" />,
  },
];

const CardSectionComponent = () => {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <div>{feature.icon}</div>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl" my="xl">
      <Group justify="center">
        <Badge
          variant="gradient"
          gradient={{ from: "#ffb75e", to: "#ed8f03" }}
          style={{ color: "black" }}
          size="lg"
        >
          Melhor Solução
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default CardSectionComponent;
