# 用cSHAKE256算法抛硬币

## build

bash/PowerShell

```
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --target web --out-dir ./dist "path-to-rust-target/wasm32-unknown-unknown/release/shakenc_flip_web.wasm"
wasm-opt -O dist/shakenc_flip_web_bg.wasm -o dist/shakenc_flip_web_bg.wasm
cp index.html dist/index.html
esbuild --minify style.css --outdir=./dist
esbuild --minify-whitespace --minify-syntax --format=esm --charset=utf8 --bundle main.ts --outdir=./dist
rm dist/shakenc_flip_web_bg.wasm.d.ts
rm dist/shakenc_flip_web.d.ts
rm dist/shakenc_flip_web.js
```

## AIGC声明

网页框架和CSS由本地LLM辅助生成。
