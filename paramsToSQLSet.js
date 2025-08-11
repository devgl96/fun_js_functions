function paramsToSQLSet (dataFake) {
  return Object.entries(dataFake)
    .map(([key, value]) => {
        if (value === null) return `SET @${key} = NULL`;
        if (typeof value === "string") return `SET @${key} = '${value}'`;
        return `SET @${key} = ${value}`;
    })
    .join(";\n") + ';'} ;

const dataFake = {
    "id": 2,
    "user": "John",
    "last_name": "Wick",
    "filter": "company"
};


paramsToSQLSet(dataFake)
