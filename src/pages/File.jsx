import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router'

import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/keymap/sublime'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/theme/ayu-mirage.css'

import { getFile, updateFile } from '../lib/requests'

export default function File() {
  const { fileID } = useParams()
  const history = useHistory()
  const [code, setCode] = useState('Loading... 👾')

  const handleSave = async () => {
    await updateFile(fileID, code)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const file = await getFile(fileID)
        setCode(file.text)
      } catch (error) {
        console.error(error)
        history.push('/')
      }
    }

    getData()
  }, [fileID, history])

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
