# 🔓 Nhúng Js từ các host vào Html
```js
<script src="https://ajax.googleapis.com/ajax/libs/d3js/5.7.0/d3.min.js"></script>

<script>
    d3.select("body").transition().delay(1000).style("background-color", "red");
</script>
```
# 🔓 Một số hàm built-in
    1. alert
    2. console
    3. confirm
    4. setTimeout
    5. setInterval
# 🔓 SetTimeout, SetInterval
## setTimeout
Delay 1 khoảng thời gian, rồi mới thực hiện hàm
```js
setTimeout(() => {console.log(Math.random())}, 5000) //delay 5s => thực hiện hàm console.log
```
## setInterval, clearInterval
Lặp lại hàm sau 1 khoảng thời gian
```js
setInterval(() => {console.log(Math.random())}, 5000) //mỗi 5s => thực hiện hàm console.log
```
```js
var i = 0
let id = setInterval(() => {
    i++;
    console.log(Math.random());
    if (i == 5) {
        clearInterval(id);
        console.log("Cleared Interval")}}, 5000);
```
# 🔓 Toán tử
    **      --> Luỹ thừa
    ??=     --> Gán khi null
    ? :     --> Toán tử 3 ngôi
    ==      --> So sánh giá trị, không so sánh kiểu 
    ===     --> So sánh giá trị và kiểu
    typeof  --> Toán tử trả về kiểu 

## ++a 
Cộng trước, return sau
```js
var a = 0;
var b = ++a;
console.log(b) // Output: 1
```
## a++ 
Return trước, cộng sau
```js
var a = 0;
var b = a++;
console.log(b) // Output: 0
```
## Example
```js
var a = 0;
var b = ++a * 2 - a-- * 2; // 1 * 2 - 1 * 2
console.log(b) // Output: 0
```
# 🔓 Biến
## var
* Tính chất
    - Có phạm vi toàn chương trình
    - Có thể khai báo lại
    - Được khởi tạo = undefined khi đẩy lên đầu chương trình

* Examples
```js
var a = 0;
console.log(a); // Output: 0
```
```js
console.log(a); // Output: undefined
var a = 0;
```
```js
var a = 0;
if (true)
{
    var a = 1;
}
console.log(a); // Output: 1
```
```js
var a = 0;
function process()
{
    a = 1;
}
process();
console.log(a); // Output: 1
```
```js
var a = 0;
function process()
{
    var a = 1;
}
process();
console.log(a); // Output: 0
```
## let
* Tính chất
    - Chỉ hiệu lực trong khối {...} mà nó được khai báo
    - Không được khai báo lại
    - Không được khởi tạo khi đẩy lên đầu chương trình

* Examples
```js
console.log(a); // Error
let a = 0;
```
```js
if (true)
{
    let a = 1;
}
console.log(a); // Error
```
```js
let a = 0;
if (true)
{
    let a = 1;
}
console.log(a); // Output: 0
```
```js
let a = 0;
console.log(a);
let a = 1; // Error
```
## const
* Tính chất
    - Như let
    - Sau khi khai báo phải gán giá trị
    - Giá trị không bị thay đổi

