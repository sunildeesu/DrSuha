export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  mediumUrl: string;
}

const MEDIUM_RSS_URL = "https://medium.com/feed/@doctorknowledgegeek";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function categorize(title: string, content: string): string {
  const text = `${title} ${content}`.toLowerCase();
  if (
    text.includes("work") ||
    text.includes("career") ||
    text.includes("leadership") ||
    text.includes("ageism") ||
    text.includes("workplace") ||
    text.includes("professional")
  )
    return "Leadership & Mental Health";
  if (
    text.includes("stress") ||
    text.includes("label") ||
    text.includes("empty nest") ||
    text.includes("relationship") ||
    text.includes("social media")
  )
    return "Modern Stress";
  if (
    text.includes("boring") ||
    text.includes("performance") ||
    text.includes("regulation") ||
    text.includes("barnum")
  )
    return "Mental Performance";
  return "Emotional Resilience";
}

function parseRssItems(xml: string): Article[] {
  const items: Article[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const title = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
      itemXml.match(/<title>(.*?)<\/title>/)?.[1] ??
      "";

    const link = itemXml.match(/<link>(.*?)<\/link>/)?.[1] ??
      itemXml.match(/<guid.*?>(.*?)<\/guid>/)?.[1] ??
      "";

    const pubDate = itemXml.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

    const contentEncoded =
      itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1] ??
      itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ??
      "";

    const plainContent = stripHtml(contentEncoded);
    const excerpt = plainContent.slice(0, 200).replace(/\s\S*$/, "") + "...";

    const date = pubDate
      ? new Date(pubDate).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })
      : "";

    if (title && link) {
      items.push({
        slug: slugify(title),
        title,
        category: categorize(title, plainContent),
        excerpt,
        date,
        readTime: estimateReadTime(plainContent),
        mediumUrl: link,
      });
    }
  }

  return items;
}

// Fallback articles in case RSS fetch fails
const fallbackArticles: Article[] = [
  {
    slug: "denial-and-acceptance-and-the-dilemma",
    title: "Denial and Acceptance — and The Dilemma",
    category: "Emotional Resilience",
    excerpt:
      "How men delay mental health care through protective denial mechanisms — examining psychological defence systems shaped by family dynamics and social expectations around vulnerability.",
    date: "January 2026",
    readTime: "5 min read",
    mediumUrl:
      "https://medium.com/@doctorknowledgegeek/denial-and-acceptance-and-the-dilemma-4034f479973e",
  },
  {
    slug: "labelling-theory-how-labels-define-a-woman",
    title: "Labelling Theory: From Birth to Death, How Labels Define a Woman",
    category: "Modern Stress",
    excerpt:
      "Examining societal labels placed on women throughout life stages and their impact on self-perception — challenging misconceptions about female weakness, emotionality, and capability.",
    date: "December 2025",
    readTime: "6 min read",
    mediumUrl:
      "https://medium.com/@doctorknowledgegeek/labelling-theory-from-birth-to-death-how-labels-define-a-woman-80179105e965",
  },
  {
    slug: "when-the-idea-of-death-becomes-the-only-hope-to-live",
    title: "When The Idea of Death Becomes the Only Hope to Live",
    category: "Emotional Resilience",
    excerpt:
      "Exploring 'functional depression' — individuals who appear fine externally while experiencing profound internal despair.",
    date: "October 2025",
    readTime: "7 min read",
    mediumUrl:
      "https://medium.com/@doctorknowledgegeek/when-the-idea-of-death-becomes-the-only-hope-to-live-f2d276e925bf",
  },
];

// Cache to avoid re-fetching on every import during the same server lifecycle
let cachedArticles: Article[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export async function fetchArticles(): Promise<Article[]> {
  const now = Date.now();
  if (cachedArticles && now - cacheTimestamp < CACHE_TTL) {
    return cachedArticles;
  }

  try {
    const res = await fetch(MEDIUM_RSS_URL, {
      next: { revalidate: 600 }, // Next.js: revalidate every 10 minutes
    });

    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    const articles = parseRssItems(xml);

    if (articles.length > 0) {
      cachedArticles = articles;
      cacheTimestamp = now;
      return articles;
    }

    return fallbackArticles;
  } catch {
    return cachedArticles ?? fallbackArticles;
  }
}

// Keep static export for components that can't be async (like BlogPreview on home page)
export const articles = fallbackArticles;
