import useFirebase from "hooks/useFirebase";
import Navegacion from "./router/Navegacion";


function App() {
  const {user, firebase, auth, firestore} = useFirebase();

  return (
    <div className="App">
      <section>
        <Navegacion />
      </section>
    </div>
  );
}


export default App;
