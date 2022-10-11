import React from 'react'
import Link from 'next/link'


const Chip = ({ author } ) => {
  return (
    <div>
    {authors?.map(author => (
      <Link href={'/pages/authors' + author.id} key={author.id}>
        <a className={styles.single}>
          <h3>{ author.name }</h3>
        </a>
      </Link>
    ))}

  </div>
  )
}

export default Chip