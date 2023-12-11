/* eslint-disable radix */
const toUnixMili = (yyyymmdd: string) => {
  const [y, m, d] = yyyymmdd.split("-");
  const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  return date.getTime();
};

export default toUnixMili;
