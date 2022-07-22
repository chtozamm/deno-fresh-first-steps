/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"
import BagelHeader from "../../islands/BagelHeader.tsx"

export default function App() {
    return (
        <main class={tw`min-h-screen`}>
            <BagelHeader />
            <section class={tw`flex justify-center items-center`}>
                <div class={tw`max-w-7xl py-12 px-6 sm:(px-6) lg:(py-24 px-8 flex items-center justify-between)`}>
                    <h2 class={tw`text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl`}>
                        <span class={tw`block`}>Ready to dive in?</span>
                        <span class={tw`block text-indigo-600`}>Find your bagel today.</span>
                    </h2>
                    <div class={tw`mt-8 flex justify-center lg:(mt-0 flex-shrink-0 ml-8)`}>
                        <div class={tw`inline-flex rounded-md shadow`}>
                            <a href="/bagels/bagels" class={tw`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700`}>Get started</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}