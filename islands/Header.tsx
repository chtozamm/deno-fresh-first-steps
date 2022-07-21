/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw, apply } from "@twind";

const link = apply`py-3 px-4 text-center h-[50px]`

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
        <nav>
            <div class={tw`hidden sm:flex justify-center sans font-base text-gray-900 hover:(text-gray-400) text-md uppercase`}>
                <a href="/" class={tw`${link}`}>Home</a>
                <a href="/bitcoin/" class={tw`${link}`}>Bitcoin</a>
                {/* <a href="/">About</a> */}
                {/* <a href="/">Database</a> */}
                <a href="/discord-nav/" class={tw`${link}`}>Discord</a>
                <a href="/bagels/" class={tw`${link}`}>Bagels</a>
            </div>
            <div class={tw`flex sm:hidden p-3 h-[50px] justify-between items-center font-base text-md`}>
                <div>
                    <span onClick={() => setIsNavOpen((prev) => !prev)}>    
                        <svg xmlns="http://www.w3.org/2000/svg" class={tw`w-10 h-10`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                    <div class={isNavOpen ? tw`flex flex-col absolute w-screen h-screen bg-gray-900 text-amber-200 transition-all duration-100 ease-linear visible children:(border-white border-b-1)` : tw`flex flex-col w-[200px] h-[600px] text-white absolute invisible`}>
                        <a href="/" class={tw`${link}`}>Home</a>
                        <a href="/bitcoin/" class={tw`${link}`}>Bitcoin</a>
                        {/* <a href="/">About</a> */}
                        {/* <a href="/">Database</a> */}
                        <a href="/discord-nav/" class={tw`${link}`}>Discord</a>
                        <a href="/bagels/" class={tw`${link}`}>Bagels</a>
                    </div>
                </div>
                <h1>chtozamm's page</h1>
            </div>
        </nav>
        </header>
    )
}