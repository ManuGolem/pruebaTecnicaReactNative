import { View, Text, FlatList, Image, Pressable, TextInput } from "react-native";
import styles from "../styles/productoStyle";
import { useEffect, useState } from "react";
export default function ProductsScreen({ route, navigation }) {
    const [productos, setProductos] = useState();
    const [copiaProductos, setCopia] = useState([]);
    const bienvenida = "Welcome, ".concat(" ", route.params.usuario.name.firstname);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                setCopia(data);
            });
    }, []);
    function mostrarProductos({ item }) {
        function handleDetalle() {
            navigation.navigate("DetallesProductos", { item });
        }
        return (
            <Pressable onPress={handleDetalle}>
                <View style={styles.frame}>
                    <Image style={styles.image} source={{ uri: item.image }} resizeMode="contain" />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.precio}>${item.price}</Text>
                </View>
            </Pressable>
        );
    }
    function realizarBusqueda(texto) {
        if (texto === "") {
            setProductos(copiaProductos);
        } else {
            const productosFiltrados = copiaProductos.filter((elem) => elem.title.toLowerCase().includes(texto.toLowerCase()));
            setProductos(productosFiltrados);
        }
    }
    return (
        <View style={styles.page}>
            <Text style={styles.welcome}>{bienvenida}</Text>
            <View style={styles.busqueda}>
                <Image style={styles.imagen} resizeMode="cover" source={require("../assets/searchIcon.png")} />
                <TextInput placeholder="Search here" onChangeText={(texto) => realizarBusqueda(texto)} />
            </View>
            {productos ? <FlatList style={styles.productos} data={productos} renderItem={mostrarProductos} keyExtractor={(item) => item.id} /> : null}
        </View>
    );
}
