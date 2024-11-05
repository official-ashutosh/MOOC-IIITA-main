const stripe = require('stripe')('your-secret-key');

app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body; // Expecting cart items from the frontend
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/`,
    });
    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
