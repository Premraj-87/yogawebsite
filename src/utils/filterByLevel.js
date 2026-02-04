export const filterByLevel = (data, level) => {
  if (!level) return data;
  return data.filter(item => item.level === level);
};
