import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./faqSection.module.css";

const placeholderOne =
  "Para resetar sua senha, clique em 'Esqueci minha senha' na página de login. Em seguida, siga as instruções enviadas para o seu e-mail registrado. Se você não receber o e-mail, verifique sua pasta de spam ou entre em contato com o suporte ao cliente.";

const placeholderTwo =
  "Sim, você pode criar mais de uma conta, mas recomendamos utilizar apenas uma conta para melhor gerenciamento e organização das suas informações. Cada conta deve ser registrada com um e-mail único.";

const placeholderThree =
  "Para se inscrever na nossa newsletter, acesse a página inicial do nosso site e insira seu e-mail no campo de inscrição da newsletter. Você também pode se inscrever através das configurações da sua conta no nosso aplicativo.";

const placeholderFour =
  "Sim, suas informações de pagamento estão totalmente seguras. Utilizamos tecnologias de criptografia avançadas para proteger seus dados e garantir transações seguras. Além disso, seguimos rigorosamente os padrões de segurança da indústria de pagamentos.";

const FaqSection = () => {
  return (
    <div className={classes.wrapper}>
      <Container size="lg" my="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="./FAQ.svg" alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Perguntas frequentes
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  Como posso resetar minha senha?
                </Accordion.Control>
                <Accordion.Panel>{placeholderOne}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Eu posso criar mais de uma conta?
                </Accordion.Control>
                <Accordion.Panel>{placeholderTwo}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Como faço para me inscrever na newsletter?
                </Accordion.Control>
                <Accordion.Panel>{placeholderThree}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  As minhas informações de pagamento estão seguras?
                </Accordion.Control>
                <Accordion.Panel>{placeholderFour}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default FaqSection;
