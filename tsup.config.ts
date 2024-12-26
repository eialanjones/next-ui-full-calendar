import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['app/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
})