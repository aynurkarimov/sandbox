const deepCopy = (obj) => {
  const newObj = {};

  Object.entries(obj).forEach((entry) => {
    const [key, value] = entry;

    if (typeof value === 'object') {
      const subObject = deepCopy(value);
      newObj[key] = subObject;

      return;
    }

    newObj[key] = value;
  });

  return newObj;
};

const original = { person: { name: 'bob', nested: { number: 10 } } };
const copiedObj = deepCopy(original);

copiedObj.person.nested.number = 20;

console.log(original.person.nested.number, 'original');
console.log(copiedObj.person.nested.number, 'copied');