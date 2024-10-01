import React from 'react'
import * as THREE from 'three'

const Experience = () => {
    return (<>
        <mesh>
            <boxGeometry args={[1,1,1]}/>
            <meshBasicMaterial color={"red"}/>
        </mesh>
    </>
    )
}

export default Experience