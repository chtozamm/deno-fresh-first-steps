/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"

export default function App() {
    return (
        <main class={tw`min-h-screen`}>
            <nav class={tw`font-sans flex flex-col text-center sm:(flex-row text-left justify-between items-baseline) py-4 px-6 bg-white shadow w-full`}>
                <div class={tw`mb-2 sm:(mb-0)`}>
                    <a href="/bagels" class={tw`text-2xl no-underline hover:text-indigo-800`}>The Bagel Company</a>
                </div>
                <div>
                    <a href="/bagels/stats" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Stats</a>
                    <a href="/bagels/bagels" class={tw`text-lg no-underline hover:text-indigo-800 ml-3`}>Bagels</a>
                </div>
            </nav>
            <section class={tw`p-5`}>
                <h3 class={tw`text-lg leading-6 font-medium text-gray-900`}>Last 30 days</h3>
                <dl class={tw`mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3`}>
                    <div class={tw`px-4 py-5 shadow rounded-lg bg-white overflow-hidden sm:p-6`} key="Total Sales">
                        <dt class={tw`text-sm font-medium text-gray-500 truncate`}>Total Sales</dt>
                        <dd class={tw`mt-1 text-3xl font-semibold text-gray-900`}>41,897</dd>
                    </div>
                    <div class={tw`px-4 py-5 shadow rounded-lg bg-white overflow-hidden sm:p-6`} key="Available Bagels">
                        <dt class={tw`text-sm font-medium text-gray-500 truncate`}>Available Bagels</dt>
                        <dd class={tw`mt-1 text-3xl font-semibold text-gray-900`}>357</dd>
                    </div>
                    <div class={tw`px-4 py-5 shadow rounded-lg bg-white overflow-hidden sm:p-6`} key="Avg. Open Rate">
                        <dt class={tw`text-sm font-medium text-gray-500 truncate`}>Avg. Open Rate</dt>
                        <dd class={tw`mt-1 text-3xl font-semibold text-gray-900`}>94.16%</dd>
                    </div>
                </dl>
                <div class={tw`flex items-center justify-center`}>
                <a href="/" class={tw`absolute bottom-5 p-3 text-base no-underline text-amber-500 hover:text-amber-400`}>Return home</a>
                </div>
            </section>
        </main>
    )
}