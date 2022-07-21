/** @jsx h */
import { h, FunctionComponent, createContext } from "preact";
import { useState } from 'preact/hooks';
import { apply, tw } from "@twind";
import { PageProps } from "$fresh/server.ts"

export default function Page(params:PageProps) {
  console.log(params)
  return (
    <div class={tw`flex`}>
      <div
        class={tw`fixed left-0 h-screen w-16 
                       flex flex-col 
                       bg-gray-900 text-white shadow-lg`}
      >
        <a href="../">
          <SideBarIcon
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          text='Home page'
        /></a>
        <SideBarIcon
          icon={
            <svg class={tw`h-8 w-8`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          }
        />
        <SideBarIcon
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
        <SideBarIcon
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
        <SideBarIcon
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          }
          text='Toggle dark/light mode 🌗'
        />
      </div>
    </div>
  );
}

const SideBarIcon = ({icon, text = 'tooltip 💡'}:{icon:preact.JSX.Element, text?: string}) => (
  <div class={tw`${sidebar_icon}`}>
    {icon}

    <span class={tw`${sidebar_tooltip}`}>
    {text}
    </span>
  </div>
);

const sidebar_icon = apply
    `relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto 
    bg-gray-800 text-green-500 rounded-3xl shadow-lg
    hover:(text-white bg-green-600 rounded-xl) transition-all duration-300 ease-linear cursor-pointer hover:children:(scale-100)`;

const sidebar_tooltip = apply
    `absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold tansition-all duration-100 scale-0 origin-left`;

// const ThemeContext = createContext(null)

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"))
//   }
//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <div class="App" id="light"></div>
//     </ThemeContext.Provider>
//   )
// }