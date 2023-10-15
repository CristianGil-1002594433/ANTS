import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Picker } from 'react-native';

function GastoHormigaScreen() {
    const [monto, setMonto] = useState('');
    const [descripcion, setDescripcion] = useState(''); // Estado para la descripción
    const [otros, setOtros] = useState(''); // Estado para el campo "otros"

    const handleAceptarIngreso = () => {
        // Lógica del gasto hormiga
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Monto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa el monto en pesos colombianos"
                onChangeText={(text) => setMonto(text)}
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
            <Button title="Aceptar Ingreso" color="#0F0E0E" onPress={handleAceptarIngreso} />
        </View>
    );
}

export default GastoHormigaScreen;

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
