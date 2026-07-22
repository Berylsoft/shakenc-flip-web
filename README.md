# 用cshake256算法抛硬币

## build

```
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --target web --out-dir . "path-to-rust-target/wasm32-unknown-unknown/release/shakenc_flip_web.wasm"
wasm-opt -O -o shakenc_flip_web_bg.wasm shakenc_flip_web_bg.wasm
esbuild --minify-whitespace --minify-syntax --format=esm --charset=utf8 --bundle main.ts --outdir=.
```

## AIGC声明

网页框架和CSS由本地LLM辅助生成。
