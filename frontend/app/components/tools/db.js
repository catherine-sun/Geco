import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (
    key, 
    item, 
    onError = () => {}
) => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(item),
            onError
        )
    } catch (e) {
        onError();
    }
}

export const getData = async (
    key, 
    onError = () => {}
) => {
    try {
        const item = await AsyncStorage.getItem(key, onError)
        return JSON.parse(item);
    } catch (e) {
        onError();
    }
}

export const updateData = async (
    key,
    item, 
    onError = () => {}
) => {
    try {
        console.log('inside async storage', await AsyncStorage.getItem("item"));

        await AsyncStorage.mergeItem(
            key,
            JSON.stringify(item),
            onError
        )
    } catch (e) {
        console.log('err', e);
        onError();
    }
}

export const deleteData = async (
    key, 
    onError = () => {}
) => {
    try {
        await AsyncStorage.removeItem(
            key,
            onError
        )
    } catch (e) {
        onError();
    }
}