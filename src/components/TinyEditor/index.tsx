"use client";
import { Dispatch, SetStateAction, useEffect, useRef, memo } from "react";
import { Editor } from "@tinymce/tinymce-react";

type Props = {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  theme: string;
};
const TinyEditor = (props: Props) => {
  const editorRef = useRef(null);

  useEffect(() => {
    console.log(props.theme);
    return () => (editorRef.current = null);
  }, [props.theme]);
  return (
    <Editor
      apiKey="f7rad4mfsvzwegn8e0wfou3u4ogfsv0i31qbw0puz0n7lx6g"
      onInit={(evt, editor) => (editorRef.current = editor)}
      onEditorChange={() => props.setValue(editorRef.current.getContent())}
      {...props}
      init={{
        skin: props.theme === "dark" ? "oxide-dark" : "oxide",
        content_css: props.theme === "dark" ? "dark" : "default",
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default TinyEditor;
