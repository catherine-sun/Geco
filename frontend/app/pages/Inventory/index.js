import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import InventoryItem from '../../components/inventoryItem/inventoryItem';
import * as tools from '../../components/tools/db';
import { useEffect, useState } from 'react';
import React from 'react';
import DisplayButtons from '../../components/DisplayButtons';
// import { styles } from './styles';


const Inventory = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function storeData() {
            console.log('storing data...');
            await tools.storeData("items", [
                { name: "Apple", recommended: "Compost", trashedAt: "", date: "" },
                { name: "Battery", recommended: "Trash", trashedAt: "", date: "" },
                { name: "Oranges", recommended: "Compost", trashedAt: "", date: "" },
                { name: "Camera", recommended: "Trash", trashedAt: "", date: "" },
                { name: "Mattress", recommended: "Recycle", trashedAt: "", date: "" },
                { name: "Phone", recommended: "Trash", trashedAt: "", date: "" },
                { name: "Juice box", recommended: "Compost", trashedAt: "", date: "" },
                { name: "TV", recommended: "Trash", trashedAt: "", date: "" },
                { name: "Charger", recommended: "Compost", trashedAt: "", date: "" },
                { name: "Granola", recommended: "Trash", trashedAt: "", date: "" }
            ])
            setItems(await tools.getData("items"));
        }
        storeData();

    }, []);

    const deleteItem = async (itemTitle) => {
        setItems(items.filter(function (item) {
            return item.name !== itemTitle
        }));
    };

    const approveItem = async (itemTitle, trashedAt) => {
        const datetime = new Date();
        const updatedArr = await tools.getData('items');

        for (let i = 0; i < updatedArr.length; i++) {
            if (updatedArr[i].name === itemTitle) {
                updatedArr[i].trashedAt = trashedAt;
                updatedArr[i].date = datetime;
                break;
            }
        }
        await tools.deleteData("items");
        await tools.storeData("items", updatedArr);
        await deleteItem(itemTitle);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Image style={{height: 50, width: 100, objectFit: "contain"}} source={require('../../../assets/geco_logo.jpg')}/>
                </View>
                <Text style={{ marginTop:10,fontSize: 28, fontWeight: "bold" }}>Inventory</Text>
                <ScrollView style={{ width: '100%', overflowY: 'scroll', boxSizing: 'content-box' }}>
                    {/* <Text>How much gar-bahj have you scanned that contributes to the death of this planet?</Text> */}
                    {/* {console.log('items inside index:', items)} */}

                    {items.map((item, index) => {
                        return (
                            <View key={index} style={{ marginHorizontal: 20 }}>
                                <InventoryItem title={item.name} recommended={item.recommended} approveItem={approveItem} />
                            </View>
                        )
                    })}
                    <View style={{height: 80}}></View>
                </ScrollView>
            </View>
            <DisplayButtons currentPath='Inventory' />

        </SafeAreaView>
    )

}
export default Inventory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
});