import React from 'react';
import { Text,TouchableOpacity,View } from 'react-native';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';

export default function Index() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <section
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'space-between',
      padding:'1rem',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(to top, navy, rgba(226, 230, 250, 1))',
    }}
  >
    <View className='items-center w-80 h-20 justify-between p-3'>
      <Text style={{ color: 'rgba(43, 77, 210, 1)', fontSize: 20, fontWeight:'bold', fontFamily:'serif' }}>Compra Inteligente</Text>
      <Text className='text-[rgba(43,7git7,210,1)] text-xs font-bold font-serif'>Economize tempo e dinheiro nas suas compras!</Text>
    </View>


    <View className='border-2 w-screen h-96 justify-between items-center'>
      <View className='border-2 h-96 w-screen items-center'>
        <View className='bg-[rgba(40, 82, 173, 0.16)] w-[120vw] h-[105vh] rounded-full absolute top-0 border-2'>
        </View>
        <View className='bg-blue-400 w-[120vw] h-[105vh] rounded-full absolute top-20 border-2'>
        </View>
      </View>
      <TouchableOpacity
      className='bg-blue-500 w-60 h-10 rounded-md flex items-center justify-center absolute bottom-2'>
        <Text className="font-bold text-lg text-white font-serif">Entrar</Text>
      </TouchableOpacity>
    </View>

    </section>
  );
}