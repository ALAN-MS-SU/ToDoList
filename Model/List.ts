import { Item } from './Item';

export class List {
  private Data: Item[] = [];
  constructor(...Data: Item[]) {
    if (Data) {
      this.Data = [...Data];
    }
  }
  public Add(Item: Item) {
    this.Data.push(Item);
  }
  public Delete({ ID }: Pick<Item, 'ID'>) {
    this.Data = this.Data.filter((Item) => {
      if (Item.ID !== ID) return Item;
    });
  }
}
