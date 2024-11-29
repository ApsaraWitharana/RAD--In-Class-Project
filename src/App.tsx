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
import { useState } from 'react';
import './App.css'
import ButtonComponent from "./component/ButtonComponent.tsx";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            {count} <br/>
            <ButtonComponent count={count} onClick={setCount}>Add</ButtonComponent>
            <ButtonComponent count={count} onClick={setCount}>Delete</ButtonComponent>
        </>
    );
};

export default App;