* Examples
```js
const a = 0;
console.log(a); // Output: 0
```
```js
const a;
a = 0;
console.log(a); // Error
```
```js
const a=0;
a = 1;
console.log(a); // Error
```
# 🔓 Kiểu dữ liệu
## Kiểu nguyên thuỷ
* undefined
* null
* num
* string
* boolean
* symbol
```js
var s1 = Symbol();
var s2 = Symbol(); // s2 khác s1
```
## Kiểu đối tượng
* Lưu nhiều biến (Như 1 dictionary)
```js
let person = {
    name: "Javascript",
    birthYear: 1995,
    isGood: true
}
```
* Truy cập đến thuộc tính
```js
let person = {
    name: "Javascript",
    birthYear: 1995,
    isGood: true
}
console.log(person.name); // Cách 1
console.log(person['birthYear']); // Cách 2
```
* Khởi tạo
Cố định
```js
let person = {
    name: "Javascript",
    birthYear: 1995,
    isGood: true
}
console.log(`${person.name}, ${person.birthYear}, ${person.isGood}`); // Output: Javascript, 1995, true
```
Dùng hàm tạo
```js
function personCreate(name, birthYear, isGood){
    this.name   = name,
    this.birthYear = birthYear,
    this.isGood = isGood
}
let person = new personCreate("Javascript", 1995, true)
person.name = 'Js'
console.log(`${person.name}, ${person.age}, ${person.isGood}`); // Output: Js, 1995, true
```
* Method
Gọi method từ function bên ngoài
```js
function personCreate(name, birthYear, isGood){
    this.name = name,
    this.birthYear = birthYear,
    this.isGood = isGood,
    this.age = calcAge(birthYear)
}
function calcAge(birthYear) {
    const now = new Date();
    return now.getFullYear() - birthYear;
}
let person = new personCreate("Javascript", 2000, true)
person.name = 'Js'
console.log(`Name: ${person.name}\nBirthYear: ${person.birthYear}\nAge: ${person.age}\nisGood: ${person.isGood}`); // 
```
# 🔓 Vòng lặp
## for...in
Duyệt qua các key (chỉ số) của đối tượng đếm được
* Example
```js
let dict = {name: "Js", birthYear: 1995, isGood: true};
for (let k in dict)
{
    console.log(k); // Output: name, birthYear, isGood 
}
```
```js
let nums = [2, 8, 0, 5];
for (let n in nums)
{
    console.log(n); // Output: 0, 1, 2, 3 
}
```
## for...of
Duyệt qua các đối tượng đếm được
* Example
```js
let nums = [1, 0, 5];
for (let n of nums)
{
    console.log(n); // Output: 1, 0, 5
}
```
# 🔓 Hàm
## Biểu thức hàm
* Dùng để gán hàm cho 1 biến
```js
let show = function showMessage(message){
    console.log(message)
};
show("This a variable") 
```
* Không thể gọi hàm đã được gán
 ```js
let show = function showMessage(message){
    console.log(message)
};
showMessage("This a variable") // Error
show("This is a variable") // Ok
```
## Hàm ẩn danh
Không có tên hàm
```js
let show = function (message){
    console.log(message)
};
show("This a anonymous function");
```
## Biểu thức lambda
() => {...}
```js
let msg = "This a lambda expression function";
let show = () => console.log(msg);
show();
```
```js
let sum = (a, b) => {
    let c = a + b;
    console.log(c)
};
sum(28, 10);
```
## Hàm chạy ngay
Chạy ngay không cần gán
```js
(function (message){
    console.log(message)
})("This is IIFE");
```
# 🔓 Mảng
## Tạo mảng
```js
let langs1 = ['Html','Css','Javascript'];
```
## Độ dài mảng (length)
```js
let langs1 = ['Html','Css','Javascript'];
console.log(langs1.length); 
```
## Gộp 2 mảng (concat)
```js
let langs1 = ['Html','Css','Javascript'];
let langs2 = ['C#','Go','Python'];
let langs = langs1.concat(langs2)
console.log(langs); 
```
## Duyệt mảng (forEach)
```js
let langs1 = ['Html','Css','Javascript'];
let langs2 = ['C#','Go','Python'];
let langs = langs1.concat(langs2)
langs.forEach((item, index) => console.log(item, index));
```
## Thêm phần tử vào cuối (push)
```js
let langs1 = ['Html','Css','Javascript'];
langs1.push("ReactJs");
console.log(langs1); 
```
## Thêm phần tử vào đầu (unshift)
```js
let langs2 = ['C#','Go','Python'];
langs2.unshift("Java"); 
console.log(langs2); 
```
## Xoá phần tử cuối (pop)
```js
let langs1 = ['Html','Css','Javascript'];
langs1.pop();
console.log(langs1); 
```
## Xoá phần tử đầu (shift)
```js
let langs1 = ['Html','Css','Javascript'];
langs1.shift();
console.log(langs1); 
```
## Xoá n phần tử từ 1 index (splice)
```js
let langs1 = ['Html','Css','Javascript', 'ReactJs', 'AngularJs', 'VueJs'];
langs1.splice(2, 3);
console.log(langs1); // Output: ['Html', 'Css', 'VueJs']
```
## Nhân bản một mảng (slice)
```js
let langs1 = ['Html','Css','Javascript'];
let langs2 = langs1.slice();
console.log(langs2); // Output: ['Html','Css','Javascript']
```
## Mảng kết hợp
```js
let person = [];
person['name'] = 'Js';
person['birthYear'] = 1995 
person.forEach((i) => console.log(i)); // Output: Empty
console.log(`${person['name']}: ${person['birthYear']}`); // Output: Js: 1995
```
# 🔓 Date
## Khởi tạo
* new Date()
```js
let date = new Date();
console.log(date); // Output: Thời gian hiện tại
```
* new Date(year, month, day, hours, minutes, seconds, milliseconds);
```js
let date = new Date(2000,4,28,10,2,00);
console.log(date); // Output: Sun May 28 2000 10:02:00 GMT+0700
```
    ⚠️ Js đếm tháng từ 0-11, đếm tuần từ 0-6

* new Date(dateString)
```js
let date = new Date('May 28, 2000 10:02:00');
console.log(date); // Output: Sun May 28 2000 10:02:00 GMT+0700
```
## Các phương thức
* Lấy ngày trong tháng (getDate())
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('date:',date.getDate()); // Output: 28
```
* Lấy thứ trong tuần (getDay())
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('day:',date.getDay()); // Output: 0
```
* Lấy năm (getFullYear())
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('year:',date.getFullYear()); // Output: 2000
```
* Lấy thời gian Unix (getTime())
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('unix:',date.getTime()); // Output: 959482920000
```
# 🔓 DOM cơ bản
* Document Object Model
* Là mô hình logic, biểu diễn cấu trúc Html
* Sử dụng DOM để thêm, sửa, xoá các phần tử của Html
## Đối tượng Document
* Là đối tượng của DOM
* Từ `document` có thể truy cập mọi phần tử của DOM
```js
<script>
    document.body.innerHTML = "Some text";
</script>
```



