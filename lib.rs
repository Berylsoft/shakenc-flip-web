use wasm_bindgen::prelude::wasm_bindgen;

use cshake::{CShakeCustom, cshake_customs};

cshake_customs! {
    RAND_CUSTOM -> "__shakenc__random-generator"
}

#[wasm_bindgen]
pub fn flip(input: &str) -> bool {
    let [output] = RAND_CUSTOM.once_to_array(input.as_bytes());
    output <= 127
}
