/*
2024-11-29 00:46:18

MMKV Storage input/output hook

Usage:
const [storedValue, setValue, removeValue, getAllKeys] = useLocalStorage<number>("count", 0);

*/
import { useState, useEffect, useCallback } from "react";
import { MMKV } from "react-native-mmkv";

// MMKV 인스턴스 생성
const storage = new MMKV();

// 커스텀 훅 정의
export function useMMKVStorage<T>(key: string, initialValue: T) {
  // 상태 관리
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.getString(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from MMKV", error);
      return initialValue;
    }
  });

  // 저장 함수
  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        // function 에 대해서도 대응
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        storage.set(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error("Error saving to MMKV", error);
      }
    },
    [key, storedValue]
  );

  // 값 삭제 함수
  const removeValue = useCallback(() => {
    try {
      storage.delete(key); // closure
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error deleting from MMKV", error);
    }
  }, [key, initialValue]);

  // getAllKeys 함수
  const getAllKeys = useCallback(() => {
    try {
      return storage.getAllKeys();
    } catch (error) {
      console.error("Error getting all keys from MMKV", error);
    }
  }, []);

  return [storedValue, setValue, removeValue, getAllKeys] as const;
}
