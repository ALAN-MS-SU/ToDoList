import { ScrollView, View } from 'react-native';
import { Item, List } from '@/Model';
import { Text } from '@/components/ui/text';
import { Button } from '../ui/button';
import { Box } from '../Pieces/Box';
import { Plus } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function Screen() {
  const list = new List();
  const [Data, SetData] = useState<Item[] | undefined>(undefined);
  useEffect(() => {
    async function Fecth() {
      const Items = await list.Get();
      SetData(Items);
    }
    Fecth();
  }, []);
  const router = useRouter();
  return (
    <View className="h-full bg-white">
      <ScrollView className="mt-[100px] h-auto w-screen">
        {Data ? (
          <>
            {Data.length >= 1 ? (
              <>
                {Data.map((Item: Item, index) => {
                  if (Item.Status == 0)
                    return <Box key={index} Item={Item} List={list} Update={SetData} />;
                })}
                {Data.map((Item: Item, index) => {
                  if (Item.Status == 1)
                    return <Box key={index} Item={Item} List={list} Update={SetData} />;
                })}
              </>
            ) : (
              <View className="flex w-full items-center justify-center">
                 <Text className="text-black text-xl">Não há registros no momento</Text> 
              </View>
            )}
          </>
        ) : (
          <View className="flex w-full flex-row items-center justify-center">
            <Text className="animate-loading text-9xl text-black">.</Text>
            <Text className="animate-loading text-9xl text-black delay-100">.</Text>
            <Text className="animate-loading text-9xl text-black delay-200">.</Text>
          </View>
        )}
      </ScrollView>
      <Button
        onPress={() => {
          router.push('/Item/add');
        }}
        className="absolute bottom-[10px] left-[35%] h-[50px] w-[30%] bg-blue-500 text-4xl hover:bg-blue-700">
        <Plus color={'white'} className="h-full w-full" />
      </Button>
    </View>
  );
}
