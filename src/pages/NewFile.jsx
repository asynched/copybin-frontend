import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'

import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/keymap/sublime'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/theme/ayu-mirage.css'
import styled from 'styled-components'

import { saveFile } from '../lib/requests'

export default function NewFile() {
  const history = useHistory()
  const [code, setCode] = useState(
    "# Hello, world!\n\nThis is our app. xD\n\nHere you can save your files and stuff.\n\nCool, isn't it? 🆒\n",
  )

  const handleSave = () => {
    toast.promise(
      async () => {
        const { id: fileID } = await saveFile(code)
        history.push(`/file/${fileID}`)
      },
      {
        pending: 'Saving...',
        success: 'File saved.',
        error: 'Error whilst trying to save the file, try again.',
      },
    )
  }

  return (
    <Container>
      <div className="options">
        <button onClick={handleSave}>Save</button>
      </div>
      <CodeMirror
        value={code}
        onChanges={editor => setCode(editor.getValue())}
        options={{
          theme: 'ayu-mirage',
          keyMap: 'sublime',
          mode: 'markdown',
          lineWrapping: true,
          smartIndent: true,
        }}
        height={'100vh'}
      />
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  div.options {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;

    button {
      padding: 0.25rem 1rem;

      color: var(--background);

      border: none;

      background: var(--primary);
    }
  }
`
