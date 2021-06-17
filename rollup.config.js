import {terser} from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve'
import nodeResolve from 'rollup-plugin-node-resolve'

const isBuild = process.env.NODE_ENV == "build";

const buildPlugins = [
    nodeResolve({
        ignoreGlobal: false,
        include: ['node_modules/**']
    })
];

const devPlugins = [
    nodeResolve({
        ignoreGlobal: false,
        include: ['node_modules/**']
    }),
    serve('example')
]

export default {
    input: 'src/middle-manager.js',
    output: [{
        file: 'dist/middle-manager.development.esm.js',
        format: 'es'
    },
    {
        file: 'example/example.js',
        format: 'es'
    },
    {
        file: 'dist/middle-manager.production.esm.js',
        format: 'es',
        plugins: [terser()]
    }],
    plugins: isBuild ? buildPlugins : devPlugins;
}