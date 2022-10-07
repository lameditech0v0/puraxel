import { useTransition } from "react";
import { useSpring, animated } from "react-spring";

export default function PageTransision({ children }) {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.05 },

    config: { duration: 1250 },
  });
  return <animated.div style={styles}>{children}</animated.div>;
}

function Page_Transision({ children }) {
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div>
      {transitions((style, i) => (
        <animated.div>{children}</animated.div>
      ))}
    </div>
  );
}
