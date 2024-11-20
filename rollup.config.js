import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

/** @type {import('rollup').RollupOptions[]} */
export default {
    input: './src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: false,
        name: 'index',
    },
    plugins: [
        json(),
        commonjs(), // commonjs
        resolve({
            preferBuiltins: false,
        }), // node_modules模块
        babel({ babelHelpers: 'bundled', exclude: 'node_modules' }),
        typescript({
            tsconfig: './tsconfig.json',
        }), // ts语法
        terser(),
    ],
}
