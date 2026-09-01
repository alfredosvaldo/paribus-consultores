import type { ContactValues } from "@/lib/contact-validation";

export type ContactSubmission = ContactValues;

export interface ContactTransport {
  enabled: boolean;
  send(submission: ContactSubmission): Promise<void>;
}

const disabledTransport: ContactTransport = {
  enabled: false,
  async send() {
    throw new Error("Contact transport is not configured.");
  },
};

export function getContactTransport(): ContactTransport {
  return disabledTransport;
}
