// didnt figure out how to exist more effectively
const ERR = 'not equal';

const obj1 = { age: 10, person: { name: 'hi', nested: { hello: 20 } } };
const obj2 = { age: 10, person: { name: 'hi', nested: { hello: 20 } } };
const obj3 = { age: 10, person: { name: 'hi', nested: { hello: 21 } } };

const isDeepEqual = (a, b) => {
  const entriesA = Object.entries(a);
  const entriesB = Object.entries(b);

  if (entriesA.length !== entriesB.length) throw new Error(ERR);

  entriesA.forEach((entryA, idx) => {
    const [keyA, valueA] = entryA;
    const [keyB, valueB] = entriesB[idx];

    if (typeof valueA === 'object' && typeof valueB !== 'object')
      throw new Error(ERR);
    if (typeof valueA !== 'object' && typeof valueB === 'object')
      throw new Error(ERR);

    if (typeof valueA === 'object' && typeof valueB === 'object') {
      if (keyA !== keyB) throw new Error(ERR);

      return isDeepEqual(valueA, valueB);
    }

    if (keyA !== keyB) throw new Error(ERR);
    if (valueA !== valueB) throw new Error(ERR);
  });
};

console.log(isDeepEqual(obj1, obj2));
console.log(isDeepEqual(obj1, obj3));
