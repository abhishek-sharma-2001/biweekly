import './App.css'
import Container from "react-bootstrap/Container";
import TopPerformers from './Components/TopPerformers';
import TeamChart from './Components/TeamChart';
import ExcelSheet from './Components/ExcelSheet';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Container className="App">
      <Header />
      <TopPerformers />
      <Footer />
    </Container>
    </>
  )
}
export default App

