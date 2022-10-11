import emailjs from "@emailjs/browser";
import formData from "form-data";

export const sendMail = () => {
  emailjs.sendForm(
    "service_9qs0j5d",
    "template_n8l1fl9",
    form.current,
    "tbbTJ2BB3TAc4sJRz"
  );
};
