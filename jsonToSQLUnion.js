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


const dataFake = [
  {
    name: 'Grupo A-1',
    key: '100-123',
    value: 100,
  },
  {
    name: 'Grupo A-2',
    key: '100-124',
    value: 200,
  },
  {
    name: 'Grupo A-3',
    key: '100-125',
    value: 300,
  },
  {
    name: 'Grupo B-1',
    key: '200-123',
    value: 200,
  },
  {
    name: 'Grupo B-2',
    key: '200-124',
    value: 300,
  },
  {
    name: 'Grupo B-3',
    key: '200-125',
    value: 400,
  },
  {
    name: 'Grupo C-1',
    key: '300-123',
    value: 300,
  },
  {
    name: 'Grupo C-2',
    key: '300-124',
    value: 400,
  },
  {
    name: 'Grupo C-3',
    key: '300-125',
    value: 500,
  },
  {
    name: 'Grupo D-1',
    key: '400-123',
    value: 400,
  },
  {
    name: 'Grupo D-2',
    key: '400-124',
    value: 500,
  },
  {
    name: 'Grupo E-1',
    key: '278-123',
    value: 278,
  },
  {
    name: 'Grupo E-2',
    key: '278-124',
    value: 378,
  },
  {
    name: 'Grupo E-3',
    key: '278-125',
    value: 478,
  },
  {
    name: 'Grupo F-1',
    key: '189-123',
    value: 189,
  },
  {
    name: 'Grupo F-2',
    key: '189-124',
    value: 289,
  },
];

jsonToSQLUnion(dataFake)

