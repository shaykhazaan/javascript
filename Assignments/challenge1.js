const arr = ["apple", "orange", "grapes", "banana", "pomegrenate", "kiwi"];

for (const [i, el] of arr.entries()) {
  console.log(`${i + 1}: ${el}`);
}

const user = [];
console.log(user[0]?.name ?? "Name does not exist");
