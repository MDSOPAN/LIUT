const toJsonf = (res: any) => {
  return JSON.parse(
    JSON.stringify(
      res,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    )
  );
};

export default toJsonf;
