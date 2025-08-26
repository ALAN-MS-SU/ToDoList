import { ScrollView, View } from 'react-native';
import { Item, List } from '@/Model';
import { Button } from '../ui/button';
import { Box } from '../Pieces/Box';
import { Plus } from 'lucide-react-native';
export default function Screen() {
  const list = new List();
  list.Add(new Item(1, 'SURGE', 1));
  list.Add(new Item(2, "KITSUNAMMI", 0));
  return (
    <View className="h-full">
      <ScrollView className="mt-[200px] w-screen">
        {list.Data.map(({ Name, ID, Status, Update }: Item, index) => {
          if (Status == 0)
            return <Box key={index} Name={Name} ID={ID} Status={Status} Update={Update} />;
        })}
        {list.Data.map(({ Name, ID, Status, Update }: Item, index) => {
          if (Status == 1)
            return <Box key={index} Name={Name} ID={ID} Status={Status} Update={Update} />;
        })}
      </ScrollView>
      <Button className="absolute bottom-0 h-[50px] w-[100px] bg-green-500 text-4xl text-white hover:bg-green-700">
        <Plus className="h-full w-full text-white" />
      </Button>
    </View>
  );
}
