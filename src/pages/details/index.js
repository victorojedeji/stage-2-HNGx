import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsPage() {
  const {id} = useParams();


  return (
    <section className='pt-[80px]'>this is DetailsPage for: {id} </section>
  )
}
