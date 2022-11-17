import React from 'react'

interface props {
    children : React.ReactNode;
}

export default function ParentFC(props : props) {
  return (
    <>
    <div>ParentFC</div>
    {props.children}
    </>
  )
}
