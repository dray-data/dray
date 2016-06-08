import "reflect-metadata";

var DbColumn = (columnName: string) => {
  var x = (target: any, property: string) => {
    let value = Reflect.getMetadata("dray:columns", target);

    if (!value) {
      value = [];
    }

    value.push({
      modelPropertyName: property,
      columnName: columnName
    });

    Reflect.defineMetadata("dray:columns", value, target);
  }

  return x;
}

export { DbColumn };
