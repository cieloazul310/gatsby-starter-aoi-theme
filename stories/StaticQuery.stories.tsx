import * as React from 'react';
//import { useStaticQuery, graphql } from 'gatsby';

export default {
  title: 'Static Query',
};

export function StaticQuery() {
  /*
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  */
  const data = { name: 'Static Query' };
  return (
    <div>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
