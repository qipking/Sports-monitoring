import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

function About() {

    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
    }
    return (
        <>
            <div class="p-4 bg-base-200 rounded-box shadow">
                <p class="py-4">运动监测系统移动客户端</p>
                <p class="py-4">软件版本 V0.0.2</p>
                <p class="py-4">lichi3030213313</p>
                <p class="py-4">指导老师: 王辂乐 潘健</p>


                <div class="p-8 m-8 bg-base-100 rounded-box shadow">
                    <h1>前端框架:Tauri,Solid</h1>

                    <p>意见反馈</p>

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
                            placeholder="点击按钮联系我们"
                        />
                        <button class="btn btn-primary btn-block">添加QQ</button>
                    </form>

                    <p>{greetMsg()}</p>
                </div>
            </div>
        </>
    );
}

export default About;