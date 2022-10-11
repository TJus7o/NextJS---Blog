import React from 'react'




export const getStaticPaths = async () => {
  const res = await fetch ('') //inserir caminho dos autores?
  const data = await res.json()

  const paths = data.map(author => {
    return {
      params: { id: author.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch ('' + id) //inserir caminho dos autores?
  const data = await res.json()

  return {
    props: { author: data }
  }
}

export default function ({ author }) {
  return (
    <div>
    <h1>{ author.name }</h1>
    <p>{ author.description }</p>
    </div>
  )
}
