import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['app/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    treeshake: true,
    target: 'es2020',
})