import {AsyncStorage} from "react-native";
import async_storage_keys from "../const/constants";


export const setItemInAsyncStorage = async (key, value) => {
    await AsyncStorage.setItem(key, value);
};

export const getItemFromAsyncStorage = async (key) => {
    return await AsyncStorage.getItem(key);
};

