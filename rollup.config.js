import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'src/main.js',
	dest: 'bundle.js',
	format: 'iife',
	plugins: [
		nodeResolve({ skip: [ 'jquery' ] }),
		commonjs()
	],
	external: [ 'jquery' ]
};
