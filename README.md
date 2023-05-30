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
### Lưu nhiều biến (Như 1 dictionary)
```js
let person = {
    name: "Javascript",
    birthYear: 1995,
    isGood: true
}
```
### Truy cập đến thuộc tính
```js
let person = {
    name: "Javascript",
    birthYear: 1995,
    isGood: true
}
console.log(person.name); // Cách 1
console.log(person['birthYear']); // Cách 2
```
### Khởi tạo
* Cố định
```js
let person = {
    name: "Javascript",
    birthYear: 1995,
    isGood: true
}
console.log(`${person.name}, ${person.birthYear}, ${person.isGood}`); // Output: Javascript, 1995, true
```
* Dùng hàm tạo
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
### Method
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
## Overview
* array.length
* array.concat(array2)
* array.push('item')
* array.unshift('item')
* array.pop()
* array.shift()
* array.splice(2, 3)
* array.slice()
* array.forEach
* array.map()
* array.reduce()
* array.filter()
* array.some()
* array.every()
* array.includes()
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
## Duyệt mảng với map()
Phương thức `map(function())` 
* Duyệt qua từng phần tử và thực hiện `function()`
* Trả về 1 mảng
Ví dụ tạo 1 mảng mới có thêm key `rank` dựa trên `score`:
```js
var courses = [
    {
        id: 00,
        name: "C#",
        score: 9
    },
    {
        id: 01,
        name: "Python",
        score: 8
    },
    {
        id: 02,
        name: "Javascript",
        score: 3
    },
    {
        id: 03,
        name: "C++",
        score: 6
    }
]
var newCourses = courses.map((course)=> {
    var rank;
    if (course.score < 5) {
        rank = "bad";
    }
    else if (course.score < 8) {
        rank = "medium";
    }
    else {
        rank = "good";
    }
    return {
        id : course.id,
        name : course.name,
        score : course.score,
        rank : rank
    }
});
console.log(newCourses);
```
## Phương thức reduce()
Phương thức `reduce(callback(accumulator, item), initialValue)` 
* Duyệt qua từng phần tử và thực hiện `callback()`
* `accumulator` : giá trị tích luỹ sau mỗi lần tự hiện `callback()`
* `item` : giá trị hiện tại của mảng được đưa vào `callback()`
* Trả về 1 giá trị duy nhất
Ví dụ gộp mảng2 chiều thành mảng 1 chiều:
```js
var langs = [['Html', 'Css', 'Javascript'],['C++', 'C#', 'Java'],['Python', 'Php']];
var array1d = langs.reduce((accumArray, subArray) => {
    return accumArray.concat(subArray);
});
console.log(array1d);
```
## Phương thức filter()
```js
var courses = [
    {
        id: 00,
        name: "C#",
        score: 9
    },
    {
        id: 01,
        name: "Python",
        score: 8
    },
    {
        id: 02,
        name: "Javascript",
        score: 3
    },
    {
        id: 03,
        name: "C++",
        score: 6
    }
]
var results = courses.filter((c)=>{
    return c.score >= 8
})
console.log(results)
```
## Phương thức some()
Kiểm tra có phần tử nào thoả mãn điều kiện không
```js
var courses = [
    {
        id: 00,
        name: "C#",
        score: 9
    },
    {
        id: 01,
        name: "Python",
        score: 8
    },
    {
        id: 02,
        name: "Javascript",
        score: 3
    },
    {
        id: 03,
        name: "C++",
        score: 6
    }
]
var result = courses.some((c)=>{
    return c.score >= 8
})
console.log(result) // Output: true
```
## Phương thức every()
Kiểm tra tất cả phần tử có thoả mãn điều kiện không
```js
var courses = [
    {
        id: 00,
        name: "C#",
        score: 9
    },
    {
        id: 01,
        name: "Python",
        score: 8
    },
    {
        id: 02,
        name: "Javascript",
        score: 3
    },
    {
        id: 03,
        name: "C++",
        score: 6
    }
]
var result = courses.every((c)=>{
    return c.score >= 8
})
console.log(result) // Output: false
```
## Phương thức includes()
Kiểm tra phần tử có trong mảng không
```js
var courses = ['Html', 'Css', 'Javascript']
var result = courses.includes('Css');
console.log(result) // Output: true
```
# 🔓 Prototype, Callback
## Prototype
Định nghĩa 1 phương thức mới cho object
```js
String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}
var s = "Hello";
console.log(s.reverse()); // Output: olleH
```
## Callback
Gọi hàm trong hàm
```js
var fibonacci = function(length){
    if (length == 1 || length == 2){
        return 1;
    }
    else {
        return fibonacci(length-1) + fibonacci(length-2);
    }
}
console.log(fibonacci(5))
```
# 🔓 Date
## Overview
* newDate()
* getDate()
* getDay()
* getFullYear()
* getTime()
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
> ⚠️ Js đếm tháng từ 0-11, đếm tuần từ 0-6

