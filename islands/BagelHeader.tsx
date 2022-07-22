/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function BagelHeader() {
    return (
        <nav class={tw`font-sans flex flex-col text-center sm:(flex-row text-left justify-between items-baseline) py-4 px-6 bg-white shadow w-full`}>
            <div class={tw`mb-2 sm:(mb-0)`}>
                <div class={tw`flex justify-left items-center`}>
                    {/* <a href="/" class={tw`fixed right-3 bottom-3 sm:hidden`}> 
                        <img src="home.svg" alt="Home" class={tw`h-14 w-14`} />
                    </a> */}
                    {/* <a href="/" class={tw`fixed right-3 bottom-3 h-16 w-16 rounded-full bg-black opacity-20 text-white text-center flex justify-center items-center uppercase font-bold sm:hidden`}>Home</a> */}
                    <a href="/" class={tw`hidden sm:flex pr-3 uppercase font-thin text-2xl border-r-2`}>Home</a>
                    {/* <a href="/" class={tw`hidden sm:flex px-3`}> 
                        <img src="home.svg" alt="Home" class={tw`h-12 w-12`} />
                    </a> */}
                    <a href="/bagels" class={tw`p-3 text-2xl font-semibold sm:font-medium no-underline hover:text-indigo-800`}>The Bagel Company</a>
                    <a href="/" class={tw`ml-1 pl-3 uppercase font-thin text-2xl border-l-2 sm:hidden`}>Home</a>

                </div>
            </div>
            <div class={tw`my-auto flex items-center`}>
                <a href="/bagels/stats" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Stats</a>
                <a href="/bagels/bagels" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Bagels</a>
            </div>
        </nav>
    )
}