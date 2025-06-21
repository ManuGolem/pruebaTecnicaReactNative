import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/loginStyles";
export default function LoginScreen({ navigation }) {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    const [mensaje, setMsj] = useState();
    async function handleLogin() {
        const response = await fetch("https://fakestoreapi.com/users");
        const users = await response.json();
        const usuario = users.find((usuario) => usuario.username === user);
        if (usuario && pass === usuario.password) {
            navigation.navigate("Productos", { usuario });
        } else {
            setMsj("Usuario o contraseña incorrecta");
            setTimeout(() => {
                setMsj();
            }, 2000);
        }
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="User" value={user} onChangeText={setUser}></TextInput>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={pass} onChangeText={setPass}></TextInput>
                <Button onPress={handleLogin} title="Login"></Button>
                {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
            </View>
        </View>
    );
}
