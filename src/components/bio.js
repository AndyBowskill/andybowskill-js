/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/avatar.png"
        width={100}
        height={100}
        quality={95}
        alt="Andy Bowskill picture"
      />
      {author?.name && (
        <p style={{ maxWidth: 360 }}>
          Written by {author.name}, {author.summary}
          {' '}
          <a href="https://github.com/AndyBowskill">
            GitHub
          </a>
          {' | '}
          <a href="https://stackoverflow.com/users/247574/andy-bowskill">
            Stack Overflow
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
