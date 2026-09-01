import assert from "node:assert/strict";
import test from "node:test";
import { validateContactForm } from "../lib/contact-validation.ts";

function form(values: Record<string, string>) {
  const data = new FormData();
  Object.entries(values).forEach(([key, value]) => data.set(key, value));
  return data;
}

test("requires name, email and message in Spanish", () => {
  const result = validateContactForm(form({ startedAt: "1" }), "es", 5000);
  assert.equal(result.kind, "invalid");
  if (result.kind === "invalid") {
    assert.equal(result.errors.name, "Este campo es obligatorio.");
    assert.equal(result.errors.email, "Este campo es obligatorio.");
    assert.equal(result.errors.message, "Este campo es obligatorio.");
  }
});

test("returns an English invalid-email message", () => {
  const result = validateContactForm(
    form({ name: "Test", email: "invalid", message: "Test", startedAt: "1" }),
    "en",
    5000,
  );
  assert.equal(result.kind, "invalid");
  if (result.kind === "invalid") {
    assert.equal(result.errors.email, "Enter a valid email address.");
  }
});

test("rejects honeypot and implausibly fast submissions", () => {
  const values = { name: "Test", email: "qa@example.com", message: "Test" };
  assert.equal(
    validateContactForm(form({ ...values, website: "spam", startedAt: "1" }), "en", 5000).kind,
    "rejected",
  );
  assert.equal(
    validateContactForm(form({ ...values, startedAt: "4500" }), "en", 5000).kind,
    "rejected",
  );
});

test("normalizes a valid submission", () => {
  const result = validateContactForm(
    form({
      name: "  Test User  ",
      organisation: "  Paribus  ",
      email: " QA@Example.COM ",
      message: "  A local QA message.  ",
      startedAt: "1",
    }),
    "en",
    5000,
  );
  assert.deepEqual(result, {
    kind: "valid",
    values: {
      name: "Test User",
      organisation: "Paribus",
      email: "qa@example.com",
      message: "A local QA message.",
    },
  });
});
