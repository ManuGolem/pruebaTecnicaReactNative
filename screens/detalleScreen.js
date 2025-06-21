import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/detalleStyles";
import { useState } from "react";
export default function ProductDetailScreen({ route }) {
    const { image, title, price, category, description } = route.params.item;
    const [cantidad, setCantidad] = useState(1);
    function agregarCarrito() {
        alert("Producto agregado al carrito");
    }
    return (
        <View style={styles.page}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
                <Text style={styles.precio}>${price}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.compra}>
                    <View style={styles.cantidad}>
                        <Pressable style={styles.botones} onPress={() => setCantidad(cantidad - 1)}>
                            <Text style={{ fontSize: 20 }}>-</Text>
                        </Pressable>
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{cantidad}</Text>
                        <Pressable style={styles.botones} onPress={() => setCantidad(cantidad + 1)}>
                            <Text style={{ fontSize: 20 }}>+</Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.carrito} onPress={agregarCarrito}>
                        <Image style={{ height: 20, width: 20 }} resizeMode="cover" source={require("../assets/carrito.png")} />
                        <Text>Agregar al carrito</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
