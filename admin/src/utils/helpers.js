export function filterToQueryBuilder(...fields) {
  return (q) => {
    if (!q) {
      return {};
    }
    const idField = fields.find((filed) => filed === 'id');
    const queryNumber = Number(q);
    if (idField && !Number.isNaN(queryNumber)) {
      return [{ 'id||$eq': queryNumber }];
    }
    return fields
      .filter((field) => field !== 'id')
      .map((field) => ({ [`${field}||$contL`]: q }));
  };
}
