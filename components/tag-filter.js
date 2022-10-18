import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/tag-filter.module.scss'

function TagFilter({ tags, selectedTag, setSelectedTag, className }) {
    const router = useRouter();
    return (
      <div className={styles.container}>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={styles.button}
            onClick={() => {
              setSelectedTag(tag);
              router.push('/');
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }
  
  export default TagFilter;