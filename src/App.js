
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {deletetodo} from "./components/Redux/actions"

import Body from "./components/body";

function App() {
  const data=useSelector(state=>state);
  const dispatch=useDispatch();
  const togglehandler=(e)=>{
      console.log(e.target)

  };

  return (
    <div >
        <Body/>
        <ol>
            {data.map(x=>
                <li
                    key={x.id}>
                    {x.payload} <button key={x.id} onClick={(e)=>togglehandler(e)}>delete</button>
                </li>)
            }
        </ol>
    </div>
  );
}

export default App;
