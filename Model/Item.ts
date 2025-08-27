export class Item {
  public readonly ID: string;
  public Name: string;
  public Status: number;
  constructor(ID: string, Name: string, Status: number) {
    this.ID = ID;
    this.Name = Name;
    this.Status = Status;
  }
}
