import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (
    key, 
    item, 
    onError = () => {}
) => {
    try {
        await AsyncStorage.setItem(
            key,
            item,
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
        return item;
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
        await AsyncStorage.mergeItem(
            key,
            item,
            onError
        )
    } catch (e) {
        onError();
    }
}