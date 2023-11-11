import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS

function PresupuestoMensualScreen() {
    const [objetivo, setObjetivo] = useState('');
    const [fecha, setFecha] = useState(null);

    const registrarPresupuesto = async () => {
        const presupuesto = {
          id: "",
          cantidad: 0,
          id_usuario: "3cd5595f-d787-48b2-85a3-c931da0354f0",
          fecha: fecha,
          objetivo: objetivo
        };
    
        try {
          const response = await fetch('http://localhost:8000/presupuesto/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(presupuesto),
          });
    
          if (response.ok) {
            console.log('Presupuesto registrado exitosamente');
          } else {
            console.error('Error al registrar presupuesto');
          }
        } catch (error) {
          console.error('Error de red al registrar presupuesto:', error);
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Presupuesto Mensual</Text>
            <TextInput
                style={styles.input}
                placeholder="Presupuesto $"
                onChangeText={(text) => setObjetivo(text)}
                value={objetivo}
                keyboardType="numeric"
            />
            <View style={styles.datePickerContainer}>
              <Text style={styles.text}>Fecha</Text>
              <DatePicker
                style={styles.datePicker}
                selected={fecha}
                onChange={(date) => setFecha(date)}
                dateFormat="yyyy-MM"
                showMonthYearPicker
              />
            </View>

            <Button 
            title="Aceptar Ingreso" 
            color="#63a1ff" 
            onPress={registrarPresupuesto} />
        </View>
    );
}

export default PresupuestoMensualScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0E0E',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20, 
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
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
    datePicker: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#fff',
    },
    datePickerContainer: {
      alignItems: 'center',
      marginBottom: 220,
    },
    buttonSpacing: {
      marginTop: 150,
      marginBottom: 150,
    },
});
