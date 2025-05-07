const config = {
  // ...
  stripe: {
    baseUrl: "https://buy.stripe.com",
    emailParam: "prefilled_email",
    discountParam: "prefilled_promo_code",
    variant: {
      standard: {
        monthly: "test_bIY6rO5L4cb3dPi6oo",
        annually: "test_cN25nKddwcb3fXqaEF",
      },
      premium: {
        monthly: "test_28o7vSa1kdf7dPicMO",
        annually: "test_fZe3fCflEfnf8uYfZ1",
      },
    },
    plan: {
      prod_PuuU0reuFt6y8W: "standard",
      prod_P0jB4G8yniRIE2: "standard",
      prod_PuuWeAnbhCqCe2: "premium",
      prod_PuuVeP4vko8uhg: "premium",
    },
  },
  // ...
};
