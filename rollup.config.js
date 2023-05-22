import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'
import path from 'path'
import { fileURLToPath } from 'url'
const entries = ['src/index.ts']
const plugins = [
    eslint(),
    babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: [['env', { modules: false }]],
    }),
    resolve({
        preferBuiltins: true,
    }),
    alias({
        entries: [
            {
                find: '@',
                replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
            },
        ],
    }),
    json(),
    typescript(),
    commonjs(),
    esbuild(),
    terser(),
    cleaner({ targets: ['./dist/'], silent: false }),
]

export default [
    ...entries.map((input) => ({
        input,
        output: [
            {
                file: input.replace('src/', 'dist/').replace('.ts', '.umd.js'),
                format: 'umd',
                name: 'template.min.js',
            },
            {
                file: input.replace('src/', 'dist/').replace('.ts', '.esm.js'),
                format: 'esm',
            },
            {
                file: input.replace('src/', 'dist/').replace('.ts', '.common.js'),
                format: 'cjs',
            },
        ],
        external: [],
        plugins,
    })),
    ...entries.map((input) => ({
        input,
        output: {
            file: input.replace('src/', '').replace('.ts', '.d.ts'),
            format: 'esm',
        },
        external: [],
        plugins: [dts({ respectExternal: true })],
    })),
]
