function jsonToSQLUnion(data) {
  const allKeys = Array.from(
    new Set(data.flatMap(obj => Object.keys(obj)))
  );

  return data.map((item, index) => {
    const values = allKeys.map((key) => {
      const val = item[key];
      if (val === null || val === undefined) return 'NULL';
      if (typeof val === 'string') return `'${val}'`;
      return val;
    });

    // Cabeçalho (primeiro SELECT) com alias
    if (index === 0) {
      const aliased = values.map((val, i) => `${val} AS ${allKeys[i]}`);
      return `SELECT ${aliased.join(', ')}`;
    }

    // Demais SELECTs sem alias
    return `SELECT ${values.join(', ')}`;
  }).join('\nUNION\n') + ';';
}