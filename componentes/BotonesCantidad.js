import React from "react";
import { View, Text, Pressable } from "react-native";
export default function BotonesCantidad({ cantidad, setCantidad, styles }) {
    return (
        <View style={styles.cantidad}>
            <Pressable style={styles.botones} onPress={() => setCantidad(cantidad - 1)}>
                <Text style={{ fontSize: 20 }}>-</Text>
            </Pressable>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>{cantidad}</Text>
            <Pressable style={styles.botones} onPress={() => setCantidad(cantidad + 1)}>
                <Text style={{ fontSize: 20 }}>+</Text>
            </Pressable>
        </View>
    );
}
