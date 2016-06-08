import { DbColumn } from "./db-column";
import { DbTable } from "./db-table";

@DbTable("Squirrel")
export class Squirrel {
  @DbColumn("Id")
  public id: string;

  @DbColumn("Name")
  public name: string;
}
