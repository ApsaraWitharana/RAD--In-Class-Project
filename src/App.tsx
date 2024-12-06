//
// import './App.css'
// // import {Dashboard} from "./component/Dashboard.tsx";
// // import {Login} from "./component/Login.tsx";
// // import SmallButtonComponent from "./component/ButtonComponent.tsx";
// // import SmallButtonComponent from "./component/ButtonComponent.tsx";
// // import {Item} from "./component/Item.tsx";
// import Subject from "./component/Subject.tsx";
//
// // import {itemList} from "./item.ts";
// function App() {
//
//     // // set item to the list
//     // const  itemArray =[];
//     // for (const item of itemList) {
//     //     itemArray.push(<Item title={item.title} description={item.description}></Item>);
//     // }
//
//     // const  isLoggedIn = false;
//     // let content;
//     // if (isLoggedIn) {
//     //     content =<Dashboard/>
//     // }else {
//     //     content = <Login/>
//     }
//   // @ts-ignore
// return (
//       <>
//
//           <Subject name='RAD'>
//               Lorem Ipsum is simply dummy text of the
//           </Subject>
//           <Subject name='MAD'>
//               Lorem Ipsum is simply dummy text of the
//           </Subject>
//           <Subject name='OOP'>
//               Lorem Ipsum is simply dummy text of the
//           </Subject>
//           {/*<SmallButtonComponent children='Add'></SmallButtonComponent>*/}
//           {/*<SmallButtonComponent children='Update'></SmallButtonComponent>*/}
//           {/*<SmallButtonComponent children='Delete'></SmallButtonComponent>*/}
//
//           {/*/!*map item list*!/*/}
//           {/*/!*{itemList.map((item, index) => (*!/*/}
//           {/*/!*    <Item key={index} title={item.title} description={item.description} />*!/*/}
//           {/*/!*))}*!/*/}
//
//           {/*/!*<Item title ={itemList[0].title} description ={itemList[0].description}></Item>*!/*/}
//           {/*/!*<Item title ={itemList[1].title} description ={itemList[1].description}></Item>*!/*/}
//           {/*/!*<Item title ={itemList[2].title} description ={itemList[2].description}></Item>*!/*/}
//
//           {/*{itemArray}*/}
//           {/*{content}*/}
//       </>
//   )
// }
//
// export default App


// import './App.css';
// import SmallButtonComponent from "./component/ButtonComponent.tsx";
// // import Subject from './component/Subject';
// function App() {
//     // return (
//         // <div style={{ padding: '20px' }}>
//         //     <Subject name="RAD">
//         //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         //     </Subject>
//         //     <Subject name="MAD">
//         //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         //     </Subject>
//         //     <Subject name="OOP">
//         //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         //     </Subject>
//         // </div>
//
//      const handleClick =(name:string)=>{
//                 alert(name+'Click');
//             }
//
//     return (
//         <>
//             <SmallButtonComponent onSelect={handleClick}>Dashboard</SmallButtonComponent>
//             <SmallButtonComponent onSelect={handleClick}>Add Customer</SmallButtonComponent>
//             <SmallButtonComponent onSelect={handleClick}>Delete Customer</SmallButtonComponent>
//         </>
//
//
//     );
// }
//
// export default App;

// // task 02
// import './App.css'
// import { useState } from 'react';
// import SmallButtonComponent from './component/ButtonComponent';
// const App = () => {
//     const subjectDes = [
//         {
//             sName: 'JavaScript',
//             sDic: 'Lorem Ipsum JavaScript.'
//         },
//         {
//             sName: 'TypeScript',
//             sDic: 'It is a TypeScript.'
//         },
//         {
//             sName: 'RAD',
//             sDic: 'It is a RAD.'
//         }
//     ];
// const [content,setContent] = useState('default');
//     const handleClick = (name: string) => {
//         let desc;
//         subjectDes.map((subject) =>{
//             if (subject.sName === name) {
//                 desc = subject.sDic;
//             }
//         })
//         setContent(name);
//         alert(desc);
//     }
//     return (
//         // <div>
//         //     {/*{subjectDes.map((subject) => {*/}
//         //     {/*    return <SmallButtonComponent onSelect={handleClick}>{subject.sName}</SmallButtonComponent>*/}
//         //     {/*} )}*/}
//         // </div>
//         <>
//         <SmallButtonComponent onSelect={handleClick}>{subjectDes[0].sName}</SmallButtonComponent>
//         <SmallButtonComponent onSelect={handleClick}>{subjectDes[1].sName}</SmallButtonComponent>
//         <SmallButtonComponent onSelect={handleClick}>{subjectDes[2].sName}</SmallButtonComponent>
//           <br/>
//             {content}
//         </>
//     );
// };
//
// export default App;


