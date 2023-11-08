import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS

function ConsultaPresupuestoMensualScreen() {
    const [fecha, setFecha] = useState(null);
    const [presupuesto, setPresupuesto] = useState(0);
    const [consultarPresupuesto, setConsultarPresupuesto] = useState(null);

    const handleConsultarPresupuesto = () => {
        const presupuestoConsultado = obtenerPresupuestoPorFecha(fecha);
        setConsultarPresupuesto(presupuestoConsultado);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Consulta de Presupuesto Mensual</Text>
            <Text style={styles.label}>Fecha</Text>
            <DatePicker
                style={styles.datePicker}
                selected={fecha}
                onChange={(date) => setFecha(date)}
                dateFormat="yyyy-MM"
                showMonthYearPicker
            />
            <Button title="Consultar" color="#63a1ff" onPress={handleConsultarPresupuesto} />
            {consultarPresupuesto && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Resumen de Presupuesto</Text>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Descripción</Text>
                        <Text style={styles.tableCell}>Cantidad</Text>
                    </View>
                    {consultarPresupuesto.detalles.map((detalle, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCell}>{detalle.descripcion}</Text>
                            <Text style={styles.tableCell}>{detalle.cantidad}</Text>
                        </View>
                    ))}
                    <Text style={styles.resultText}>Presupuesto Ingresado: {consultarPresupuesto.presupuestoIngresado}</Text>
                    <Text style={styles.resultText}>Presupuesto Actual: {consultarPresupuesto.presupuestoActual}</Text>
                </View>
            )}
        </View>
    );
}

const obtenerPresupuestoPorFecha = (fecha) => {
    // Implementa la lógica para obtener el presupuesto por la fecha
    // Supongamos que presupuestoConsultado es el resultado de la consulta
    const presupuestoIngresado = 1000;
    const gastosRegistrados = 200;
    const presupuestoActual = presupuestoIngresado - gastosRegistrados;

    // Supongamos que detalles es un array con descripciones y cantidades
    const detalles = [
        { descripcion: 'Detalle 1', cantidad: 100 },
        { descripcion: 'Detalle 2', cantidad: 150 },
        { descripcion: 'Detalle 3', cantidad: 50 },
    ];

    return { presupuestoIngresado, presupuestoActual, detalles };
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
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    resultContainer: {
        marginTop: 20,
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
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    tableCell: {
        flex: 1,
        fontSize: 16,
        color: '#0F0E0E',
    },
});

export default ConsultaPresupuestoMensualScreen;
