import React, { useState, useRef } from 'react';
import { useEditable } from 'use-editable';

const EditTwo = () => {
  const [code, setCode] = useState('function test() {}\nconsole.log("hello");');
  const editorRef = useRef(null);

  var x = useEditable(editorRef, setCode);

  console.log(code);

  return (
    <div className="App">
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }} ref={editorRef}>
        {code.split(/\r?\n/).map((content, i, arr) => (
          <React.Fragment key={i}>
            <span style={{ color: `hsl(${((i % 20) * 17) | 0}, 80%, 50%)` }}>{content}</span>
            {i < arr.length - 1 ? '\n' : null}
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
};

export default EditTwo;
