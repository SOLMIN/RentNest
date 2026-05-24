export function getId(item) {
  return item?.id || item?._id;
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function addMonthsIso(months) {
  const date = new Date();
  date.setMonth(date.getMonth() + Number(months || 1));
  return date.toISOString().slice(0, 10);
}

export function normalizeCurrency(currency) {
  return currency || "INR";
}
