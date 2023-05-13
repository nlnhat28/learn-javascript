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

## Example
```js
setInterval(() => {console.log(Math.random())})
```
# 🔓 Toán tử
    **      --> Luỹ thừa
    ??=     --> Gán khi null
    ? :     --> Toán tử 3 ngôi
    ==      --> So sánh giá trị, không so sánh kiểu 
    ===     --> So sánh giá trị và kiểu
    typof   --> Toán tử trả về kiểu 

## ++a 
Cộng trước, return sau
```js
var a = 0;
var b = ++a;
console.log(b) // Output : 1
```
## a++ 
Return trước, cộng sau
```js
var a = 0;
var b = a++;
console.log(b) // Output : 0
```
## Example
```js
var a = 0;
var b = ++a * 2 - a-- * 2; // 1 * 2 - 1 * 2
console.log(b) // Output : 0
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
console.log(a); // Output : 0
```
```js
console.log(a); // Output : undefined
var a = 0;
```
```js
var a = 0;
if (true)
{
    var a = 1;
}
console.log(a); // Output : 1
```
```js
var a = 0;
function process()
{
    a = 1;
}
process();
console.log(a); // Output : 1
```
```js
var a = 0;
function process()
{
    var a = 1;
}
process();
console.log(a); // Output : 0
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
console.log(a); // Output : 0
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
console.log(a); // Output : 0
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
    name: "Link",
    age: 24,
    isGood: true
}
```
* Truy cập đến thuộc tính
```js
let person = {
    name: "Link",
    age: 24,
    isGood: true
}
console.log(person.name); // Cách 1
console.log(person['age']); // Cách 2
```
* Khởi tạo
Cố định
```js
let person = {
    name: "Link",
    age: 24,
    isGood: true
}
console.log(`${person.name}, ${person.age}, ${person.isGood}`);
```
Dùng hàm tạo
```js
function personCreate(name, age, isGood){
    this.name   = name,
    this.age    = age,
    this.isGood = isGood
}
let person = new personCreate("Link", 24, true)
person.name = 'Linh'
console.log(`${person.name}, ${person.age}, ${person.isGood}`);
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
let person = new personCreate("Link", 2000, true)
person.name = 'Linh'
console.log(`Name: ${person.name}\nBirthYear: ${person.birthYear}\nAge: ${person.age}\nisGood: ${person.isGood}`);
```
# 🔓 Vòng lặp
## for...in
Duyệt qua các key (chỉ số) của đối tượng đếm được
* Example
```js
let dict = {name: "Nhat", age: 23, isLive: true};
for (let k in dict)
{
    console.log(k); // Output: name, age, isLive 
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
# 🔓 SetTimeout, SetInterval
## setTimeout
Delay 1 khoảng thời gian, rồi mới thực hiện hàm
```js
setTimeout(() => {console.log(Math.random())}, 5000) //delay 5s => thực hiện hàm console.log
```
## setInterval, clearInterval
Lặp lại hàm sau 1 khoảng thời gian
```js
setInterval(() => {console.log(Math.random())}, 10000) //delay 5s => thực hiện hàm console.log
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
# 🔓 Mảng
* Tạo mảng
```js
let langs1 = ['Html','Css','Javascript'];
```
* Độ dài mảng
```js
let langs1 = ['Html','Css','Javascript'];
console.log(langs1.length);
```