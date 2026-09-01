"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import type { ContactCopy, Locale } from "@/content/site-content";

function SubmitButton({ copy }: { copy: ContactCopy }) {
  const { pending } = useFormStatus();
  return (
    <button className="form-submit" type="submit" disabled={pending}>
      {pending ? copy.submitting : copy.submit}
    </button>
  );
}

export function ContactForm({ locale, copy }: { locale: Locale; copy: ContactCopy }) {
  const initialState: ContactFormState = { status: "idle", errors: {} };
  const [state, action] = useActionState(submitContact, initialState);
  const startedAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, []);
  const statusMessage = state.status === "notEnabled"
    ? copy.notEnabled
    : state.status === "error" ? copy.genericError : null;

  return (
    <form className="contact-form" action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-row">
        <label htmlFor="name">{copy.name}</label>
        <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={Boolean(state.errors.name)} aria-describedby={state.errors.name ? "name-error" : undefined} />
        {state.errors.name ? <span className="field-error" id="name-error">{state.errors.name}</span> : null}
      </div>
      <div className="form-row">
        <label htmlFor="email">{copy.email}</label>
        <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required aria-invalid={Boolean(state.errors.email)} aria-describedby={state.errors.email ? "email-error" : undefined} />
        {state.errors.email ? <span className="field-error" id="email-error">{state.errors.email}</span> : null}
      </div>
      <div className="form-row form-row-wide">
        <label htmlFor="message">{copy.message}</label>
        <textarea id="message" name="message" rows={4} required aria-invalid={Boolean(state.errors.message)} aria-describedby={state.errors.message ? "message-error" : undefined} />
        {state.errors.message ? <span className="field-error" id="message-error">{state.errors.message}</span> : null}
      </div>
      <div className="form-footer form-row-wide">
        <SubmitButton copy={copy} />
        {statusMessage ? <p className="form-status" role="status">{statusMessage}</p> : null}
      </div>
    </form>
  );
}
