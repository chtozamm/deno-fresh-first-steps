/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/Header.tsx"
import { PageProps } from "$fresh/server.ts";
 
export default function Home() {
  return (
    <main class={tw`mx-h-screen mx-w-screen sans`}>
      {/* <title>Hello</title> */}
      <Header />
      {/* <button class={tw`btn`}>Click here</button> */}
      <section class={tw`mt-[50px] mx-auto flex flex-col items-center text-center justify-center`}>
        <div class={tw`px-4`}>
          <h1 class={tw`py-12 font-semibold text-2xl`}>Hello there!</h1>
          <br />
          <p class={tw`text-base pb-3`}>You might want to check out <a href="/bagels/" class={tw`text-amber-900 hover:text-amber-600`}>bagels 🥯</a> page...</p>
          <p>But don't do that if you're hungry! There's no way to order anything yet 😅</p>
        </div>
      </section>
     {/* <script>{props.params.title = "Goodbye World!"}</script> */}
    </main>
  );
}
