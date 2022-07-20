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
            <section class={tw`mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:(px-8 py-24)`}>
                <div class={tw`space-y-4 mb-12 lg:mb-8`}>
                    <h2 class={tw`text-4xl font-extrabold tracking-tight sm:text-4xl`}>Find the right bagel for yourself!</h2>
                </div>

                <div class={tw`grid grid-cols-1 gap-y-10 items-center sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:(grid-cols-4 gap-x-8)`}>
                    <div class={tw`group`} key="Salmon Bagel">
                        <div class={tw`w-full bg-gray-200 rounded-lg overflow-hidden`}>
                            <img class={tw`w-full h-full object-center object-cover group-hover:opacity-75`} alt="" src="https://images.unsplash.com/photo-1592767049184-0fda840ae4e7?w=1080" />
                        </div>
                        <h3 class={tw`mt-4 text-sm text-gray-700`}>Salmon Bagel</h3>
                        <p class={tw`mt-1 text-lg font-medium text-gray-900`}>$5.39</p>
                    </div>

                    <div class={tw`group`} key="Cream Cheese Bagel">
                        <div class={tw`w-full bg-gray-200 rounded-lg overflow-hidden`}>
                            <img class={tw`w-full h-full object-center object-cover group-hover:opacity-75`} alt="" src="https://images.unsplash.com/photo-1585841393012-e4ded4a6e2d0?w=1080" />
                        </div>
                        <h3 class={tw`mt-4 text-sm text-gray-700`}>Cream Cheese Bagel</h3>
                        <p class={tw`mt-1 text-lg font-medium text-gray-900`}>$2.49</p>
                    </div>

                    <div class={tw`group`} key="Bacon and Rucola Bagel">
                        <div class={tw`w-full bg-gray-200 rounded-lg overflow-hidden`}>
                            <img class={tw`w-full h-full object-center object-cover group-hover:opacity-75`} alt="" src="https://images.unsplash.com/photo-1603712469481-e25f0bdb63aa?w=1080" />
                        </div>
                        <h3 class={tw`mt-4 text-sm text-gray-700`}>Bacon and Rucola Bagel</h3>
                        <p class={tw`mt-1 text-lg font-medium text-gray-900`}>$4.19</p>
                    </div>

                    <div class={tw`group`} key="Egg and Ham Bagel">
                        <div class={tw`w-full bg-gray-200 rounded-lg overflow-hidden`}>
                            <img class={tw`w-full h-full object-center object-cover group-hover:opacity-75`} alt="" src="https://images.unsplash.com/photo-1605661479369-a8859129827b?w=1080" />
                        </div>
                        <h3 class={tw`mt-4 text-sm text-gray-700`}>Egg and Ham Bagel</h3>
                        <p class={tw`mt-1 text-lg font-medium text-gray-900`}>$3.79</p>
                    </div>

                    <div class={tw`group`} key="Jam Bagel">
                        <div class={tw`w-full bg-gray-200 rounded-lg overflow-hidden`}>
                            <img class={tw`w-full h-full object-center object-cover group-hover:opacity-75`} alt="" src="https://images.unsplash.com/photo-1579821401035-450188d514da?w=1080" />
                        </div>
                        <h3 class={tw`mt-4 text-sm text-gray-700`}>Jam Bagel</h3>
                        <p class={tw`mt-1 text-lg font-medium text-gray-900`}>$2.99</p>
                    </div>

                    <div class={tw`group`} key="Bagel Sandwich with Egg, Ham, Tomato, Lettuce & Mayo">
                        <div class={tw`w-full bg-gray-200 rounded-lg overflow-hidden`}>
                            <img class={tw`w-full h-full object-center object-cover group-hover:opacity-75`} alt="" src="https://images.unsplash.com/photo-1627308595325-182f10f20126?w=1080" />
                        </div>
                        <h3 class={tw`mt-4 text-sm text-gray-700`}>Bagel Sandwich with Egg, Ham, Tomato, Lettuce & Mayo</h3>
                        <p class={tw`mt-1 text-lg font-medium text-gray-900`}>$5.99</p>
                    </div>

                </div>
            </section>
        </main>
    )
}