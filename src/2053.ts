function kthDistinct(arr: string[], k: number): string {
  const filteredArr = arr.filter(
    (item, index) =>
      arr.indexOf(item) === index && arr.lastIndexOf(item) === index
  );
  return filteredArr[k - 1] === undefined ? "" : filteredArr[k - 1];
}
