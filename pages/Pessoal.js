import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Image } from 'expo-image';


export default function PessoalScreen() {

    const openInstagram = () => {
        Linking.openURL('https://www.instagram.com/imlaurinhaaa/?next=%2Fimlaurinhaaa%2F');
    };

    const openLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/laura-ferreira-violla-a526b12b1/');
    };

    const openGitHub = () => {
        Linking.openURL('https://github.com/imlaurinhaaa');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Laura Ferreira Violla</Text>
            <Image style={styles.img} source={require('../img/laura.jpg')} />
            <Text style={styles.emojis}>🌷✨🤍</Text>
            <Text style={styles.texto}>Sou aluna da instituição SENAI e realizo o curso Desenvolvimento de Sistemas</Text>
            <Text style={styles.texto}>Estou no 3° ano do curso e tenho 17 anos</Text>
            <Text style={styles.subtitle}>Redes sociais</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
                <TouchableOpacity onPress={openInstagram} >
                    <Image style={styles.social} source={require('../img/insta.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openLinkedIn} >
                <Image style={styles.social} source={require('../img/linkedin.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openGitHub} >
                <Image style={styles.social} source={require('../img/github.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        gap: 20,
        backgroundColor: "#F6EEE0",
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
        color: "#821D30",
        fontWeight: "bold"
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: "center",
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        color: "#821D30",
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
        width: 80,
        height: 80,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
    },
});