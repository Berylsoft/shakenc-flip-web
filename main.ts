import { Custom } from "./wasm/cshake_web.js";

declare global {
    var calc: typeof doCalc;
}

const doCalc = () => {
    const input_element = document.getElementById("input")! as HTMLInputElement;
    const output_element = document.getElementById("output")!;
    const input_text = input_element.value;
    const text_encoder = new TextEncoder();
    const input_binary = text_encoder.encode(input_text);
    const cshake_custom = Custom.from_string("", "__shakenc__random-generator");
    const output_bytes = cshake_custom.once_to_bytes(input_binary, 1);
    const output_byte = output_bytes[0];
    const output_bool = (output_byte <= 127) ? true : false;
    const output_text = output_bool ? "正面" : "反面";
    output_element.innerText = output_text;
}

globalThis.calc = doCalc;
