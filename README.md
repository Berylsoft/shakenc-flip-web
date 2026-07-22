## build

```
wasm-bindgen --target web --out-dir ./wasm "path-to-rust-target/wasm32-unknown-unknown/release/cshake_web.wasm"
esbuild --minify-whitespace --minify-syntax --format=iife --charset=utf8 --bundle main.ts --outdir=.
```
