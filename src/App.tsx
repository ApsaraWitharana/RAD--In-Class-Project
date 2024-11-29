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


import './App.css';
import SmallButtonComponent from "./component/ButtonComponent.tsx";
// import Subject from './component/Subject';
function App() {
    // return (
        // <div style={{ padding: '20px' }}>
        //     <Subject name="RAD">
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        //     </Subject>
        //     <Subject name="MAD">
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        //     </Subject>
        //     <Subject name="OOP">
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        //     </Subject>
        // </div>

     const handleClick =(name:string)=>{
                alert(name+'Click');
            }
    return (
        <>
            <SmallButtonComponent onSelect={handleClick}>Dashboard</SmallButtonComponent>
            <SmallButtonComponent onSelect={handleClick}>Add Customer</SmallButtonComponent>
            <SmallButtonComponent onSelect={handleClick}>Delete Customer</SmallButtonComponent>
        </>
    );
}

export default App;