* new Date(dateString)
```js
let date = new Date('May 28, 2000 10:02:00');
console.log(date); // Output: Sun May 28 2000 10:02:00 GMT+0700
```
## Các phương thức
* Lấy ngày trong tháng `(getDate())`
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('date:',date.getDate()); // Output: 28
```
* Lấy thứ trong tuần `(getDay())`
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('day:',date.getDay()); // Output: 0
```
* Lấy năm `(getFullYear())`
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('year:',date.getFullYear()); // Output: 2000
```
* Lấy thời gian Unix `(getTime())`
```js
let date = new Date('May 28, 2000 10:02:00');
console.log('date:',date);
console.log('unix:',date.getTime()); // Output: 959482920000
```
* Set năm `(setFullYear())`
```js
let date = new Date();
date.setFullYear(1999);
console.log(date.getFullYear()); // Output: 1999
```
# 🔓 DOM cơ bản
* Document Object Model
* Là mô hình logic, biểu diễn cấu trúc Html
* Sử dụng DOM để thêm, sửa, xoá các phần tử của Html
## Overview
* DOM
* document
* element.innerHTML

* document.getElementById('id')
* document.getElementsByClassName('class')
* document.getElementsByTagName('tag')

* element.hasChildNodes
* element.childNodes
* element.parentNode
* element.lastChild
* element.firstChild
* element.nextSibling
* element.previousSibling
## Thuộc tính innerHTML
* Có trong mọi phần tử
* Dùng để thay đổi nội dung phần tử
## Đối tượng Document
* Là đối tượng của DOM
* Từ `document` có thể truy cập mọi phần tử của DOM
```js
document.body.innerHTML = "Some text";
```
### getElementById
* Tìm phần tử theo id
* Trả về HtmlElement
```js
document.getElementById('big-title').innerHTML = "JS"
```
### getElementsByClassName
* Tìm phần tử theo ClassName
* Trả về HtmlCollection
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr.length);
arr[0].innerHTML = "This is the a element of class";
```
### getElementsByTagName
* Tìm phần tử theo TagName (p, h1,...)
* Trả về HtmlCollection
```js
let arr = document.getElementsByTagName('h1');
console.log(arr.length);
arr[0].innerHTML = "This is the a element of tag";
```
## Các thuộc tính của HtmlElement trong DOM
### childNodes
`element.childNodes` : trả về mảng các phần tử con
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].childNodes); // Output: NodeList(3) [text, h1#welcome-title, text]
```
### firstChild
`element.firstChild` : trả về phần tử con đầu tiên
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].firstChild); // Output: #text
```
### lastChild
`element.lastChild` : trả về phần tử con cuối cùng
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].lastChild); // Output: #text
```
### hasChildNodes
`element.hasChildNodes` : kiểm tra phần tử có phần tử con hay không
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].hasChildNodes()); // Output: #true
```
### nextSibling
`element.nextSibling` : trả về phần tử tiếp theo cùng cấp
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].nextSibling); // Output: #text
```
### previousSibling
`element.previousSibling` : trả về phần tử trước đó cùng cấp
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].previousSibling); // Output: #text
```
### parentNode
`element.parentNode` : trả về phần tử cha
```js
let arr = document.getElementsByClassName('welcome-container');
console.log(arr[0].parentNode); // Output: <body>...</body>
```
### More
* [HtmlElements](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html)
# 🔓 DOM thay đổi thuộc tính
## Overview
* element.src
* element.style.
## Thay đổi thuộc tính phần tử
element.attribute = "new Value"
```js
let iconJs = document.getElementById("icon-js");
iconJs.src = "images/icon-js-2.png";
```
## Thay đổi style phần tử (Css)
element.style.... = "newValue"
```js
let bigTitle = document.getElementById("big-title");
bigTitle.style.fontSize = "40px";
```
# 🔓 DOM thêm, sửa, xoá phần tử
## Overview
* document.createElement(tag_name)
* element.cloneNode()
* document.createTextNode(text)

