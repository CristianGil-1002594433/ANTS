import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS

function ConsultaPresupuestoMensualScreen() {
    const [fecha, setFecha] = useState(null); // Estado para la fecha
    const [presupuesto, setPresupuesto] = useState(0); // Estado para el presupuesto, inicialmente 0
    const [consultarPresupuesto, setConsultarPresupuesto] = useState(null); // Estado para los datos consultados

    const handleConsultarPresupuesto = () => {
        // Aquí implementa la lógica para consultar el presupuesto según la fecha seleccionada
        // Supongamos que presupuestoConsultado es el resultado de la consulta
        const presupuestoConsultado = obtenerPresupuestoPorFecha(fecha);
        setConsultarPresupuesto(presupuestoConsultado);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Consulta de Presupuesto Mensual</Text>
            <Text style={styles.text}>Fecha</Text>
            <DatePicker
                style={styles.datePicker} // Establece un estilo específico para DatePicker
                selected={fecha}
                onChange={(date) => setFecha(date)}
                dateFormat="yyyy-MM"
                showMonthYearPicker
            />
            <Button title="Consultar" color="#63a1ff" onPress={handleConsultarPresupuesto} />
            {consultarPresupuesto && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Presupuesto Ingresado: {consultarPresupuesto.presupuestoIngresado}</Text>
                    <Text style={styles.resultText}>Presupuesto Actual: {consultarPresupuesto.presupuestoActual}</Text>
                </View>
            )}
        </View>
    );
}

const obtenerPresupuestoPorFecha = (fecha) => {
    // Implementa la lógica para obtener el presupuesto por la fecha
    // Puedes consultar tu fuente de datos o realizar cálculos necesarios aquí
    const presupuestoIngresado = 1000; // Ejemplo: presupuesto ingresado
    const gastosRegistrados = 200; // Ejemplo: gastos registrados
    const presupuestoActual = presupuestoIngresado - gastosRegistrados; // Ejemplo: presupuesto actual
    return { presupuestoIngresado, presupuestoActual };
};

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
    label: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
    },
    datePicker: {
        width: '80%', // Ajusta el ancho para que coincida con los TextInput
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10, // Espacio entre el DatePicker y el botón Consultar
        backgroundColor: '#fff',
    },
    resultContainer: {
        marginTop: 20, // Espacio entre el botón Consultar y los resultados
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    resultText: {
        fontSize: 16,
        color: '#0F0E0E',
        marginBottom: 10,
    },
});

export default ConsultaPresupuestoMensualScreen;
