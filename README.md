# 用cshake256算法抛硬币

## build

在`keccak-state`项目下：
```
cargo build -p cshake-web --target wasm32-unknown-unknown --release
```

在本项目下：
```
wasm-bindgen --target web --out-dir ./wasm "path-to-rust-target/wasm32-unknown-unknown/release/cshake_web.wasm"
esbuild --minify-whitespace --minify-syntax --format=iife --charset=utf8 --bundle main.ts --outdir=.
```

## AIGC声明

网页框架和CSS由本地LLM辅助生成。
