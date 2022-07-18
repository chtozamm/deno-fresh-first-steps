/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";

const btn = apply`inline-block p-3 text-center h-[50.5px] hover:(bg-[#ae80ff])`


// const Link = ({ children, href }: { children: Element | string, href: string }) => (
//     <a
//       href={href}
//       // class={tw`inline-block p-3 text-center h-[50.5px] hover:(bg-[#ae80ff])`}
//       class={tw`${btn}`}
//       onClick={event => {
//         event.preventDefault();
//         history.pushState(null, '', href);
//       }}
//     >
//       {children}
//     </a>
//   )

export default function GoHome() {
    return (
        <div class={tw`fixed top-0 right-0 p-3  text-gray-200 h-[50px] hover:(text-amber-200) transition-all duration-300 ease-linear cursor-pointer`}>
        <nav class={tw`inline-block`}>
            <a href="/"> 
              <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
        </nav>
        </div>
    )
}