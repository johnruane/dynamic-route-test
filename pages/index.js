import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [dynamicSearchQuery, setDynamicSearchQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const pushDynamicQuery = (e, query) => {
    e.preventDefault();
    router.push(`/dynamic/search?text=${query}`);
  };

  const pushStaticQuery = (e, query) => {
    e.preventDefault();
    router.push(`/static/search?text=${query}`);
  };

  return (
    <div className="container">
      <form
        role="search"
        onSubmit={(e) => {
          return pushDynamicQuery(e, dynamicSearchQuery);
        }}
      >
        <label>Enter a search word (dynamic): </label>
        <input
          type="searchtext"
          onChange={(e) => setDynamicSearchQuery(e.target.value)}
          value={dynamicSearchQuery}></input>
        <button
          type="submit"
        >Search</button>
      </form>
      <form
        role="search"
        onSubmit={(e) => {
          return pushStaticQuery(e, searchQuery);
        }}
      >
        <label>Enter a search word (static): </label>
        <input
          type="searchtext"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}></input>
        <button
          type="submit"
        >Search</button>
      </form>
    </div>
  )
}
