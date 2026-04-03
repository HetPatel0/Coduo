import "./App.css";
import { Editor } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco"
import { useRef } from "react";
function App() {
  const editorRef = useRef(null) 
  const handleMount = (editor) => {
    editor.current = editor
  }
  return (
    <>
      <main className="h-screen w-full p-4 bg-gray-950 flex gap-4">
        <aside className="h-full w-1/4  bg-amber-50 rounded-lg  "></aside>
        <section className="w-3/4 bg-neutral-800 rounded-lg overflow-hidden ">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue="//some content"
            theme="vs-dark"
          />
        </section>
      </main>
    </>
  );
}
export default App;
