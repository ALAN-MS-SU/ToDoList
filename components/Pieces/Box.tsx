import { Item, List as newList } from '@/Model';
import { View } from 'react-native';
import { Text } from '../ui/text';
import { Button } from '../ui/button';
import { Check, Trash2 } from 'lucide-react-native';
export function Box({
  Item,
  List,
  Update,
}: {
  Item: Item;
  List: newList;
  Update: React.Dispatch<React.SetStateAction<Item[] | undefined>>;
}) {
  const { Name, ID, Status } = Item;
  if (Status == 0)
    return (
      <View
        className={`mt-[5px] flex h-[100px] w-full flex-row items-center justify-around border-b-[2px] border-t-[2px] border-primary p-[10px]`}>
        <Text className=" w-[80px] text-sm text-center font-bold">
          {Name.length <= 10 ? Name : `${Name.slice(0, 6)}...`}
        </Text>
        <Button
          onPress={async () => {
            await List.Update({ ID, Status: 1 });
            const Data = await List.Get();
            Update(Data);
          }}
          className="h-[50px] w-[75px] bg-green-500 hover:bg-green-700">
          <Check color={'white'} className="h-full w-full" />
        </Button>
        <Button
          onPress={async () => {
            await List.Delete({ ID });
            const Data = await List.Get();
            Update(Data);
          }}
          className="h-[50px] w-[75px] bg-red-500 hover:bg-red-700">
          <Trash2 color={'white'} className="h-full w-full" />
        </Button>
      </View>
    );
  if (Status == 1)
    return (
      <View
        className={`mt-[5px] flex h-[100px] w-full flex-row items-center justify-around border-b-[2px] border-t-[2px] border-primary bg-green-500`}>
        <Text className="w-[160px] text-center text-sm font-bold text-white">
          {Name.length <= 15 ? Name : `${Name.slice(0, 11)}...`}
        </Text>
        <Button
          onPress={async () => {
            await List.Delete({ ID });
            const Data = await List.Get();
            Update(Data);
          }}
          className="h-[50px] w-[75px] bg-red-500 hover:bg-red-700">
          <Trash2 color={'white'} className="h-full w-full" />
        </Button>
      </View>
    );
}
