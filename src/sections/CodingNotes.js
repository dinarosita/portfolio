import React from "react";
import Sitelink from "../components/Sitelink";
import Subsection from "../components/Subsection";

export default function CodingNotes() {
  return (
    <Subsection>
      <h3>Coding notes</h3>
      <Sitelink
        title="Codeyluwak on Basic Web"
        url="https://dinarosita.github.io/codeyluwak/"
      />
      <Sitelink
        title="Codeyluwak on React JS"
        url="https://dinarosita.github.io/codeyluwakonreact/"
      />
      <Sitelink
        title="Codeyluwak on React Hooks"
        url="https://dinarosita.github.io/react-hooks/"
      />
    </Subsection>
  );
}
