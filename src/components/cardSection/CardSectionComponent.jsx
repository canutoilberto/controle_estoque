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
      "Alcance novos patamares de eficiência e produtividade com nosso sistema de controle de estoque avançado e de fácil utilização",
    icon: <LuGaugeCircle size={50} color="#ed8f03" />,
  },
  {
    title: "Focado em Privacidade",
    description:
      "Proteja suas informações confidenciais com nossa tecnologia de ponta, garantindo segurança total e privacidade absoluta em todas as etapas da sua gestão",
    icon: <LuUser size={50} color="#ed8f03" />,
  },
  {
    title: "Sem elemntos de terceiros",
    description:
      "Confie em uma solução totalmente independente, desenvolvida internamente, que oferece máxima segurança e controle sem a interferências",
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
        Domine Seu Estoque: Controle, Organize e Otimize!
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Monitore seus produtos em tempo real, reduza desperdícios, maximize seus
        lucros e simplifique a gestão do seu estoque com a nossa ferramenta
        intuitiva e eficiente.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default CardSectionComponent;
