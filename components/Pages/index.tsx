import { ScrollView, View } from 'react-native';
import { Item, List } from '@/Model';
import { Button } from '../ui/button';
import { Box } from '../Pieces/Box';
import { Plus } from 'lucide-react-native';
import { Suspense, use, useEffect, useState } from 'react';
import { Text } from '../ui/text';
import { useRouter } from 'expo-router';

export default function Screen() {
  const [list, SetList] = useState(new List());
  const Data = use(list.Get());
  const router = useRouter();
  return (
    <Suspense fallback={<Text>Carregando...</Text>}>
      <View className="h-full">
        {/* <ScrollView className="mt-[200px] w-screen">
          {Data.map((Item: Item, index) => {
            if (Item.Status == 0) return <Box key={index} Item={Item} List={list} />;
          })}
          {Data.map((Item: Item, index) => {
            if (Item.Status == 1) return <Box key={index} Item={Item} List={list} />;
          })}
        </ScrollView> */}
        <Button
          onPress={() => {
            router.push('/Item/add');
          }}
          className="absolute bottom-0 h-[50px] w-[100px] bg-green-500 text-4xl text-white hover:bg-green-700">
          <Plus className="h-full w-full text-white" />
        </Button>
      </View>
    </Suspense>
  );
}
