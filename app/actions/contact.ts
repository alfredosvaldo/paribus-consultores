"use server";

import { getContactTransport, type ContactSubmission } from "@/lib/contact-transport";
import { validateContactForm } from "@/lib/contact-validation";

export type ContactFormState = {
  status: "idle" | "invalid" | "notEnabled" | "error";
  errors: Partial<Record<keyof ContactSubmission, string>>;
};

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const locale = formData.get("locale") === "en" ? "en" : "es";
  const validation = validateContactForm(formData, locale);
  if (validation.kind === "invalid") return { status: "invalid", errors: validation.errors };
  if (validation.kind === "rejected") return { status: "error", errors: {} };

  const transport = getContactTransport();
  if (!transport.enabled) return { status: "notEnabled", errors: {} };

  try {
    await transport.send(validation.values);
    return { status: "error", errors: {} };
  } catch {
    return { status: "error", errors: {} };
  }
}
