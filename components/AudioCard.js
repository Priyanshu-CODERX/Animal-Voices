import * as React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { Audio } from 'expo-av'

export default function CustomCard({ text, onPress, bg, soundUrl }) {

    const [sound, setSound] = React.useState()

    async function playSound() {
        try {
            console.log("Loading Sound!")
            const { sound } = await Audio.Sound.createAsync(
                { uri: soundUrl }
            );
            setSound(sound);

            console.log("Play Sound!")
            await sound.playAsync()
        } catch (e) {
            Alert.alert(
                "Audio Not Playing",
                "Audio not playing/loading due to server problems",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <TouchableOpacity onPress={playSound}>
            <View backgroundColor={bg} style={styles.btn}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 6,
        // backgroundColor: "#212121",
        width: 250,
        margin: 5,
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 30,
        textAlign: "center",
    }
})