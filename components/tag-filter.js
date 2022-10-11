import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/tag-filer.module.scss'

function TagFilter({ tags, selectedTag, setSelectedTag, className }) {
    const router = useRouter();
    return (
      <div className={(styles.container, className)}>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={(
              styles.tagButton,
              selectedTag === tag && styles.selected
            )}
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