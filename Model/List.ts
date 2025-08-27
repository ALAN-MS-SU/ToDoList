'use client';
import { Item } from './Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
export class List {
  private Data: Item[] = [];
  public async Get(): Promise<Item[]> {
    this.Data = (await JSON.parse(<string>await AsyncStorage.getItem('Data'))) ?? [];
    return this.Data;
  }

  public async Add(Item: Item) {
    this.Data.push(Item);
    await AsyncStorage.setItem('Data', JSON.stringify(this.Data));
  }
  public async Delete({ ID }: Pick<Item, 'ID'>) {
    this.Data = this.Data.filter((Item) => {
      if (Item.ID !== ID) return Item;
    });
    await AsyncStorage.setItem('Data', JSON.stringify(this.Data));
  }
  public async Update({
    ID,
    Name,
    Status,
  }: Partial<Pick<Item, 'Name' | 'Status'>> & Pick<Item, 'ID'>) {
    this.Data = await this.Get();
    this.Data.forEach(async (Item) => {
      if (Item.ID === ID) {
        if (!Name && !Status) return;
        if (Name) {
          Item.Name = Name;
        }
        if (Status) {
          Item.Status = Status;
        }
        AsyncStorage.setItem('Data', JSON.stringify(this.Data));
        this.Data = await this.Get();
      }
    });
  }
}
