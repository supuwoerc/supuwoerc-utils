import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'
// import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'
import path from 'path'
import { fileURLToPath } from 'url'

const getPlugins = (needCleaner = false) => {
    const plugins = [
        eslint(),
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
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
        }),
        // terser(),
        needCleaner ? cleaner({ targets: ['./dist/'], silent: false }) : null,
    ].filter(Boolean)
    return plugins
}

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'supuwoercUtils',
            exports: 'named',
        },
        external: [],
        plugins: getPlugins(true),
    },
    {
        input: 'src/index.ts',
        external: [],
        plugins: getPlugins(),
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'es',
                exports: 'named',
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
                exports: 'named',
            },
        ],
    },
]
