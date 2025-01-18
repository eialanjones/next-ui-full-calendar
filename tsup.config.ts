import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['app/index.ts'],
    format: ['esm', 'cjs'],
    dts: {
        entry: {
            index: 'app/index.ts'
        },
        resolve: true,
        compilerOptions: {
            moduleResolution: 'node'
        }
    },
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    treeshake: true,
    target: 'es2020',
});