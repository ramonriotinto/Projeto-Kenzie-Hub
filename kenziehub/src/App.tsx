import { GlobalStyle } from "./Styles/global";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Rotas } from "./Rotas/rotas";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserContext";
import { TechProvider } from "./context/TechContext";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <UserProvider>
        <TechProvider>
          <Rotas />
        </TechProvider>
      </UserProvider>
    </div>
  );
}

export default App;
