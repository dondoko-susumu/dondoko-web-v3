import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const awardlinks = [
  {
    text: "2025.03 第7回 ゲンロン ひらめき☆マンガ大賞 読者賞",
    url: "https://hirameki.genron.co.jp/blog/2025/03/11/33584/",
    // description:
    //   "ひらめき☆マンガ教室の最終課題作品の中から読者アンケートによる投票で決まる読者賞に選出。",
  },
  {
    text: "2024.09 Pixiv マンガ月例賞 優秀賞",
    url: "https://comic.pixiv.net/campaign/monthly_prize/2024-09",
    // description:
    //   "作品タイトル「タイチの涙」",
  },
]

const interviewlinks = [
  {
    text: "2025.06「もーれつ課長澤部」 / オトナンサー",
    url: "https://otonanswer.jp/post/276161/",
    description:
      "",
  },
  {
    text: "2025.04「もーれつ課長澤部」 / リアルサウンドブック",
    url: "https://realsound.jp/book/2025/04/post-1992693.html",
    description:
      "",
  },
  {
    text: "2025.01「みのり」 / オトナンサー",
    url: "https://otonanswer.jp/post/241770/",
    description:
      "",
  },
  {
    text: "2024.09「河川敷レトロ」 / リアルサウンドブック",
    url: "https://realsound.jp/book/2024/09/post-1792381.html",
    description:
      "",
  },
]

const links = [
  {
    text: "Pixiv",
    url: "https://www.pixiv.net/users/1758",
    // description:
    //   "漫画とイラスト",
  },
  {
    text: "note",
    url: "https://note.com/dondoko_susumu",
    // description:
    //   "日記",
  },
  {
    text: "X ",
    url: "https://x.com/dondoko_susumu",
    // description:
    //   "更新頻度高い",
  },
  {
    text: "SUZURI",
    url: "https://suzuri.jp/dondoko_susumu",
    // description:
    //   "グッズ",
  },
  {
    text: "読書メーター",
    url: "https://bookmeter.com/users/92437",
    // description:
    //   "読書記録",
  },
  {
    text: "mond",
    url: "https://mond.how/ja/dondoko_susumu",
    // description:
    //   "質問箱",
  },
  {
    text: "BlueSky",
    url: "https://bsky.app/profile/dondoko-susumu.bsky.social",
    // description:
    //   "XのB面",
  },
  {
    text: "ジャンプルーキー",
    url: "https://rookie.shonenjump.com/users/6871307331124478317",
    // description:
    //   "漫画",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/dondoko_susumu/",
    // description:
    //   "Xとほぼ同じ",
  },
  {
    text: "Threads",
    url: "https://www.threads.net/@dondoko_susumu",
    // description:
    //   "Xとほぼ同じ",
  },
  {
    text: "TikTok",
    url: "https://www.tiktok.com/@dondoko_susumu",
    // description:
    //   "ときどき投稿",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/dondoko.susumu/",
    // description:
    //   "Xとほぼ同じ",
  },
  {
    text: "YouTube",
    url: "https://www.youtube.com/@dondoko_susumu",
    // description:
    //   "いつか動画を投稿したい",
  },
]

const utmParameters = `?utm_source=homepage&utm_medium=referral&utm_campaign=dondoko_susumu`

const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        どんどこすすむのホームページへようこそ！
      </h1>
      <h2>
        どんどこすすむ
      </h2>
      <h3>漫画家</h3>
      <StaticImage
        src="../images/dondoko_susumu.jpg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <div>
        <h3>略歴</h3>
        <p>
          1981.03 大阪生まれ<br/>
          大阪芸大中退。<br/>
          東京で就職し結婚。<br/>
          以来、東京でエンジニアとして働く。<br/>
          家族は妻と子供2人。<br/>
          趣味はゲームとスポーツ。<br/>
          2022.09 会社を辞めて漫画を描き始める。<br/>
          2023.07 コルクマンガ専科8期<br/>
          2024.04 ひらめきマンガ教室7期<br/>
          2025.04 病院清掃の仕事をしながら専業漫画家を目指している<br/>
        </p>
      </div>
      <ul className={styles.list}>
        <h3>受賞歴</h3>
        {awardlinks.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
            >
              {link.text}
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <h3>インタビュー</h3>
        {interviewlinks.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
            >
              {link.text}
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <ul className={styles.list}>
      <h3>SNS</h3>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
            target="_blank"
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <h3>お問い合わせ</h3>
    <a
      className={styles.listItemLink}
      href={`mailto:kkbt2003@gmail.com`}
      target="_blank"
    >
      kkbt2003@gmail.com
    </a>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
