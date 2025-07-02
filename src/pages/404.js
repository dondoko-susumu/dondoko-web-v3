import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h1>いや、どこ見とんねん</h1>
    <div>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
      こっこから戻りや
      </Link>
    </div>
    <StaticImage
      src="../images/dondoko_susumu.jpg"
      loading="eager"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </Layout>
)

export const Head = () => <Seo title="いや、どこにアクセスしとんねん" />

export default NotFoundPage
