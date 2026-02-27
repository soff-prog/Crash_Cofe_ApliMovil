import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { stylesGlobal } from '../../../theme/appTheme';
import { Cart } from '../ProductosScreens';
import Icon from '@expo/vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    cart: Cart[];
    hiddenModal: () => void;
    onBuy: () => void;
}

export const ModalCartComponent = ({ isVisible, cart, hiddenModal, onBuy }: Props) => {

    const { width } = useWindowDimensions();

    const totalPay = (): number =>
        cart.reduce((sum, p) => sum + p.total, 0);

    const handleBuy = () => {
        hiddenModal();
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>

                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.80
                }}>

                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>
                            Mi Carrito
                        </Text>

                        <View style={stylesGlobal.iconCard}>
                            <Icon
                                name='cancel'
                                size={23}
                                color='#451D1C'
                                onPress={hiddenModal}
                            />
                        </View>
                    </View>

                    {cart.length === 0 ? (
                        <View style={{ alignItems: 'center', marginVertical: 20 }}>
                            <Text style={{ fontSize: 16, color: '#777' }}>
                                Tu carrito está vacío
                            </Text>
                        </View>
                    ) : (
                        <>
                            <View style={stylesGlobal.headerTable}>
                                <Text style={stylesGlobal.headerTextTable}>
                                    Producto
                                </Text>

                                <View style={stylesGlobal.headerDescription}>
                                    <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>
                                        Pre.
                                    </Text>
                                    <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>
                                        Cant.
                                    </Text>
                                    <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>
                                        Total
                                    </Text>
                                </View>
                            </View>

                            <FlatList
                                data={cart}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={stylesGlobal.headerTable}>
                                        <Text>{item.name}</Text>

                                        <View style={stylesGlobal.headerDescription}>
                                            <Text style={{ marginLeft: 10 }}>
                                                ${item.price.toFixed(2)}
                                            </Text>

                                            <Text style={{ marginHorizontal: 25 }}>
                                                {item.quantity}
                                            </Text>

                                            <Text style={{ marginHorizontal: 10 }}>
                                                ${item.total.toFixed(2)}
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            />

                            {/*Total*/}
                            <View style={stylesGlobal.containerTotalPay}>
                                <Text style={stylesGlobal.textTotalPay}>
                                    Total pagar: ${totalPay().toFixed(2)}
                                </Text>
                            </View>

                            {/*Boton*/}
                            <TouchableOpacity
                                style={stylesGlobal.button}
                                onPress={onBuy}
                            >
                                <Text style={stylesGlobal.buttonText}>
                                    Comprar
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}

                </View>
            </View>
        </Modal>
    );
};