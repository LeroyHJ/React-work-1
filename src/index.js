import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article>
    <Image></Image>
    <Title />
    <Author />
  </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg" alt="" />

const Title = () => <h1>I love you to the moon and back</h1>
const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));
