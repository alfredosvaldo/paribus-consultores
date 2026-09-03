import assert from "node:assert/strict";

const base = process.env.PARIBUS_TEST_URL ?? "http://127.0.0.1:3100";

async function response(path, options) {
  return fetch(`${base}${path}`, options);
}

const root = await response("/", { redirect: "manual" });
assert.equal(root.status, 308);
assert.equal(new URL(root.headers.get("location"), base).pathname, "/es");

for (const locale of ["es", "en"]) {
  const page = await response(`/${locale}`);
  assert.equal(page.status, 200);
  const html = await page.text();
  assert.match(html, new RegExp(`<html lang="${locale}"`));
  assert.match(html, /<video[^>]+autoplay=""[^>]+loop=""[^>]+playsinline=""/i);
  assert.match(html, /paribus-architectural-hero\.mp4/);
  assert.match(html, /paribus-architectural-hero-poster\.jpg/);
  assert.match(html, /class="brand-lockup"/);
  assert.match(html, /class="brand-wordmark">paribus</);
  assert.doesNotMatch(html, /class="hero-brand"/);
  assert.doesNotMatch(html, /Cómo trabajamos|How we work/);
  assert.doesNotMatch(html, /name="organisation"/);
  assert.match(html, /jorge-valverde-cutout\.png/);
  assert.match(html, /Maastricht University/);
  assert.match(html, /UNU-MERIT/);
  assert.doesNotMatch(html, /\bFEN\b|OTEI/);
  assert.match(html, /alexis-salazar-cutout\.png/);
  assert.match(html, /Alexis Salazar/);
  assert.match(html, /Universidad de Chile|University of Chile/);
  assert.equal((html.match(/class="practice-visual practice-visual-/g) ?? []).length, 3);
  assert.equal((html.match(/aria-hidden="true" class="practice-visual/g) ?? []).length, 3);
}

assert.equal((await response("/fr")).status, 404);
assert.equal((await response("/robots.txt")).status, 200);
assert.equal((await response("/sitemap.xml")).status, 200);
assert.equal((await response("/es/opengraph-image")).status, 200);

console.log("Route and metadata checks passed.");
