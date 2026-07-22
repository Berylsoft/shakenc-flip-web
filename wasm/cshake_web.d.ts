/* tslint:disable */
/* eslint-disable */
export class Context {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  absorb_zero(len: number): void;
  squeeze_xor(output: Uint8Array): void;
  chain_absorb(input: Uint8Array): Context;
  squeeze_skip(len: number): void;
  squeeze_to_bytes(len: number): Uint8Array;
  reset(): void;
  absorb(input: Uint8Array): void;
  static create(custom: Custom): Context;
  custom(): Custom;
}
export class Custom {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  static from_bytes(name?: Uint8Array | null, custom_string?: Uint8Array | null): Custom;
  static from_string(name?: string | null, custom_string?: string | null): Custom;
  once_to_bytes(input: Uint8Array, len: number): Uint8Array;
  static shake(): Custom;
  create(): Context;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_context_free: (a: number, b: number) => void;
  readonly __wbg_custom_free: (a: number, b: number) => void;
  readonly context_absorb: (a: number, b: number, c: number) => void;
  readonly context_absorb_zero: (a: number, b: number) => void;
  readonly context_chain_absorb: (a: number, b: number, c: number) => number;
  readonly context_create: (a: number) => number;
  readonly context_custom: (a: number) => number;
  readonly context_reset: (a: number) => void;
  readonly context_squeeze_skip: (a: number, b: number) => void;
  readonly context_squeeze_to_bytes: (a: number, b: number) => [number, number];
  readonly context_squeeze_xor: (a: number, b: number, c: number, d: any) => void;
  readonly custom_from_bytes: (a: number, b: number, c: number, d: number) => number;
  readonly custom_from_string: (a: number, b: number, c: number, d: number) => number;
  readonly custom_once_to_bytes: (a: number, b: number, c: number, d: number) => [number, number];
  readonly custom_shake: () => number;
  readonly custom_create: (a: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
