import { Checkout, CheckoutButton, CheckoutStatus } from '@coinbase/onchainkit/checkout';

export default function CheckoutComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Checkout productId='94dbb8cb-6ab0-4c5d-a0fd-3ebc85d2c82d'>
        <CheckoutButton coinbaseBranded />
      <CheckoutStatus />
      </Checkout>
    </div>
  );
}
