import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';


export default function PessoalScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Laura Ferreira Violla</Text>
            <Image source={require('../assets/IMG_20231002_155028.jpg')} />
            <Text style={styles.emojis}>🌷✨🤍</Text>
            <Text style={styles.texto}>Sou aluna da instituição SENAI e realizo o curso Desenvolvimento de Sistemas</Text>
            <Text style={styles.texto}>Estou no 3° ano do curso e tenho 17 anos</Text>
            <Text style={styles.social}>LinkedIn: Laura Ferreira Violla</Text>
            <Text style={styles.social}>GitHub: imlaurinhaaa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "#EDEEF1",
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
        color: "#FF0080",
        fontWeight: "bold"
    },
    emojis: {
        fontSize: 18,
        textAlign: "center",
    },
    texto: {
        fontSize: 15,
        textAlign: "center",
    },
    social: {
        fontSize: 15,
        color: "#FB6B90",
        fontWeight: "bold"
    }
});