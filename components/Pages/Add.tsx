import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Item, List } from '@/Model';
import uuid from 'react-native-uuid';
import { useRouter } from 'expo-router';
export default function Add() {
  const router = useRouter();
  const list = new List();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      Name: '',
    },
  });
  return (
    <View className="flex flex-col items-center justify-between">
      <View className="flex h-screen w-[80%] flex-col items-center justify-center gap-y-[80px]">
        <Controller
          name="Name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} placeholder="Nome da tarefa" Label="Tarefa" />
          )}
        />
        <Button
          className="w-[100px] bg-green-500 hover:bg-green-700"
          onPress={handleSubmit(async (FormData) => {
            if (FormData.Name === '' && !FormData.Name) return;
            await list.Add(new Item(uuid.v4(), FormData.Name, 0));
            router.push('/');
          })}>
          ADD
        </Button>
      </View>
    </View>
  );
}
