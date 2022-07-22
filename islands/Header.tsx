/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw, apply } from "@twind";

const link = apply`py-3 px-4 text-center h-[50px] font-base text-gray-900 hover:(text-gray-400) text-md uppercase`
const linkMobile = apply`flex bg-white justify-center items-center shadow py-3 px-4 text-center h-[75px] font-thin text-gray-900 hover:(text-gray-400) text-xl uppercase`
const navMobile = apply`flex flex-col w-screen absolute top-[51px] duration-300`

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

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header class={tw`fixed top-0 h-[50px] w-screen bg-white shadow`}>
        <nav class={tw`font-sans`}>
            <div class={tw`hidden sm:flex justify-center`}>
                <a href="/" class={tw`${link}`}>Home</a>
                <a href="#" class={tw`${link}`}>Bitcoin</a>
                {/* <a href="/">About</a> */}
                {/* <a href="/">Database</a> */}
                <a href="#" class={tw`${link}`}>Discord</a>
                <a href="/bagels/" class={tw`${link}`}>Bagels</a>
                <a href="#" class={tw`${link} hover:scale-75 transition-all duration-100 ease-linear`}>
                    <img src="github.svg" alt="GitHub" class={tw`h-6 w-6`} />
                </a>
            </div>
            <div class={tw`flex sm:hidden p-3 h-[50px] justify-between items-center font-base text-md`}>
                <div>
                    <span onClick={() => setIsNavOpen((prev) => !prev)}>    
                        <svg xmlns="http://www.w3.org/2000/svg" class={isNavOpen ? tw`w-10 h-10 duration-300 ease-linear rotate-180` : tw`tw-10 h-10 duration-300 ease-linear rotate-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                    <div class={isNavOpen ? tw`${navMobile} left-0 visible` : tw`${navMobile} left-[-100%] invisible` }>
                        <a href="/" class={tw`${linkMobile}`}>Home</a>
                        <a href="#" class={tw`${linkMobile}`}>Bitcoin</a>
                        {/* <a href="/">About</a> */}
                        {/* <a href="/">Database</a> */}
                        <a href="#" class={tw`${linkMobile}`}>Discord</a>
                        <a href="/bagels/" class={tw`${linkMobile}`}>Bagels</a>
                        <a href="#" class={tw`${linkMobile}`}>GitHub</a>
                    </div>
                </div>
                <h1>chtozamm's page</h1>
            </div>
        </nav>
        </header>
    )
}