export class Item {
  public readonly ID: number;
  public Name: string;
  public Status: number;
  constructor(ID: number, Name: string, Status: number) {
    this.ID = ID;
    this.Name = Name;
    this.Status = Status;
  }
  public Update({ Name, Status }: Partial<Pick<Item, 'Name' | 'Status'>>) {
    if (Name) {
      this.Name = Name;
    }
    if (Status) {
      this.Status = Status;
    }
  }
}
