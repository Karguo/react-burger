import React from 'react'

export default function Layer(props) {
  return <div onClick={props.onRemove}>
    <div className={props.name}>{props.name}</div>
    </div>
}
