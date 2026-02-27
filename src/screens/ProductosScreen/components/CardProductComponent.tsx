import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ModalProductComponent } from './ModalProductComponent';
import { Product } from '../ProductosScreens';

interface Props {
    item: Product;
    changeStockProduct: (id: number, quantity: number) => void;
}

export const CardProductComponent = ({ item, changeStockProduct }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const hiddenModal = (): void => {
        setShowModal(!showModal);
    };

    return (
        <>
            <View style={stylesGlobal.containerCard}>

                <TouchableOpacity onPress={hiddenModal}>
                    <Image
                        source={{ uri: item.pathImage }}
                        style={stylesGlobal.imageCard}
                    />
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Text style={stylesGlobal.titleCard}>{item.name}</Text>
                    <Text style={stylesGlobal.textPrice}>
                        Precio: ${item.price.toFixed(2)}
                    </Text>

                    {/* Si no hay stock */}
                    {/*  && es y */}
                    {item.stock === 0 && (
                        <Text style={stylesGlobal.textStock}>
                            Producto agotado
                        </Text>
                    )}
                </View>

                {/* Botón solo aparece si hay stock */}
                {item.stock > 0 && (
                    <TouchableOpacity
                        style={stylesGlobal.buttonQuantity}
                        onPress={hiddenModal}
                    >
                        <Icon
                            name='add-shopping-cart'
                            size={25}
                            color='#fff'
                        />
                    </TouchableOpacity>
                )}
            </View>

            <ModalProductComponent
                isVisible={showModal}
                item={item}
                hiddenModal={hiddenModal}
                changeStockProduct={changeStockProduct}
            />
        </>
    );
};