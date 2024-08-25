import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export const createStripeSession = async ({ amount, description }) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: description || "Course or Event",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://www.riatarchidecor.it/SuccessPage",
      cancel_url: "https://www.riatarchidecor.it/ErrorPage",
    });

    return session.id;
  } catch (err) {
    console.error("Error creating checkout session:", err);
    throw new Error("Error creating checkout session");
  }
};
