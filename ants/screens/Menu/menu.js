import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function MenuScreen() {
  const navigation = useNavigation(); // Obtén la instancia de navegación

  const handleIngresarGasto = () => {
    //Logica del gasto hormiga
    navigation.navigate('GastoHormiga'); // Navega a la pantalla "GastoHormiga"
  };

  const handleAgregarPresupuesto = () => {
    //Logica del presupuesto mensual
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ingresar Gasto Hormiga" onPress={handleIngresarGasto}/>
      <View style={{ marginTop: 50 }} /> {/* Espacio entre los botones */}
      <Button title="Ingresar Presupuesto" onPress={handleAgregarPresupuesto}/>
    </View>
  );
}

export default MenuScreen;
