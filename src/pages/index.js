import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// 読切
const oneshots = [
  {
    text: "2025.02 「もーれつ課長澤部」",
    url: "https://www.pixiv.net/artworks/128512134",
    description:
      "昭和でもない令和でもない平成の課長が世代の間で奮闘する話。",
  },
  {
    text: "2024.11 「みのり」",
    url: "https://www.pixiv.net/artworks/124747739",
    description:
      "子供から見たコロナの話。",
  },
  {
    text: "2024.11 「Your Light」",
    url: "https://www.pixiv.net/artworks/124113864",
    description:
      "初めてできた彼女がへんな宗教にハマってた話。",
  },
  {
    text: "2024.09 「タイチの涙」",
    url: "https://www.pixiv.net/artworks/122150144",
    description:
      "不思議な力を持った涙を流す巨大なおじさんの話。",
  },
  {
    text: "2024.07 「最期の火花」",
    url: "https://www.pixiv.net/artworks/121053801",
    description:
      "死の間際に瀕した父親が最期に想い浮かべた人物とは...",
  },
  {
    text: "2024.07 「河川敷レトロ」",
    url: "https://www.pixiv.net/artworks/120491303",
    description:
      "強い女の子と弱い男の子の話。",
  },
  {
    text: "2024.06 「親子ドリブル」",
    url: "https://www.pixiv.net/artworks/119445862",
    description:
      "子供のサッカーに過剰に干渉する親の話。",
  },
  {
    text: "2024.05 「サムライと漫画家志望」",
    url: "https://www.pixiv.net/artworks/118335945",
    description:
      "女の子を描きたくない漫画家志望の話。",
  },
  {
    text: "2024.03 「鬼っこレスラー」",
    url: "https://www.pixiv.net/artworks/116829152",
    description:
      "元プロボクサーの父親とプロレス大好きな息子が対決する話。",
  },
  {
    text: "2023.01 「Satellite - サテライト -」",
    url: "https://www.pixiv.net/artworks/104687029",
    description:
      "年に1点しかゴールを決められないフォワードの話。",
  },
]

// その他の漫画やイラスト
const etcLinks = [
  
  {
    text: "2023.03〜 「なにもしらずにどんどこすすむ」",
    url: "https://www.pixiv.net/user/1758/series/220301",
    description:
      "どんどこすすむがプロの漫画家を志すエッセイ漫画。不定期連載中。",
  },
  {
    text: "2023.04 「どんどこすすむすすむくん」",
    url: "https://www.pixiv.net/user/1758/series/193473",
    // description:
    //   "リーゼント頭をした次世代型AIロボットどんどこすすむくん。子供向け漫画。",
  },
  {
    text: "2023.07 コルクマンガ専科",
    url: "https://www.pixiv.net/user/1758/series/211385",
    // description:
    //   "コルクマンガ専科の課題で描いた4コマ漫画など。",
  },
  {
    text: "2020.07〜 どんどこすすむダジャレイラスト",
    url: "https://www.pixiv.net/tags/%E3%81%A9%E3%82%93%E3%81%A9%E3%81%93%E3%81%99%E3%81%99%E3%82%80%E3%83%80%E3%82%B8%E3%83%A3%E3%83%AC/artworks",
    // description:
    //   "どんどこすすむダジャレイラストシリーズ。不定期更新中。",
  },
  {
    text: "2024.05 チームナビメディア / イラスト",
    url: "https://teamnavi.joynup.jp/2024/05/30/005003/",
    description:
      "",
  },
  {
    text: "2024.08 TeamHub / イラスト",
    url: "https://cp.tmhub.jp/soccer-lp/",
    description:
      "",
  },
]

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
  {
    text: "2019.04 エンジニア時代のインタビュー",
    url: "https://www.wantedly.com/companies/linksports/post_articles/128004",
    // description:
    //   "おまけ。エンジニア時代の貴重なインタビュー。",
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
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        どんどこすすむのホームページへようこそ！
      </h1>
    </div>
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
        現在、バイトをしながら専業漫画家を目指している<br/>
      </p>
    </div>
    <div className={styles.section}>
      <h3>作品リスト</h3>
      <h4>読切</h4>
      <ul className={styles.list}>
        {oneshots.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
            {link.description && (
              <p className={styles.listItemDescription}>
                {link.description}
              </p>
            )}
          </li>
        ))}
      </ul>
      <h4>その他の漫画やイラスト</h4>
      <ul className={styles.list}>
        {etcLinks.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
            {link.description && (
              <p className={styles.listItemDescription}>
                {link.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.section}>
      <h3>受賞歴</h3>
      <ul className={styles.list}>
        {awardlinks.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
            {link.description && (
              <p className={styles.listItemDescription}>
                {link.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.section}>
      <h3>インタビュー</h3>
      <ul className={styles.list}>
        {interviewlinks.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.section}>
      <h3>SNS</h3>
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
            {link.description && (
              <p className={styles.listItemDescription}>
                {link.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.section}>
      <h3>連絡</h3>
      <a
        className={styles.listItemLink}
        href={`mailto:kkbt2003@gmail.com`}
        target="_blank"
        rel="noreferrer"
      >
        kkbt2003@gmail.com
      </a>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
