import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { night:'#0e1714', gold:'#e5bc75', green:'#78896a', cream:'#f4eddf' }, fontFamily: { sans:['Arial','sans-serif'], serif:['Georgia','serif'] } } }, plugins: [] } satisfies Config;
