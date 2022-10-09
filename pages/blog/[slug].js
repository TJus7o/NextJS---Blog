import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styles from '../../styles/post.module.scss'
import Button from '../../components/button'

const components = { Button, SyntaxHighlighter }

const PostPage = ({ serializedContent }) => {
    const { frontmatter } = serializedContent

return (
    <div className={styles.PostPage}>
    <h1>{frontmatter.title}</h1>
    <MDXRemote {...serializedContent} components={ components } />
    </div>
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
        scope: '', //podemos fornecer variáveis aos ficheiros mdx via scope
        mdxOptions: {
            remarkPlugins: [], //podemos colocar plugins para melhorar o aspecto
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