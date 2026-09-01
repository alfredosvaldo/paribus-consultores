import assert from "node:assert/strict";
import test from "node:test";
import { siteContent } from "../content/site-content.ts";

test("both locales contain the same navigation and section counts", () => {
  assert.deepEqual(siteContent.es.nav.map((item) => item.href), ["#areas", "#jorge-valverde", "#contacto"]);
  assert.deepEqual(siteContent.en.nav.map((item) => item.href), ["#areas", "#jorge-valverde", "#contacto"]);
  assert.equal(siteContent.es.practices.items.length, 3);
  assert.equal(siteContent.en.practices.items.length, 3);
  assert.deepEqual(siteContent.es.practices.items.map((item) => item.visual), ["economics", "finance", "regulation"]);
  assert.deepEqual(siteContent.en.practices.items.map((item) => item.visual), ["economics", "finance", "regulation"]);
});

test("founder content and the supplied portrait are approved", () => {
  for (const locale of ["es", "en"] as const) {
    assert.equal(siteContent[locale].founder.name, "Jorge Valverde Carbonell");
    assert.equal(siteContent[locale].founder.portrait.verified, true);
    assert.equal(siteContent[locale].founder.portrait.temporary, false);
    assert.equal(siteContent[locale].founder.portrait.approvedForProduction, true);
    assert.equal(siteContent[locale].founder.portrait.sourceUrl, null);
    assert.equal(siteContent[locale].founder.details.every((detail) => detail.verified), true);
  }
});

test("English copy uses the approved British forms", () => {
  assert.match(siteContent.en.hero.title, /Rigour/);
  assert.match(siteContent.en.metadata.description, /organisations/);
});

test("unconfigured form messages never imply successful delivery", () => {
  assert.equal(siteContent.es.contact.form.notEnabled, "El envío de mensajes aún no está habilitado.");
  assert.equal(siteContent.en.contact.form.notEnabled, "Message delivery is not yet enabled.");
});