// // task 04
//  import './App.css'
// import {useState} from "react";
//
// const App = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             {count} <br/>
//             <button onClick={() => setCount(count + 1)}>Add</button>
//             <button onClick={() => setCount(count - 1)}>Delete</button>
//         </>
//     );
// };
//
// export default App;


// task 05
// import { useState } from 'react';
// import './App.css'
// import ButtonComponent from "./component/ButtonComponent.tsx";
//
// const App = () => {
//     const [count, setCount] = useState(0);
//
//     return (
//         <>
//             {count} <br/>
//             <ButtonComponent count={count} onClick={setCount}>Add</ButtonComponent>
//             <ButtonComponent count={count} onClick={setCount}>Delete</ButtonComponent>
//         </>
//     );
// };
//
// export default App;

// task -06 - 2024/06/12
// import { ChangeEvent, useState } from 'react';
// import './App.css';
//
// const App = () => {
//     const [userData, setUserData] = useState({
//         firstName: '',
//         lastName: '',
//     });
//
//     function handleEvent(event: ChangeEvent<HTMLInputElement>) {
//         const { name, value } = event.target;
//
//         setUserData({
//             ...userData,
//             [name]: value,
//         });
//     }
//
//     return (
//         <>
//             <input type="text" name="firstName" placeholder="First Name" onChange={handleEvent}
//             />
//             <input type="text" name="lastName" placeholder="Last Name" onChange={handleEvent}
//             />
//             <p>
//                 Hello: {userData.firstName} {userData.lastName}
//             </p>
//         </>
//     );
// };
//
// export default App;

// import { ChangeEvent, useState } from 'react';
// import './App.css';
//
// const App = () => {
//     const [userData, setUserData] = useState({
//         firstName: '',
//         lastName: '',
//     });
//     const [firstName,setFirstName] = useState({
//     firstName: '',
//     });
//     const [lastName,setLastName] = useState({
//     lastName: '',
//     });
//
//     function handleEvent() {
//         setUserData({
//             ...userData,
//             firstName: firstName,
//             lastName: lastName,
//         });
//     }
//
//     return (
//         <>
//             <input type="text" name="firstName" placeholder="First Name" onChange={e => setFirstName({ e.target.value })} />
//             <input type="text" name="lastName" placeholder="Last Name" onChange={e => setLastName({  e.target.value })} />
//             <button onClick={handleEvent}>Set Name</button>
//             <p>
//                 Hello: {userData.firstName} {userData.lastName}
//             </p>
//         </>
//     );
// };
//
// export default App;


// import { ChangeEvent, useState } from 'react';
// import './App.css';
// import {Customer} from "./model/Customer.ts";
//
// function App() {
//     const []
//     const [customers,setCustomers] = useState<Customer[]>([]);
//     const[name,setName] = useState("");
//     const[address,setAddress] = useState("");
//     const[phone,setPhone] = useState("");
//     const[email,setEmail] = useState("");
//
//     function addCustomers() {
//         const newCustomers = new Customer(name, address, email, phone);
//         setCustomers((customers) => [...customers,newCustomers]);
//     }
//
//     return (
//         <>
//             <input name='Name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
//             <input name='Address' type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
//             <input name='Email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
//             <input name='Phone' type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
//
//             <button onClick={addCustomers}>Add Customer</button>
//
//             {customers.map((customer) => (
//
//                 <div>
//                     {customer.name+" "+customer.address+" "+customer.email+""+customer.phone}
//                 </div>
//             ))}
//
//
//         </>
//     )
// }
//
// export default App

// All crud
import { ChangeEvent, useState } from 'react';
import './App.css';
import {Customer} from "./model/Customer.ts";

function App() {
    const [customers,setCustomers] = useState<Customer[]>([]);
    const[name,setName] = useState("");
    const[address,setAddress] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");

    function addCustomers() {
        const newCustomers = new Customer(name, address, email, phone);
        setCustomers((customers) => [...customers,newCustomers]);
    }

    // object array ekk hdl ek set krnw -object arry eke antima arry ek natuw ithuru tik return krnw
    function deleteCustomers() {
        setCustomers((customers) => customers.slice(0,-1));
    }

    function deleteByEmail() {
        setCustomers((customers) => customers.filter((customer) => customer.email !== email));
    }

    function updateCustomers() {
        setCustomers((customers) => customers.map((customer) => customer.email === email?{...customers,name:name,address:address,phone:phone,email:email}:customer));
    }

    return (
        <>
            <input name='Name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            <input name='Address' type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
            <input name='Email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input name='Phone' type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>

            <button onClick={addCustomers}>Add</button>
            <button onClick={deleteCustomers}>Delete</button>
            <button onClick={deleteByEmail}>Delete by Email</button>
            <button onClick={updateCustomers}>Update Customer</button>

            {customers.map((customer) => (
                <div key={customer.email}>
                    {customer.name} {customer.address} {customer.email} {customer.phone}
                </div>
            ))}


        </>
    )
}

export default App