import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/detalleStyles";
import { useState } from "react";
import BotonesCantidad from "../componentes/BotonesCantidad";
export default function ProductDetailScreen({ route }) {
    const { image, title, price, category, description } = route.params.item;
    const [cantidad, setCantidad] = useState(1);
    function agregarCarrito() {
        alert("Producto agregado al carrito");
    }
    return (
        <View style={styles.page}>
            <View style={styles.item}>
                <Text style={styles.category}>Category: {category}</Text>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
                <Text style={styles.precio}>${price}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.compra}>
                    <BotonesCantidad cantidad={cantidad} setCantidad={setCantidad} styles={styles} />
                    <Pressable style={styles.carrito} onPress={agregarCarrito}>
                        <Image style={{ height: 20, width: 20 }} resizeMode="contain" source={require("../assets/carrito.png")} />
                        <Text>Agregar al carrito</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
