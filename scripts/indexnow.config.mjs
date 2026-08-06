/**
 * IndexNow ownership key for www.zoeticai.com
 *
 * The same key must be served at:
 *   https://www.zoeticai.com/{INDEXNOW_KEY}.txt
 * (file lives in public/{INDEXNOW_KEY}.txt → dist after build)
 *
 * Key format: 8–128 hex characters (IndexNow spec).
 * Rotate by generating a new key, updating this file + public/{key}.txt,
 * deploying, then submitting URLs again.
 */
export const INDEXNOW_KEY = "00b1b46bcebd22a15b8dc711d8ae9ade";

/** Canonical host (no scheme, no path) — must match production. */
export const SITE_HOST = "www.zoeticai.com";

/** Canonical origin — must match astro.config `site` and site.url. */
export const SITE_ORIGIN = "https://www.zoeticai.com";

/** Where search engines fetch the key for ownership proof. */
export const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`;

/**
 * Official IndexNow endpoint (shared by Bing and other participants).
 * @see https://www.indexnow.org/documentation
 */
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/** Max URLs per IndexNow POST (protocol limit). */
export const INDEXNOW_BATCH_SIZE = 10_000;
