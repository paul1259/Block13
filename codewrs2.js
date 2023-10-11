function removeEveryOther(arr){
    const b = [];
    for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {b.push(arr[i])};
  }
  return b;
}
  
  const arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];
  const arr1 = [removeEveryOther(arr)];
  console.log (arr);
  console.log (arr1);