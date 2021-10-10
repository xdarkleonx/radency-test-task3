export const getDates = (notes) => {
  return notes.map((item) => {
    const dates = item.content.match(/\d{0,31}(\D)\d{0,12}\1\d{4}/g) || [];
    return dates.length > 1
      ? { ...item, dates }
      : item;
  })
}