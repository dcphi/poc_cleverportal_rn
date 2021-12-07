import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '@react-keycloak/native';
import { StyleSheet } from 'react-native';

const Login = () => {
  const { keycloak } = useKeycloak();
  console.log(keycloak?.refreshToken);

  return (
    <View style={styles.container}>
      <Text>{`Welcome ${keycloak?.authenticated} - ${keycloak?.tokenParsed} ${keycloak?.token}!`}</Text>
      <Button onPress={() => keycloak?.login()} title="Login" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
