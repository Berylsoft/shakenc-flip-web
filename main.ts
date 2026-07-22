import { flip } from "./wasm/shakenc_flip_web.js";

const input_element = document.getElementById("input")! as HTMLTextAreaElement;
const output_element = document.getElementById("output")!;
const do_calc_element = document.getElementById("do-calc")! as HTMLButtonElement;
const add_time_element = document.getElementById("add-time")! as HTMLButtonElement;
const clear_element = document.getElementById("clear")! as HTMLButtonElement;

do_calc_element.onclick = () => {
    output_element.innerText = flip(input_element.value) ? "正面" : "反面";
}

add_time_element.onclick = () => {
    input_element.value = `${new Date().toISOString()} ${input_element.value}`;
}

clear_element.onclick = () => {
    input_element.value = "";
}
