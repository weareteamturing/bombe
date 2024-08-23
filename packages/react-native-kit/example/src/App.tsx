import { useAppState } from '@teamturing/react-native-kit';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const appState = useAppState();
  return (
    <View style={styles.container}>
      <Text>Result: {appState}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
