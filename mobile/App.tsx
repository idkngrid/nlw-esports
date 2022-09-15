import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Nativeee!!!!</Text>
      <Button text="Botão 1" />
      <Button text="Botão 2" />
      <Button text="Botão 3" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  text: String;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
