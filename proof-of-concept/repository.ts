import * as MsSql from "mssql";
import { Squirrel } from "./squirrel-model";
import "reflect-metadata";

export class Repository<T extends Object> {

  private _connection: MsSql.Connection;

  constructor(connection: MsSql.Connection) {
    this._connection = connection;
  }

  public async getAll(): Promise<Array<T>> {
    let allRequest = new MsSql.Request(this._connection);

    return new Promise<Array<T>>((resolve, reject) => {

      let tableName = Reflect.getMetadata("dray:table", Squirrel);
      console.log("getting all squirrels");


      allRequest.query<any>("select * from " + tableName).then((data: Array<any>) => {
        console.log("got data");
        let squirrels: Array<T> = [];

        data.forEach(d => {
          let squirrel = new Squirrel();
          squirrels.push(<any>squirrel);
          let keys = Reflect.getMetadata("dray:columns", squirrel);

          keys.forEach((key: any) => {
            squirrel[key.modelPropertyName] = d[key.columnName];
          });
        });

        resolve(squirrels);
      });

    });

  }
}
