/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx"
import { PageProps } from "$fresh/server.ts";
 
export default function Home() {
  return (
    <main class={tw`h-screen w-screen`}>
      {/* <title>Hello</title> */}
      <Header />
      {/* <button class={tw`btn`}>Click here</button> */}
      <section class={tw`mx-auto pt-[50px] h-screen w-[50%] min-w-[300px] text-center`}>
        <h1 class={tw`pt-5 font(semibold serif) text-3xl`}>Hello there</h1>
        <br />
        <p class={tw`p-5 text-base`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestias sit, assumenda harum labore esse eveniet minus voluptas obcaecati atque nisi tenetur excepturi delectus placeat, debitis sint hic id perferendis!</p>
      </section>
     {/* <script>{props.params.title = "Goodbye World!"}</script> */}
    </main>
  );
}
