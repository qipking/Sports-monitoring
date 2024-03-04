import { createSignal, createEffect } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
//import "./App.css";

import Statistics from "./Statistics";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
    }
    return (
        <>
            <Navbar />
            <Statistics />
            <div class="divider"></div>

            <div class="p-8 text-base-content">
                <h1>Welcome to Tauri!</h1>

                <p>Click on the Tauri, Vite, and Solid logos to learn more.</p>

                <form
                    class="row"
                    onSubmit={(e) => {
                        e.preventDefault();
                        greet();
                    }}
                >
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                    />
                    <button class="btn btn-primary btn-block">Greet</button>
                </form>

                <p>{greetMsg()}</p>
            </div>
        </>
    );
}

export default App;