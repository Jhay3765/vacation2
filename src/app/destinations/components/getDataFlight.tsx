import getStripe from "@/app/lib/getStripe.js";

export async function handleCheckoutFlight() {
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID2,
        quantity: 1,
      },
    ],
    mode: "payment",
    successUrl: `http://localhost:3000/order/success`,
    cancelUrl: `http://localhost:3000/destinations`,
    customerEmail: "customer@email.com",
  });
  console.warn(error.message);
}
