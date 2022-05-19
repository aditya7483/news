import Loading from './imgs/Loading.gif'

import React from 'react'

export default function Spinner() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <img src={Loading} style={{width: '22rem' }} alt='Loading...'/>

        </div>
    )
}
