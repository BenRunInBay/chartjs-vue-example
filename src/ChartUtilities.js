export function datalabelformatter(value, context) {
  if (typeof value == "number") {
    let f = datalabelIndexValue(context, "format");
    if (f == "currency") return "$" + value.toFixed(1) + "m";
    else if (f == "percentage") return value.toFixed(1) + "%";
    else return value;
  } else return "";
}
export function datalabelIndexValue(context, key) {
  if (context) {
    let d = context.dataset,
      dl = d ? d.datalabels : null,
      a = dl ? dl[key] : null;
    if (Array.isArray(a) && context.dataIndex < a.length) {
      return a[context.dataIndex];
    } else return null;
  } else return null;
}
