function paramsToSQLSet (data) {
  return Object.entries(data)
    .map(([key, value]) => {
        if (value === null) return `SET @${key} = NULL`;
        if (typeof value === "string") return `SET @${key} = '${value}'`;
        return `SET @${key} = ${value}`;
    })
    .join(";\n") + ';'} ;