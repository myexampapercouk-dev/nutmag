We built a website AI assistant for a jewellery retailer that answers customer questions from the store’s live Shopify catalogue: what’s in stock, current prices, photos and details. It now handles more than 3,000 questions a month without staff, and passes customers who are ready to buy to the team on WhatsApp with a summary of the conversation.

Here’s the problem it solved, how it works, and what we learned.

## The problem: great questions, slow answers

Jewellery buyers ask specific questions. *Do you have a gold necklace for a wedding? Anything lighter? What’s the price today? Can I see it in person?*

The retailer’s staff answered these one by one, on top of serving customers in store. Replies were slow at busy times and after hours, and interested buyers drifted away before anyone got back to them.

A standard FAQ chatbot couldn’t help: every answer depended on stock and prices that change daily.

## What the assistant does

1. **Understands the request.** It picks out what the customer wants: piece type, metal, style, occasion and budget.
2. **Searches live inventory.** It queries the Shopify catalogue directly, so it only suggests pieces that exist and are in stock.
3. **Confirms current prices.** Prices come straight from the store, never from a stale document.
4. **Shows matching pieces.** Photos and key details appear right in the chat, with a link to each product.
5. **Hands over ready buyers.** When a customer wants to buy or visit, the staff get an instant WhatsApp alert with the conversation summary, so they can pick up without asking the same questions again.

## How we built it

**Started with real conversations.** Before writing any code, we collected the questions customers actually asked by chat, phone and in store. That list became the assistant’s test set.

**Connected to Shopify, not a copy of it.** The assistant reads the live catalogue through Shopify’s API, so stock and prices are always current. No one has to update a separate database.

**Mapped how the store describes its products.** Jewellery is described in many ways — metal, purity, weight, style, occasion. We mapped the store’s product details so the assistant could match how customers speak to how products are listed.

**Set clear rules.** The assistant answers only from the store’s data, never invents a product or a price, and hands over to staff for anything it shouldn’t decide alone, like custom orders.

**Tested before launch.** We ran it against the real questions we collected and fixed every wrong or weak answer before customers ever saw it.

## Results

- **3,000+ customer questions a month** answered without staff
- **Instant replies, 24/7**, including evenings and holidays
- **Warmer hand-offs:** staff receive buyers who already know what they want

## What we learned

- **Live data beats clever wording.** Customers trust an assistant that shows real, in-stock pieces with real prices.
- **The hand-off matters as much as the AI.** Passing the full context to staff is what turns a chat into a sale.
- **Start from real questions.** Building the test set first kept the assistant focused on what customers actually ask.

## FAQ

**Does this only work on Shopify?** No. The same approach works with WooCommerce and other platforms that let us read product and stock data.

**Can the assistant handle custom or made-to-order requests?** It collects the details and hands them to staff, because custom work needs a person’s judgement and pricing.

**What happens when products or prices change?** Nothing extra. The assistant reads the live store, so changes show up immediately.

**Could this work for other retailers?** Yes. Any store where customers ask about availability, specifications and price — furniture, fashion, electronics — benefits from the same setup.
