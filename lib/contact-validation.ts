export type ContactValues = {
  name: string;
  organisation?: string;
  email: string;
  message: string;
};

export type ContactValidationResult =
  | { kind: "valid"; values: ContactValues }
  | { kind: "invalid"; errors: Partial<Record<keyof ContactValues, string>> }
  | { kind: "rejected" };

const messages = {
  es: { required: "Este campo es obligatorio.", invalidEmail: "Ingrese un correo válido." },
  en: { required: "This field is required.", invalidEmail: "Enter a valid email address." },
} as const;

function read(formData: FormData, field: string, maxLength: number) {
  return String(formData.get(field) ?? "").trim().slice(0, maxLength);
}

export function validateContactForm(
  formData: FormData,
  locale: "es" | "en",
  now = Date.now(),
): ContactValidationResult {
  const copy = messages[locale];
  const name = read(formData, "name", 100);
  const organisation = read(formData, "organisation", 160);
  const email = read(formData, "email", 254).toLowerCase();
  const message = read(formData, "message", 5000);
  const website = read(formData, "website", 200);
  const startedAt = Number(formData.get("startedAt"));
  const errors: Partial<Record<keyof ContactValues, string>> = {};

  if (!name) errors.name = copy.required;
  if (!email) errors.email = copy.required;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = copy.invalidEmail;
  if (!message) errors.message = copy.required;

  if (Object.keys(errors).length > 0) return { kind: "invalid", errors };
  if (website || !Number.isFinite(startedAt) || now - startedAt < 1200) {
    return { kind: "rejected" };
  }

  return {
    kind: "valid",
    values: { name, organisation: organisation || undefined, email, message },
  };
}
