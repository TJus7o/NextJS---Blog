import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import TagFilter from '../components/tag-filter'
import { useEffect, useState } from 'react'

const Home = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const allTagSet = posts.reduce((acc, post) => {
    post.frontmatter.tags?.map(tag => acc.add(tag))
    return acc
  }, new Set([]))

  const allTagsArr = [...allTagSet].sort((a,b) => a.localeCompare(b))
  allTagsArr.unshift('all')

  useEffect(()=> {
    let tempPosts = [...posts]
    if(selectedTag && selectedTag !== 'all'){
     tempPosts = posts.filter(post =>
       post.frontmatter.tags.includes(selectedTag))
    }
    setFilteredPosts(tempPosts)
  }, [selectedTag, posts])

  return (
    <>
      <Head>
        <title>Front End Blog</title>
      </Head>


      <TagFilter selectedTag={selectedTag} 
      setSelectedTag={setSelectedTag}
      tags={allTagsArr}
      />

      <div className={styles.articleList}>
        {posts.filter((post) => {
          return post.frontmatter.tags.includes (selectedTag) || selectedTag === 'all'
        }).map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <a className={styles.item}>
              <div className={styles.thumbnail}>
                <Image src={post.frontmatter.thumbnailUrl} alt="thumbnail" width={500} height={400} objectFit="cover" />
              </div>
              <div>
                <h2 className={styles.title}>{post.frontmatter.title}</h2>
                <p className={styles.description}>{post.frontmatter.description}</p>
                <p className={styles.date}>{post.frontmatter.date}</p>
                <div class="chip">
                <span className={styles.author_link}>{post.frontmatter.author}</span>
                  </div>
              </div>
            </a>
          </Link>
        ))}
        
      </div>
      
    </>
  )
}

export const getStaticProps = async () => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data } = matter(markdownWithMeta)

    return {
      frontmatter: data,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: { posts },
  }
}

export default Home
