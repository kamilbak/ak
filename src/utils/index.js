export function onlyNumAndDot(string) {
  if (string.split(".").length > 2) {
    string = string.replace(/\.+$/, "");
  }
  return string.replace(/[^0-9.]/g, "");
}

export function calculateSalt(element, amount, aquariumVolumeNet) {
  const salts = [
    {
      name: "kno3",
      element: { name: "n", percentIn: "61" },
      additionalElement: { name: "k", percentIn: "38.7" },
    },
    {
      name: "kh2po4",
      element: { name: "p", percentIn: "69.8" },
      additionalElement: { name: "k", percentIn: "28.7" },
    },
    {
      name: "k2so4",
      element: { name: "k", percentIn: "44.83" },
    },
    {
      name: "microchelatFe8",
      element: { name: "fe", percentIn: "8" },
    },
    {
      name: "mgso47h2o",
      element: { name: "mg", percentIn: "9.9" },
    },
  ];
  const saltNum = salts.findIndex(i => i.element.name === element);
  const calculatedSaltAmmount =
    (amount * aquariumVolumeNet) / (salts[saltNum].element.percentIn * 10);

  return {
    saltName: salts[saltNum].name,
    missingSaltAmount: roundedToTwo(calculatedSaltAmmount),
  };
}

export function roundedToTwo(number) {
  return Math.round(number * 100) / 100;
}
