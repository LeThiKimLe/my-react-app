import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import cũng có 2 kiểu ứng với Named vs Default Export

// --> Phải xài ngoặc nhọn cho Named Export
import {ten, age} from "./person.js"

// --> Còn default export thì ko cần ngoặc
import message from './message.js'

// Class
class Car {
  constructor(name){
    this.brand = name;
  }

  present() {
    return 'I have a' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod){
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + 'is a ' + this.model
  }
}

const mycar = new Model("Ford", "Mustang")
mycar.show()

// Arrow function (Có dấu => khi định nghĩa á)
class ArrowFunc{

  constructor(){
  }

  // Hàm bình thường
  hello = function() {
    return "Hello world"
  } 

  // Hàm arrow
  hello2 = () =>
  {
     return 'Hello world'
  }

  // Nếu trong ngoặc chỉ có 1 lệnh trả về, thì có thể bỏ luôn ngoặc vs chữ return
  hello3 = (name) => 'Hello' + name;

  // Khi sử dụng this trong định nghĩa hàm bình thường, nếu một element khác gọi hàm này
  // Thì this là cái element gọi đó (có thể là btn)
  // Còn khi dùng this trong hàm arrow thì nó luôn chỉ đến đối tượng lớp chứa nó :V
}

const myArray = ['apple', 'banana', 'orange'] //array
const myList = myArray.map((item) => <p>{item}</p>) //Array Methods (map từng item với hàm)

//Destructuring
const array2 = ['nameA', 'nameB', 'nameC']

//--> Bình thường <--
const car = array2[0]
const car1 = array2[1]
const car2 = array2[2]

//--> Áp dụng Destructuring <--
const [car3, truck, suv] = array2;
const [car4, , suv2] = array2; //Nếu ko cần có thể bỏ trống

// Spread Operator có tác dụng gộp array, object
// thành một array, object mới.

//--> Ghép mảng <--
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]
// arr3 = [1,2,3,4,5,6]

const [one, two, ...rest] = arr3
// Gán arr3[0] cho one, arr3[1] cho two
// và phần còn lại của mảng cho rest

const obj1 = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}


const obj2 = {
  style: 'round',
  year: '2023',
  color: 'black'
}

const mixobj = {...obj1, ...obj2}
// mixobj = {
//  brand: 'Ford',
//  model: 'Mustang',
//  style: 'round',
//  year: '2023',
//  color: 'black'
//  }
// Gộp các thuộc tính lại, cái bị trùng bị cái sau ghi đè



// Toán tử bậc 3 : <Điều kiện> ? <true action> : <false action>

// if (mixobj)
// {
//   renderApp();
// }
// else
// {
//   renderLogin();
// }

// Chuyển thành

// mixobj ? renderApp() : renderLogin()
// JSX để tạo một React Element với một khối html lớn gồm nhiều phần tử html, dùng ngoặc ()
// Chỉ có 1 khối chứa tất cả, ko đc có khối thứ 2 ngang hàng với khối 1
// Hoặc nếu cần thiết có nhiều hơn 1 khối ngang nhau thì thêm cặp <> </> bao hết lại
// Vậy gắn class vô html thế nào? Xài 'className="<tên class>"' thay cho class =""
const myEle2 = (
  <table className='myclass'>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Ekse</td>
    </tr>
  </table>
)

//Còn If thì phải viết If của js ở bên ngoài, xong lấy ra được
// một biến js rồi là truyền vô cho JSX
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const myElement = <h1>{text}</h1>;

// Hoặc có thể nhét toán tử JS vô trong html luôn

const x2 = 5;
const myElement2 = <h1>{x2 < 10 ? "Hello" : "Goodbye"}</h1>;

// Này là JSX á, viết html chung hàng với biến của js luôn
// Có thể chèn một biến của js vô bằng ngoặc nhọn
const myFirstElement = <h1>Hello React {car2}</h1>

//Nếu mà ko có JSX á, xài vầy:
const myFirstEle = React.createElement('h1', {}, 'ko xài JSX')

// Có thể đổi thành bất kỳ thành phần nào, id, nào trong file index.html trong thư mục public
const root = ReactDOM.createRoot(document.getElementById('root')); 


root.render(
  myEle2
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
