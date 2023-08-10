import { View, Text } from "react-native";
import styles from "./styles";

function CTA(): JSX.Element {
  return (
    <View style={styles.ctaContainerView}>
      <Text style={styles.ctaText}>Boilerplate</Text>
    </View>
  );
}

export default CTA;
