export default function orderByProps(obj, order) {
  // преобразуем объект в массив ключей и установим правильную сортировку
  const arrA = Object.keys(obj).sort();
  const arrB = arrA.filter((el) => !order.includes(el));
  const arrC = [...order, ...arrB];

  const result = [];

  // преобразуем массив отсортированных ключей в объект
  arrC.forEach((element) => {
    result.push({ key: element, value: obj[element] });
  });

  return result;
}
