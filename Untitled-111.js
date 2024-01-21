let givotnie = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];

const index = givotnie.indexOf("cat");
if (index > -1) {
  givotnie.splice(index, 1);
}

alert(givotnie);
