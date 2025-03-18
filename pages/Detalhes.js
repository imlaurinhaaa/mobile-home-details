import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[styles.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function DetalhesScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Persistência e Navegação</Text>

            <TextoExibido titulo="Sem persistência" cor="red" />
            <TextoExibido titulo="Texto persistido" cor="green" />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Pessoal")}
            >
                <Text style={styles.textoBotao}>Pessoal</Text>
            </TouchableOpacity>
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
    botao: {
        backgroundColor: "#C55FFC",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    textoBotao: {
        color: "white",
        fontSize: 20,
    },
});