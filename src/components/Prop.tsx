import React from 'react'

interface props{
  user : {
    nama : string,
    umur : number
  };
  title : string
  gaWajib? : boolean
}

export default function Prop(props : props) {
  return (
    <>
      <div>PROPS</div>
      <div>{props.title}</div>
      <div>nama : {props.user.nama}</div>
      <div>umur : {props.user.umur}</div>
      {props.gaWajib && (
        <div>ga wajib : {props.gaWajib ? 'true' : 'false'}</div>
      )}
    </>
  )
}
