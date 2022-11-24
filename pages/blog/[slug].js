import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/button'
import styles from '../../styles/post.module.scss'

const components = { Button, SyntaxHighlighter }

const PostPage = ({ serializedContent }) => {
    const { frontmatter } = serializedContent

    

return (
    <>

    <Head>
        <title>Blog do Justo</title>
    </Head>

    <div className={styles.PostPage}>
    <div className={styles.mdStyle}>
    <h1 className={styles.title}>{frontmatter.title}</h1>
    <MDXRemote {...serializedContent} components={ components } />
    </div>
    </div>
    </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.split('.') [0]
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const markdown = fs.readFileSync(path.join('posts', params.slug + '.mdx'), 'utf-8')

    const serializedContent = await serialize(markdown, {
        format: 'mdx',
        parseFrontmatter: true,
        scope: '', 
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: []
        }
    })

    return {
        props: {
            serializedContent,
        },
    }

    
}

export default PostPage