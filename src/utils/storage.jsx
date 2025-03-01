import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, data) => {
  try {
    const value = JSON.stringify(data);
    await AsyncStorage.setItem(`@homecalculatorapp/${key}`, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const contenido = await AsyncStorage.getItem(`@homecalculatorapp/${key}`);
    return contenido != null ? JSON.parse(contenido) : [];
  } catch (e) {
    // saving error
  }
};
