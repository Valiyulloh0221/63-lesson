import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Quality from "./components/quality/Quality";
import './scss/main.scss';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Quality />
      <Footer />
    </div>
  )
}
export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDark: false,
//     };
//   }
//   handleMode = () => {
//     this.setState({
//       isDark: !this.state.isDark,
//     });
//     document.body.classList.toggle('dark');
//   };
//   handleBacktop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };
//   render() {
//     const { isDark } = this.state;
//     return (
//       <div>
//         <Header />
//         <Hero />
//         <About />
//         <Footer />
//         <button onClick={this.handleMode}>Dark mode</button>
//         <ClassClick handleBacktop={this.handleBacktop} />
//       </div>
//     );
//   }
// }

// export default App;