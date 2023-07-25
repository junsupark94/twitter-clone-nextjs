export default function truncateNumber(value : number) {
  let number = value.toLocaleString();
  if (value > 9999) {
    number = (value / 1000).toFixed(1).toLocaleString() + "k";
  }
  return number;
}
