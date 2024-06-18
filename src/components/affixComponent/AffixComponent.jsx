import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, Container } from "@mantine/core";
import { FaArrowUp } from "react-icons/fa6";
import classes from "./affixComponent.module.css";

const AffixComponent = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Container className={classes.wrapper}>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              variant="gradient"
              gradient={{ from: "#ffb75e", to: "#ed8f03" }}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              p={12}
              radius="xl"
            >
              <FaArrowUp />
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
  );
};

export default AffixComponent;
