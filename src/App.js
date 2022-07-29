import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} />

      <ReactMarkdown className="markdown-editor" children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
    </div>
  );
}