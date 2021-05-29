import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

// react-native Async storage
export const asyncWrite = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const asyncRead = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // read error
  }
};

export const asyncRemove = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

// other misc
export const timeAgo = time => {
  return moment(time).fromNow();
};

export const generateName = (f, m, l) => {
  if (!f || !l) {
    return 'Name unavailable';
  }

  if (m) {
    return f + ' ' + m + ' ' + l;
  } else {
    return f + ' ' + l;
  }
};

export const parseDate = date => {
  return moment(date).format('DD MMM YYYY');
};

export const parseDateTime = date => {
  return moment(date).format('DD MMM YYYY h:mm A');
};

export const isExpired = date => {
  return moment(date).diff(moment(new Date())) > 0 ? true : false;
};

export const isLoggedIn = async () => {
  const token = await asyncRead('token');

  if (token) {
    return true;
  } else {
    return false;
  }
};
