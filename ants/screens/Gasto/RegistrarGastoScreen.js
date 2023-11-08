import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Picker } from 'react-native';

const RegistrarGastoFormulario = () => {
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [otro, setOtros] = useState('');

  const registrarGasto = async () => {
    // Crea un objeto de gasto con los datos ingresados por el usuario
    const gasto = {
      id: "",
      cantidad: parseFloat(cantidad), // Asegúrate de que cantidad sea un número (float)
      descripcion: descripcion,
      otro: otro,
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
    <View style={styles.container}>
        <Text style={styles.text}>Cantidad</Text>
        <TextInput
            style={styles.input}
            placeholder="Cantidad $"
            value={cantidad}
            onChangeText={(text) => setCantidad(text)}
            keyboardType="numeric" // Esto configura el teclado en modo numérico
        />
        <Text style={styles.text}>Descripción</Text>
        <Picker
                selectedValue={descripcion}
                onValueChange={(itemValue) => setDescripcion(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Transporte" value="transporte" />
                <Picker.Item label="Comida" value="comida" />
                <Picker.Item label="Otros" value="otros" />
        </Picker>
        {descripcion === 'otros' && (
                <View style={styles.otrosContainer}>
                    <Text style={styles.text}>Otro</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Especifica otra descripción"
                        onChangeText={(text) => setOtros(text)}
                        />
                        </View>
            )}
      <Button title="Registrar" onPress={registrarGasto} />
    </View>
  );
};

export default RegistrarGastoFormulario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0E0E',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    otrosContainer: { // Estilo para el View de "otros"
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
});