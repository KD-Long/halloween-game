import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

import Experience from './components/Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Canvas
          
          // note this fixes the tone mapping (colors look better)
          onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}
          shadows={true}
        >
          {/* <Camera maxHeight={0}/> */}
          <Experience />
        </Canvas>
    </>
  )
}

export default App
