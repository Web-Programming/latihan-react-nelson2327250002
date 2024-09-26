import "./App.css";
import Hello from "./Hello";
import Produk from "./Produk";

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <Hello 
                nama="Nelson Antonio Celo" 
                pesan="Semoga hari ini lebih baik dari sebelumnya"/>
                <Produk />
            </header>
        </div>
    );
}

export default App;