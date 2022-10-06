import { useSpring, animated } from "react-spring";

export default function PageTransision({ children }) {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.05 },
    config: { duration: 1250 },
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
