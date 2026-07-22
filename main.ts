import { Custom } from "./wasm/cshake_web.js";

declare global {
    var doCalc: typeof do_calc;
    var addTime: typeof add_time;
}

const input_element = document.getElementById("input")! as HTMLTextAreaElement;
const output_element = document.getElementById("output")!;
const text_encoder = new TextEncoder();
const cshake_custom = Custom.from_string("", "__shakenc__random-generator");

const do_calc = () => {
    const input_text = input_element.value;
    const input_binary = text_encoder.encode(input_text);
    const output_bytes = cshake_custom.once_to_bytes(input_binary, 1);
    const output_byte = output_bytes[0];
    const output_bool = (output_byte <= 127) ? true : false;
    const output_text = output_bool ? "正面" : "反面";
    output_element.innerText = output_text;
}

const add_time = () => {
    input_element.value = (new Date()).toISOString() + " " + input_element.value;
}

globalThis.doCalc = do_calc;
globalThis.addTime = add_time;
