import {
  TextInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Textarea,
} from "@mantine/core";
import classes from "./contactPage.module.css";

const ContactPage = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Seu contato é muito importante
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Envie-nos uma mensagem
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Nome" placeholder="Seu nome" required />
        <TextInput
          label="Email"
          placeholder="hello@email.com"
          required
          mt="md"
        />
        <Textarea
          label="Sua mensagem"
          description="Escreva uma mensagem"
          placeholder="Mensagem"
          mt="md"
        />
        <Button
          fullWidth
          mt="xl"
          variant="gradient"
          gradient={{ from: "#ffb75e", to: "#ed8f03" }}
          style={{ color: "black" }}
        >
          Enviar
        </Button>
      </Paper>
    </Container>
  );
};

export default ContactPage;
