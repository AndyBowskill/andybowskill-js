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
        width={50}
        height={50}
        quality={95}
        alt="Picture of Andy Bowskill"
      />
      <div style={{ maxWidth: 320 }}>
        <p>
          Written by Andy Bowskill. {author.summary}
        </p>
        <p>
          <a href="https://github.com/AndyBowskill" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          {' | '}
          <a href="https://stackoverflow.com/users/247574/andy-bowskill" target="_blank" rel="noreferrer noopener">
            Stack Overflow
          </a>
          {' | '}
          <a href="mailto:andybowskill@protonmail.com" target="_blank" rel="noreferrer noopener">
            Email
          </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
