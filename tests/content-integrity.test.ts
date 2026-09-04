import assert from "node:assert/strict";
import test from "node:test";
import { contactEmail, siteContent } from "../content/site-content.ts";

test("both locales contain the same navigation and section counts", () => {
  assert.deepEqual(siteContent.es.nav.map((item) => item.href), ["#areas", "#contacto"]);
  assert.deepEqual(siteContent.en.nav.map((item) => item.href), ["#areas", "#contacto"]);
  assert.equal(siteContent.es.practices.items.length, 7);
  assert.equal(siteContent.en.practices.items.length, 7);
  const icons = ["markets", "competition", "tax", "minerals", "legislation", "fdi", "esg"];
  assert.deepEqual(siteContent.es.practices.items.map((item) => item.icon), icons);
  assert.deepEqual(siteContent.en.practices.items.map((item) => item.icon), icons);
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

test("associate content and portraits are approved", () => {
  for (const locale of ["es", "en"] as const) {
    assert.equal(siteContent[locale].associates.length, 2);
    const [alexis, sofia] = siteContent[locale].associates;
    assert.equal(alexis.name, "Alexis Salazar");
    assert.equal(alexis.portrait.src, "/images/alexis-salazar-cutout.png");
    assert.equal(sofia.name, "Sofía Aroca");
    assert.equal(sofia.portrait.src, "/images/sofia-aroca-cutout.png");
    for (const associate of siteContent[locale].associates) {
      assert.equal(associate.portrait.verified, true);
      assert.equal(associate.portrait.temporary, false);
      assert.equal(associate.portrait.approvedForProduction, true);
      assert.equal(associate.portrait.sourceUrl, null);
      assert.equal(associate.details.every((detail) => detail.verified), true);
    }
  }
});

test("English copy uses the approved British forms", () => {
  assert.match(siteContent.en.hero.title, /Rigour/);
  assert.match(siteContent.en.metadata.description, /organisations/);
});

test("contact CTAs point at the founder's email", () => {
  assert.equal(contactEmail, "jvalverde@paribus.cl");
  assert.ok(siteContent.es.contact.emailCta.length > 0);
  assert.ok(siteContent.en.contact.emailCta.length > 0);
});
