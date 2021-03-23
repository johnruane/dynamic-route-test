import React from 'react';
import Link from 'next/link';
import fetcher from '../../lib/fetcher';
import ReactProgressiveImage from 'react-progressive-image';
import { CSSTransition } from 'react-transition-group';

const Search = ({ searchTerm, error }) => {
  return (
    <>
      <Link href="/" as="/">
        <a>Home</a>
      </Link>
      <h1>The text you searched for is: {searchTerm}</h1>
      <ReactProgressiveImage>
        {() => {
          return (
            <CSSTransition
              timeout={10000}
            >
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/d1ee0965c3d1957d720b8b9428e286c31d891c65-8092x5003.jpg?auto=format" width="200px" />
            </CSSTransition>
          )
        }
        }
      </ReactProgressiveImage>
      {error &&
        <p>There was an error: {error}</p>
      }
    </>
  )
}

export async function getServerSideProps(ctx) {
  const {
    query: { text },
    req,
  } = ctx;

  try {
    const response = await fetcher(`http://localhost:3000/api/d/${text}`);
    const { searchTerm } = await response;

    console.log(`Dynamic page search: ${searchTerm}`);

    return {
      props: {
        searchTerm
      }
    }
  } catch (error) {
    return {
      props: {
        error: error.message
      }
    }
  }

}

export default Search;