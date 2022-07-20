/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";

const btn = apply`inline-block p-3 text-center h-[50.5px] hover:(bg-[#ae80ff])`

const link = apply`inline-block p-3 text-center h-[50.5px] hover:(bg-[#ae80ff])`

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
    return (
        <header class={tw`fixed top-0  text-white h-[50px] w-screen bg-[#673ab8]`}>
        <nav class={tw`inline-block`}>
            <a href="/" class={tw`${link}`}>Home</a>
            <a href="/bitcoin/" class={tw`${link}`}>Bitcoin Price 🪙</a>
            {/* <a href="/">About</a> */}
            {/* <a href="/">Database</a> */}
            <a href="/discord-nav/" class={tw`${link}`}>Discord</a>
            <a href="/bagels/" class={tw`${link}`}>Bagels 🥯</a>

            {/* <Link href="/">Login</Link> */}
        </nav>
        </header>
    )
}