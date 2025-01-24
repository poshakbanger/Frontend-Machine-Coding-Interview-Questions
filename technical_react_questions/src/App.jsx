import './App.css'
import Accordion from './components/Accordion-app/Accordion';
import Counter from './components/Counter/Counter';
import Form from "./components/Form/Form";
import Child from './components/one/Child';
import Parent from './components/one/Parent';
import { ThemeProvider } from './components/useContext_example/Context';
import Toolbar from './components/useContext_example/Toolbar';
import {data} from "./components/Accordion-app/data";
import ContactForm from './components/ContactForm/ContactForm';
import HolyGrailLayout from './components/HolyGrailLayout/HolyGrailLayout';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Calculator from './components/Simple-Interest-Calculator/Calculator';
import Tabs from './components/Tabs/Tabs';
import DataTable from './components/Data-Table/DataTable';
import DiceRoller from './components/Dice-Roller/DiceRoller';
import FileTree from './components/File-Explorer/FileTree';
import LikeButton from './components/Like-Button/LikeButton';
import Modal from './components/Modal-Dialog/Modal';
import MainApp from './components/Modal-Dialog/MainApp';
import StarRatingMain from './components/Star-Rating/StarRatingMain';
import Todo from './components/Todo/Todo';
import TrafficLight from './components/Traffic-Light/TrafficLight';
import DigitalClock from './components/Digital-Clock/DigitalClock';
import TicTacToe from './components/Tic-Tac-Toe/TicTacToe';
import ImageCarousal from './components/Image-Carousal/ImageCarousal';
import JobBoard from './components/Job-Board/JobBoard';

function App () {

  return (
    <div>
      {/* <Form/> */}
      {/* <Child/>
      <Parent/> */}
      {/* <Counter/> */}
      {/* <Toolbar/> */}
      {/* <h1>React Accordion</h1>
      <Accordion items={data} /> */}
      {/* <ContactForm/> */}
      {/* <HolyGrailLayout/> */}
      {/* <ProgressBar/> */}
      {/* <Calculator/> */}
      {/* <Tabs/> */}
      {/* <DataTable/> */}
      {/* <DiceRoller/> */}
      {/* <FileTree/> */}
      {/* <LikeButton/> */}
      {/* <Modal/> */}
      {/* <MainApp/> */}
      {/* <StarRatingMain/> */}
      {/* <Todo/> */}
      {/* <TrafficLight/> */}
      {/* <DigitalClock/> */}
      {/* <TicTacToe/> */}
      {/* <ImageCarousal/> */}
      <JobBoard/>
    </div>
  )
}

export default App
