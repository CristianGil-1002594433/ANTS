import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegistrarGastoFormulario = () => {
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const registrarGasto = async () => {
    // Crea un objeto de gasto con los datos ingresados por el usuario
    const gasto = {
      id: "",
      cantidad: parseFloat(cantidad), // Asegúrate de que cantidad sea un número (float)
      descripcion: descripcion,
      id_usuario: "3cd5595f-d787-48b2-85a3-c931da0354f0",
      fecha : null,
    };

    // Realiza una solicitud POST a tu API de FastAPI para registrar el gasto
    try {
      const response = await fetch('http://localhost:8000/gasto/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gasto),
      });

      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        // El gasto se registró correctamente
        // Puedes redirigir al gasto o mostrar un mensaje de éxito
        console.log('Gasto registrado exitosamente');
      } else {
        // Maneja errores de registro aquí
        console.error('Error al registrar gasto');
      }
    } catch (error) {
      console.error('Error de red al registrar gasto:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Cantidad"
        value={cantidad}
        onChangeText={(text) => setCantidad(text)}
        keyboardType="numeric" // Esto configura el teclado en modo numérico
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
      <Button title="Registrar" onPress={registrarGasto} />
    </View>
  );
};

export default RegistrarGastoFormulario;
