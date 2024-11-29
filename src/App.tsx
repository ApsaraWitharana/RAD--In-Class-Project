
import './App.css'
import SmallButtonComponent from "./component/ButtonComponent.tsx";
import {Item} from "./component/Item.tsx";
import {itemList} from "./item.ts";
function App() {

    // set item to the list
    const  itemArray =[];
    for (const item of itemList) {
        itemArray.push(<Item title={item.title} description={item.description}></Item>);
    }
  return (
      <>
          <SmallButtonComponent name='Add'></SmallButtonComponent>
          <SmallButtonComponent name='Update'></SmallButtonComponent>
          <SmallButtonComponent name='Delete'></SmallButtonComponent>

          {/*map item list*/}
          {/*{itemList.map((item, index) => (*/}
          {/*    <Item key={index} title={item.title} description={item.description} />*/}
          {/*))}*/}

          {/*<Item title ={itemList[0].title} description ={itemList[0].description}></Item>*/}
          {/*<Item title ={itemList[1].title} description ={itemList[1].description}></Item>*/}
          {/*<Item title ={itemList[2].title} description ={itemList[2].description}></Item>*/}

          {itemArray}
      </>
  )
}

export default App
