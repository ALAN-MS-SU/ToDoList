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
    <View className="h-full">
      <ScrollView className="mt-[100px] w-screen h-auto">
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
                <Text className="text-black">Não há registros no momento</Text>
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
        className="absolute bottom-0 left-[calc(50%-50px)] h-[50px] w-[100px] bg-blue-500 text-4xl text-white hover:bg-blue-700">
        <Plus className="h-full w-full text-white" />
      </Button>
    </View>
  );
}
