import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import * as colors from "./colors"

const styles = StyleSheet.create({
    feedContainer: {
        backgroundColor: colors.lightgrey,
        width: "100%",
        borderRadius: 10,
        height: "97%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
        
    },
    feedNotification: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: colors.white,
        marginHorizontal: "2%",
        marginTop: "2%",
        borderRadius: 5,
    },
    payment: {
        width: "60%",
        display: "flex",
        justifyContent: "center"
    },
    paymentTitle: {
        color: colors.black,
        fontSize: 18,
        marginLeft: "5%",
    },
    paymentAmount: {
        color: colors.black,
        fontSize: 30,
        fontWeight: "500",
        marginLeft: "5%",
    },
    paymentButton: {
        display: "flex",
        marginVertical: "20%",
        backgroundColor: colors.lightblue,
        borderRadius: 10,
    },
    paymentButtonText: {
        color: colors.black,
        fontSize: 30,
        fontWeight: "500",
        margin: "5%",
        display: "flex",
        alignSelf: "center"
    },
})

const DATA = [
    {
        title: "Hampus Grimskär",
        amount: 1000,
        id: "0",
    },
    {
        title: "SECOND ITEM",
        amount: 482,
        id: "1",
    },
    {
        title: "THIRD ITEM",
        amount: 699,
        id: "2",
    },
    {
        title: "THIRD ITEM",
        amount: 699,
        id: "3",
    },
    {
        title: "THIRD ITEM",
        amount: 699,
        id: "4",
    },
    {
        title: "THIRD ITEM",
        amount: 699,
        id: "5",
    },
]

type PaymentProps = {title: string, amount:number};

const Payment = ({title, amount}:PaymentProps) => (
    <View style={styles.feedNotification}>
        <View style={styles.payment}>
            <Text style={styles.paymentAmount}>{amount} kr</Text>
            <Text style={styles.paymentTitle}>{title}</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonText}>Betala</Text>
            </TouchableOpacity>
        </View>
    </View>
);

function PaymentFeed() {
    return(
        <View style={styles.feedContainer}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Payment title={item.title} amount={item.amount} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
}

export default PaymentFeed;