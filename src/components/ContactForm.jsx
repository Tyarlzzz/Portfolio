import { useState } from "react";
import { Send } from "lucide-react";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const MIN_MESSAGE = 10;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email, like name@example.com.";
  if (values.message.trim().length < MIN_MESSAGE)
    errors.message = `Write at least ${MIN_MESSAGE} characters so I know how to help.`;
  return errors;
}

/** One label + input/textarea + error message. Props: label, name, error, hint, multiline, and any input props */
function Field({ label, name, error, hint, multiline = false, ...inputProps }) {
  const id = `field-${name}`;
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const Control = multiline ? "textarea" : "input";

  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <Control id={id} name={name} aria-invalid={error ? "true" : undefined} aria-describedby={describedBy} {...inputProps} />
      {error ? (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      ) : (
        hint && (
          <p className="field__hint" id={`${id}-hint`}>
            {hint}
          </p>
        )
      )}
    </div>
  );
}

/**
 * Contact form. There is no server, so sending opens the visitor's email app
 * with the message already written. Props: recipient (your email address)
 */
export default function ContactForm({ recipient }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus();
      return;
    }

    const subject = values.subject.trim() || `Portfolio message from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function handleReset() {
    setValues(EMPTY);
    setErrors({});
    setSent(false);
  }

  if (sent) {
    return (
      <div className="notice" role="status">
        <h3>Your email app should be opening</h3>
        <p>
          Your message is written and ready to send there. If nothing opened, copy my address and write to me
          directly: <strong>{recipient}</strong>
        </p>
        <button type="button" className="btn btn--ghost" onClick={handleReset}>
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <Field label="Your name" name="name" value={values.name} onChange={handleChange} error={errors.name} autoComplete="name" />
        <Field label="Your email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} autoComplete="email" />
      </div>
      <Field label="Subject (optional)" name="subject" value={values.subject} onChange={handleChange} />
      <Field
        label="Message"
        name="message"
        multiline
        rows={6}
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        hint={`${values.message.trim().length} characters`}
      />
      <button type="submit" className="btn btn--primary">
        <Send size={16} aria-hidden="true" /> Send message
      </button>
    </form>
  );
}
