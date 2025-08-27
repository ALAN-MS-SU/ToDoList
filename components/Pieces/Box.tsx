import { Item, List } from '@/Model';
import { View } from 'react-native';
import { Text } from '../ui/text';
import { Button } from '../ui/button';
import { Check, Trash2 } from 'lucide-react-native';
import { useState } from 'react';

export function Box({
  Item,
  List,
  Update,
}: {
  Item: Item;
  List: List;
  Update: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  const { Name, ID, Status } = Item;
  if (Status == 0)
    return (
      <View
        className={`flex h-[100px] w-full flex-row items-center justify-around border-b-[2px] border-t-[2px] border-primary`}>
        <Text className="font-bold">{Name}</Text>
        <Button
          onPress={async () => {
           // List.Update({ ID, Status: 1 });
           // Update(await List.Get());
          }}
          className="h-[50px] w-[75px] bg-green-500 hover:bg-green-700">
          <Check className="h-full w-full text-white" />
        </Button>
        <Button
          onPress={async () => {
           // List.Delete({ ID });
           // Update(await List.Get());
          }}
          className="h-[50px] w-[75px] bg-red-500 hover:bg-red-700">
          <Trash2 className="h-full w-full text-white" />
        </Button>
      </View>
    );
  if (Status == 1)
    return (
      <View
        className={`flex h-[100px] w-full flex-row items-center justify-around border-b-[2px] border-t-[2px] border-primary bg-green-300`}>
        <Text className="font-bold">{Name}</Text>
      </View>
    );
}
