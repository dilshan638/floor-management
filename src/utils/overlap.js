
export function isOverlapping(table1, table2) {
  return !(
    table1.left + 100 < table2.left ||
    table1.left > table2.left + 100 ||
    table1.top + 100 < table2.top ||
    table1.top > table2.top + 100
  );
}
