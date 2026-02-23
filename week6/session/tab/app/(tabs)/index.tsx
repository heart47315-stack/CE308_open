import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MarketScreen() {
    const products = [
        { id: 1, name: 'Premium Coffee Bean', price: 450 },
        { id: 2, name: 'Green Tea Powder', price: 250 },
        { id: 3, name: 'Oat Milk 1L', price: 119 },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productList}>
                {products.map((product) => (
                <TouchableOpacity 
                    key={product.id} 
                    style={styles.productCard}
                >
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image" size={40} color="#E5E7EB" />
                    </View>
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>฿{product.price}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    productList: {
        padding: 16,
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    productImageContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: '#FF5722',
        fontWeight: 'bold',
    },
});
