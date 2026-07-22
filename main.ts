import { Custom } from "./wasm/cshake_web.js";

const input_element = document.getElementById("input")! as HTMLTextAreaElement;
const output_element = document.getElementById("output")!;
const do_calc_element = document.getElementById("do-calc")! as HTMLButtonElement;
const add_time_element = document.getElementById("add-time")! as HTMLButtonElement;
const clear_element = document.getElementById("clear")! as HTMLButtonElement;
const text_encoder = new TextEncoder();
const cshake_custom = Custom.from_string("", "__shakenc__random-generator");

do_calc_element.onclick = () => {
    const input_text = input_element.value;
    const input_binary = text_encoder.encode(input_text);
    const output_bytes = cshake_custom.once_to_bytes(input_binary, 1);
    const output_byte = output_bytes[0];
    const output_bool = (output_byte <= 127) ? true : false;
    const output_text = output_bool ? "正面" : "反面";
    output_element.innerText = output_text;
}

add_time_element.onclick = () => {
    input_element.value = `${new Date().toISOString()} ${input_element.value}`;
}

clear_element.onclick = () => {
    input_element.value = "";
}
