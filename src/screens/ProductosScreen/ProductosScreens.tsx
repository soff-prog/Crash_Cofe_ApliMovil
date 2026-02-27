import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { stylesGlobal } from '../../theme/appTheme';
import { CardProductComponent } from './components/CardProductComponent';
import { ModalCartComponent } from './components/ModalCartComponent';
import Icon from '@expo/vector-icons/MaterialIcons';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const ProductosScreen = () => {

    const hotDrinks: Product[] = [
        { id: 1, name: 'Café Americano', price: 1.50, stock: 10, pathImage: 'https://i.postimg.cc/63XyLLwN/cafe_Americano.png' },
        { id: 2, name: 'Cappuccino', price: 2.00, stock: 8, pathImage: 'https://i.postimg.cc/BvDjKwW0/cappuccino.webp' },
        { id: 3, name: 'Latte', price: 2.20, stock: 9, pathImage: 'https://i.postimg.cc/cHSrMMZK/latte.png' },
        { id: 4, name: 'Mochaccino', price: 2.50, stock: 6, pathImage: 'https://i.postimg.cc/4dgmbbZn/mochaccino.png' },
        { id: 5, name: 'Chocolate Caliente', price: 2.00, stock: 7, pathImage: 'https://i.postimg.cc/4dgmbbZY/chocolate_Caliente.png' },
        { id: 6, name: 'Matcha Caliente', price: 1.30, stock: 12, pathImage: 'https://i.postimg.cc/pTHpYYxj/match_Caliente.png' },
    ];

    const coldDrinks: Product[] = [
        { id: 7, name: 'Frappé', price: 3.00, stock: 5, pathImage: 'https://i.postimg.cc/0NpNQMmq/frappe.png' },
        { id: 8, name: 'Bubble Tea', price: 1.75, stock: 6, pathImage: 'https://i.postimg.cc/6QdQ32RK/bubble_Tea.webp' },
        { id: 9, name: 'Iced Latte', price: 2.80, stock: 4, pathImage: 'https://i.postimg.cc/5twt0Yvb/iced_Latte.png' },
        { id: 10, name: 'Limonada', price: 1.50, stock: 10, pathImage: 'https://i.postimg.cc/hG9GjzxR/limonada.png' },
        { id: 11, name: 'Smoothie de Fresa', price: 3.20, stock: 3, pathImage: 'https://i.postimg.cc/xCn1bfyD/smoothie_Fresa.png' },
        { id: 12, name: 'Matcha Fría', price: 3.50, stock: 5, pathImage: 'https://i.postimg.cc/cH0L8xMS/matcha_Fria.png' },
    ];

    const desserts: Product[] = [
        { id: 13, name: 'Cheesecake', price: 2.50, stock: 4, pathImage: 'https://i.postimg.cc/GmmNtZyp/cheesecake.png' },
        { id: 14, name: 'Brownie', price: 1.80, stock: 7, pathImage: 'https://i.postimg.cc/P55cJBwP/brownie.png' },
        { id: 15, name: 'Tiramisú', price: 2.70, stock: 5, pathImage: 'https://i.postimg.cc/Bn7zKMTq/tiramisu.png' },
        { id: 16, name: 'Cupcake', price: 1.50, stock: 9, pathImage: 'https://i.postimg.cc/FHHqz2LH/cupcake.png' },
        { id: 17, name: 'Galletas', price: 1.20, stock: 15, pathImage: 'https://i.postimg.cc/t44fJLxC/galletas.jpg' },
        { id: 18, name: 'Croissant', price: 1.90, stock: 8, pathImage: 'https://i.postimg.cc/VkkTv3C1/croissant.png' },
    ];

    const [productsState, setProductsState] = useState<Product[]>([
        ...hotDrinks,
        ...coldDrinks,
        ...desserts
    ]);

    const [cart, setCart] = useState<Cart[]>([]);
    const [showModal, setShowModal] = useState(false);

    const hiddenModal = () => setShowModal(!showModal);

    const handleBuy = () => {
    alert("Compra realizada");
    setCart([]);        // vaciar carrito
    setShowModal(false); // cerrar modal
};

    const changeStockProduct = (id: number, quantity: number) => {
    const product = productsState.find(p => p.id === id);
    if (!product) return;

    // ❌ Verificar si hay suficiente stock
    if (product.stock < quantity) {
        alert('No hay suficiente stock de este producto');
        return;
    }

    //Actualizamos el stock en la lista de productos
    const updatedProducts = productsState.map(p =>
        p.id === id ? { ...p, stock: p.stock - quantity } : p
    );
    setProductsState(updatedProducts);

    //Revisamos si ya está en el carrito
    const existProduct = cart.find(item => item.id === id);

    if (existProduct) {
        const updatedCart = cart.map(item =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + quantity,
                    total: (item.quantity + quantity) * item.price
                }
                : item
        );
        setCart(updatedCart);
    } else {
        const newItem: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
            total: product.price * quantity
        };
        setCart([...cart, newItem]);
    }
};

    const renderCategory = (title: string, data: Product[]) => (
        <View style={{ marginBottom: 25, width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#451D1C', marginBottom: 10 }}>
                {title}
            </Text>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <CardProductComponent
                        item={item}
                        changeStockProduct={changeStockProduct}
                    />
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: 15
                }}
            />
        </View>
    );

    return (
        <View style={[stylesGlobal.container, { flex: 1 }]}>

            {/* HEADER */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                marginBottom: 10,
                alignItems: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#451D1C' }}>
                    Productos
                </Text>

                {/* ICONO CARRITO CON CONTADOR */}
                <View style={{ position: 'relative' }}>
                    <Icon
                        name='shopping-cart'
                        size={32}
                        color='#451D1C'
                        onPress={() => {
                            if (cart.length === 0) {
                                alert("No existen productos en el carrito");
                            } else {
                                setShowModal(true   );
        }
    }}
/>

                    {cart.length > 0 && (
                        <View style={{
                            position: 'absolute',
                            right: -6,
                            top: -6,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            width: 18,
                            height: 18,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>
                                {cart.length}
                            </Text>
                        </View>
                    )}
                </View>
            </View>

            {/* LISTA */}
            <FlatList
                data={[0]}
                keyExtractor={item => item.toString()}
                renderItem={null}
                ListHeaderComponent={
                    <>
                        {renderCategory('Bebidas Calientes', hotDrinks)}
                        {renderCategory('Bebidas Frías', coldDrinks)}
                        {renderCategory('Postres', desserts)}
                    </>
                }
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            <ModalCartComponent 
                isVisible={showModal}
                cart={cart}
                hiddenModal={hiddenModal}
                onBuy={handleBuy}
            />
        </View>
    );
};