* element.appendChild(child)
* element.insertBefore(newNode, anyNode)
* element.replaceChild(newNode, oldNode)

* element.removeChild(child)
* child.parentNode.removeChild(child)

* element.replaceChild(newNode, oldNode)
* element.querySelector('#id-child')
## Tạo mới phần tử
* document.createElement(tag_name)  --> Tạo ra 1 phần tử có thẻ tag_name (a, p, div)
* element.cloneNode() --> Nhân bản phần tử
* document.createTextNode(text) --> Tạo phần tử từ văn bản Html
```js
var linknode = document.createElement('a')
linknode.href = 'https://google.com/'
linknode.innerText = "Google.com"
```
## Thêm phần tử vừa tạo vào DOM Html
* element.appendChild(newNode)  --> Thêm vào cuối danh sách node con
* element.insertBefore(newNode, node2) --> Thêm vào trước 1 node
* element.replace(newNode, oldNode)  --> Thay thế node mới vào node cũ
```js
var linknode = document.createElement('a');
linknode.href = 'https://xuanthulab.net/javascript/';
linknode.target = "blank";
linknode.innerText = "What's Javascript?";
linknode.style.display = "flex";
linknode.style.justifyContent = "center";
linknode.style.alignItems =  "center";
linknode.style.fontFamily = 'Consolas';
linknode.style.fontWeight =  600;
linknode.style.fontSize =  "18px";
linknode.style.color =  "white";
linknode.style.padding =  "10px";
var bigTitleContainer = document.getElementById("big-title-container");
bigTitleContainer.appendChild(linknode);
```
## Xoá phần tử 
* Sử dụng `removeNode(child)` để xoá childNode
```js
var bigTitleContainer = document.getElementById("big-title-container");
if (bigTitleContainer.lastChild.id == "what-is-js") {
    bigTitleContainer.removeChild(bigTitleContainer.lastChild);
}
else {
    var linknode = document.createElement('a');
    linknode.id = "what-is-js"
    linknode.href = 'https://xuanthulab.net/javascript/';
    linknode.target = "blank";
    linknode.innerText = "What's Javascript?";
    linknode.style.display = "flex";
    linknode.style.justifyContent = "center";
    linknode.style.alignItems = "center";
    linknode.style.fontFamily = 'Consolas';
    linknode.style.fontWeight = 600;
    linknode.style.fontSize = "18px";
    linknode.style.color = "white";
    linknode.style.padding = "10px";
    bigTitleContainer.appendChild(linknode);
}
```
* Sử dụng `child.parentNode.removeChild(child)` để tự xoá node
```js
var linkJs = document.getElementById('what-is-js');
if (linkJs != null){
    linkJs.parentNode.removeChild(linkJs);
}
else{
    console.log('Not found element!')
}
```
## Thay thế phần tử
Sử dụng `element.replaceChild(newChild, oldChild)`
```js
var bigTitleContainer = document.getElementById("big-title-container");
var bigTitle = bigTitleContainer.querySelector("#big-title");
if (bigTitle != null) {
    var linknode = document.createElement('a');
    linknode.id = "what-is-js"
    linknode.href = 'https://xuanthulab.net/javascript/';
    linknode.target = "blank";
    linknode.innerText = "What's Javascript?";
    linknode.style.display = "flex";
    linknode.style.justifyContent = "center";
    linknode.style.alignItems = "center";
    linknode.style.fontFamily = 'Consolas';
    linknode.style.fontWeight = 600;
    linknode.style.fontSize = "60px";
    linknode.style.color = "yellow";
    linknode.style.padding = "10px";
    bigTitleContainer.replaceChild(linknode, bigTitle);
}
else {
    console.log('Not found element!')
}
```
# 🔓 DOM sự kiện
## Overview
* onclick = "function()"
* element.onclick = function(){...}
* element.addEventListener(event, function, useCapture)
* element.removeEventLister(event, function)
* preventDefault()
* stopPropagation()
## Bắt sự kiện
* Sử dụng attribute 
```html
onclick = "submitForm()"
```
* Sử dụng Js
```js
document.getElementById('btn-submit').onclick = function(){
    // do something
}
```
## Lắng nghe nhiều sự kiện **addEventLister()**
```js
var img = document.getElementById('icon-github');
img.addEventListener("click", funcClick);
img.addEventListener("mouseover", funcMouseOver);
function funcClick(){
    console.log("Clicked");
}
function funcMouseOver(){
    console.log("Mouse is over");
}
```
## Xoá sự kiện **removeEventLister()**
```js
var img = document.getElementById('icon-github');
img.addEventListener("click", funcClick);
function funcClick(){
    console.log("Clicked");
    img.removeEventListener("click", funcClick);
    console.log("Removed click event");
}
```
## preventDefault(), stopPropagation()
### Ngăn sự kiện **preventDefault()**
Ví dụ: Ngăn sự kiện chuyển hướng sang `href`
```js
var linkPrevent = document.getElementById('prevent-default');
linkPrevent.addEventListener("click", function(event) => {
    event.preventDefault();
    alert('Link is clicked but is not redirected')
});
```
### Dừng lan truyền sự kiện **stopPropagation()**
Ví dụ: Ngăn các phần tử trong `navbar` nhận sự kiện click của `navbar`
```js
var navbar = document.getElementById('navbar');
navbar.addEventListener("click", function(event) {
    alert('navbar is clicked');
});
navbar.childNodes.forEach((element) => {
    element.addEventListener("click", function(event){
        event.stopPropagation();
    });
});
```
# 🔓 Class
## Overview
* class Product{...}
* constructor ()
* method()
* new Product()
* class Computer extends Product{...}
* super()
## Tạo class
```js
class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showInfo(){
        console.log(`${this.id}: ${this.name} - \$${this.price}`);
    }
}
```
## Tạo object từ class
```js
var product1 = new Product(1, "ASUS Tuf Gaming", 1200);
product1.showInfo();
```
## Kế thừa class
```js
class Laptop extends Product{
    constructor(id, name, price, os, ram){
        super(id, name, price);
        this.os = os;
        this.ram = ram;
    }
}
var laptop1 = new Laptop(2, "Macbook Air Pro", 2400, "MacOS", "16GB");
laptop1.showInfo(); // Output: 2: Macbook Air Pro - 2400
```

# 🔓 Promise
## Overview
* Producing Code
* Consuming code
## Syntax
```js
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
## Example
* Ex1:
```js
function myDisplayer(value) {
  document.getElementById("demo").innerHTML = value;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  
// The producing code (this may take some time)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```
* Ex2: Wait for a file
```js
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.htm");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```
## Reference
* [W3School](https://www.w3schools.com/js/js_promise.asp)
