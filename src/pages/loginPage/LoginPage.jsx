import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Bem-vindo ao seu Estoque!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Ainda não possui uma conta?{" "}
        <Anchor size="sm" component="button">
          Crie uma conta
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="hello@email.com" required />
        <PasswordInput label="Senha" placeholder="Sua senha" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Lembrar de mim" />
          <Anchor component="button" size="sm">
            Esqueceu sua senha?
          </Anchor>
        </Group>
        <Button
          fullWidth
          mt="xl"
          variant="gradient"
          gradient={{ from: "#ffb75e", to: "#ed8f03" }}
          style={{ color: "black" }}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
