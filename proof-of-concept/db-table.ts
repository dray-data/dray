import "reflect-metadata";

var DbTable = (tableName: string) => {
  var x = (target: any, property: string) => {
    Reflect.defineMetadata("dray:table", tableName, target);
  }

  return x;
}

export { DbTable };
