import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS

function PresupuestoMensualScreen() {
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState(null); // Estado para la fecha
    const [descripcion, setDescripcion] = useState('');

    const handleAceptarIngreso = () => {
        // Lógica de ingreso de presupuesto mensual
        console.log("Datos cargados")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Presupuesto Mensual</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa el presupuesto mensual en pesos colombianos"
                onChangeText={(text) => setMonto(text)}
                value={monto}
                keyboardType="numeric"
            />
            <Text style={styles.text}>Fecha</Text>
            <DatePicker
                style={styles.datePicker} // Establece un estilo específico para DatePicker
                selected={fecha}
                onChange={(date) => setFecha(date)}
                dateFormat="yyyy-MM"
                showMonthYearPicker
            />
            <Text style={styles.text}>Descripción</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese una descripción o propósito para el mes"
                onChangeText={(text) => setDescripcion(text)}
                value={descripcion}
            />
            <Button title="Aceptar Ingreso" color="#0F0E0E" onPress={handleAceptarIngreso} />
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
    datePicker: {
        width: '80%', // Ajusta el ancho para que coincida con los TextInput
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
});
