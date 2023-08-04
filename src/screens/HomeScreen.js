import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <Text style={styles.header}>Adziban App</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                <View style={styles.buttonContainer}>
                <Text style={styles.button}>Abeg Order chow for Here</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        color: 'teal',
        textShadowColor: 'black'
    },
    button: {
        textTransform: 'uppercase',
        color: 'whitesmoke',
        fontSize: 18
        
    },
    home: {
       backgroundColor: '#c0cbff',
       height: 700
    },
    buttonContainer: {
        marginVertical: 100,
        height: 40,
        marginHorizontal: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;