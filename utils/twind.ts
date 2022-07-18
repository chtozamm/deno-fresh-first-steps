import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup, apply } from "twind";
import * as colors from 'twind/colors'
export * from "twind";


export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  preflight: {
    body: apply('bg-gray-800 text-white'),
  },
  plugins: {
  //   btn: apply`
  //     py-2 px-4
  //     font-semibold
  //     rounded-lg shadow-md
  //     focus:(outline-none ring(2 indigo-400 opacity-75))
  //     hover:(bg-indigo-400 )
  //  `,
  },
  theme: {
    fontFamily: {
      sans: ['Calibri', 'Helvetica', 'sans-serif'],
      serif: ['Times', 'serif'],
    },
    extend: {
      colors,
      // colors: {
      //   primary: '#202225',
      //   secondary: '#5865f2',
      //   gray: {
      //     900: '#202225',
      //     800: '#2f3136',
      //     700: '#36393f',
      //     600: '#4f535c',
      //     400: '#d4d7dc',
      //     300: '#e3e5e8',
      //     200: '#ebedef',
      //     100: '#f2f3f5',
      //   },
      //   green: {
      //     600: '#3ba59d',
      //     500: '#3ba55d',
      //   },
      // },
      
    },
  },
};
if (IS_BROWSER) setup(config);
