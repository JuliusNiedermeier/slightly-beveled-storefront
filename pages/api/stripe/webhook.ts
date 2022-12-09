import Stripe from "stripe";
import { NextApiHandler } from "next";
import { buffer } from "micro";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

const templates = {
  en: process.env.SENDGRID_TEMPLATE_ORDER_CONFIRMATION_EN || "",
  de: process.env.SENDGRID_TEMPLATE_ORDER_CONFIRMATION_DE || "",
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const sig = req.headers["stripe-signature"] as string;
    const buf = await buffer(req);

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
    } catch (err: any) {
      console.log(err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        const templateId =
          session.locale === "de" ? templates.de : templates.en;
        const msg: MailDataRequired = {
          to: session.customer_details!.email || "",
          from: "julius.niedermeier@outlook.de",
          templateId,
          dynamicTemplateData: { name: session.customer_details?.name },
        };

        sgMail
          .send(msg)
          .then((response) => {
            console.log("Email sent", response[0].statusCode);
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
