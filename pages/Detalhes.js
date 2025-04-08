import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[styles.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function DetalhesScreen({ route }) {

    const { textoNaoPersistido, textoPersistido } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes</Text>
            <TextoExibido titulo="Sem persistência" texto={textoNaoPersistido} cor="red" />
            <TextoExibido titulo="Persistência" texto={textoPersistido} cor="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "#EFDCF9",
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
    },
    texto: {
        fontSize: 20,
        textAlign: "center",
    },
});