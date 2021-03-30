import logo from './logo.svg';
import './App.css';
import GreetComp from './components/Greet'
import ClasComp from './components/ClasComp'
import Message from './components/Message'
import Counter from './components/Counter'
import FuntionClick from './components/FuntionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserConditional from './components/UserConditional';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import CounterTwo from './components/CounterTwo';
import { UserProvider } from './components/UserContext';
import ComponentC from './components/ComponentC';
import GetMethod from './components/GetMethod';
import PostMethod from './components/PostMethod';
function App() {
  return (
    <div className="App">
      <PostMethod />
      {/* <GetMethod /> */}
      {/* <UserProvider value = 'Geet'>
          <ComponentC />
      </UserProvider> */}
      {/* <CounterTwo>
        {(count,increamentCounter) => (
          <ClickCounterTwo count = {count} increamentCounter = {increamentCounter}/>
        )}
      </CounterTwo>

      <CounterTwo>
        {(count,increamentCounter) => (
          <HoverCounterTwo count = {count} increamentCounter = {increamentCounter}/>
        )}  
      </CounterTwo> */}
      {/*/we hv remove render word as prop so we need to pass children words in component rather then render*/}
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      {/* <ClickCounter name = 'Geet'/>
      <HoverCounter /> */}
      {/* <PortalDemo /> */}
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp/> */}
      {/* <LifeCycleA/> */}
      {/* <Form /> */}
      {/* <h2 className = 'error'>Error</h2>
      <h2 className = {styles.success}>Success</h2> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary = {true}/> */}
      {/* <NameList/> */}
      {/* <UserConditional /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <FuntionClick />
      <ClassClick />
      <GreetComp name = "Geet" emailId = "geet@gmail.com"/>
      <GreetComp name = "Suchi"  emailId = "suchi@gmail.com"/>
      <GreetComp name = "Pallavi"  emailId = "pallavi@gmail.com"/>
      <ClasComp name = "Pallavi"  emailId = "pallavi@gmail.com"/>
      <ClasComp name = "Suchi"  emailId = "suchi@gmail.com"/>
      <Message />
      <Counter/><br/><br/><br/>*/}
    </div>
  );
}

export default App;
