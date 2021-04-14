import React,{useReducer} from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HookCounterArr from './components/HookCounterArr';
import ClickCounterOne from './components/ClickCounterOne';
import HookCounterEffect from './components/HookCounterEffect';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import HookIntervalCounter from './components/HookIntervalCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterReducerSimple from './components/CounterReducerSimple';
import CounterReducerComplex from './components/CounterReducerComplex';
import CounterReducerMultiple from './components/CounterReducerMultiple';
import ComponentUseReducerContextA from './components/ComponentUseReducerContextA';
import FetchingDataWidReducer from './components/FetchingDataWidReducer';
import FetchingDataWidStateEffect from './components/FetchingDataWidStateEffect';
import ParentComp from './components/Callback-Hook/ParentComp';
import Counter from './components/UseMemo-Hook/Counter';
import FormInput from './components/UseRef-Hook/FormInput';
import ClassTimer from './components/UseRef-Hook/ClassTimer';
import HookTImer from './components/UseRef-Hook/HookTImer';
import DocTitleOne from './components/Custom-hook/DocTitleOne';
import DocTitleTwo from './components/Custom-hook/DocTitleTwo';
import CounterOne from './components/Custom-hook/CounterOne';
import CounterTwo from './components/Custom-hook/CounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0;//abv comp define both parameters values
const reducer = (state,action) => {//reducer fn aways return one value adn we need to pass 2 paramater first is current state adn second is action
    switch(action){
        case 'increament' : 
            return state + 1
        case 'decreament' : 
            return state - 1
        case 'reset' : 
            return initialState
        default :
            return state
    }
}

function App() {
  const[count,dispatch] =  useReducer(reducer,initialState)
  
  return (
      <div className="App">
        <CounterOne/>
        <CounterTwo />
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <HookTImer/>
        <ClassTimer/> */}
        {/* <FormInput /> */}
        {/* <Counter/> */}
        {/* <ParentComp /> */}
        {/* <FetchingDataWidReducer /> */}
        {/* <FetchingDataWidStateEffect /> */}
        {/* <CountContext.Provider 
          value = {{countState: count, countDispatch: dispatch }}
        >
          <h2>Count - {count}</h2>
            <ComponentUseReducerContextA />
        </CountContext.Provider> */}
        {/* <CounterReducerMultiple /> */}
        {/* <CounterReducerComplex /> */}
        {/* <CounterReducerSimple/> */}
        {/* <UserContext.Provider value = 'Geet'>
          <ChannelContext.Provider value = 'codeEvolution'>
            <ComponentC />
        </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <DataFetching/> */}
        {/* <HookIntervalCounter />
        <IntervalClassCounter /> */}
        {/* <MouseContainer/> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterEffect /> */}
        {/* <ClickCounterOne /> */}
        {/* <HookCounterArr /> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter/>
      <ClassCounter/> */}
      </div>
  );
}

export default App;
