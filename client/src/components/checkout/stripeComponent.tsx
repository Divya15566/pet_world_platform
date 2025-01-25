import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "./paymentForm";

const stripePromise = loadStripe(
 "pk_test_51Pb4BRRvV3O0PgnggRjxFnhruRAqr2N4IWapKUWV1cxTfMKZRd5PCBUAbOMjhsZQ770LBHBOE273VODRvQ4BaoMB00PjtCZsUw"
);
export const StripeComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};
