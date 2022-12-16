import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51MFdXOSBiZaDG3EYU142wRoyAUasfkGQcISbh8KKcHW4DcaqpdKZbazWWHGcCg4KGFVa4OlcpuQ0bhsrOuOUilUe00iU62SzKo');
    }

    return stripePromise;
}

export default getStripe;