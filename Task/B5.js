//for được sử dụng để lặp lại trên tất cả các enumerable properties của một Object, 
//bao gồm enumerable properties được kế thừa.
for (let prop in ['a', 'b', 'c']) 
  console.log(prop);            // 0, 1, 2 (array indexes)
for (let prop in 'str') 
  console.log(prop);            // 0, 1, 2 (string indexes)

//forEach là một phương thức của Array prototype, cho phép bạn lặp lại các phần tử của một mảng.
//forEach () chỉ lặp qua các mảng, nó có thể truy cập cả giá trị và chỉ mục của từng phần tử trong khi lặp.
['a', 'b', 'c'].forEach(
    val => console.log(val)     // a, b, c (array values)
);
['a', 'b', 'c'].forEach(
    (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
);