/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function ShowURL(props: PageProps) {
  return <div>You are on the page '{props.url.href}'.</div>;
}