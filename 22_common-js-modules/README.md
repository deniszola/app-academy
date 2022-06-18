# Practice: Import and Export with Common JS Modules

In this exercise, you will practice importing and exporting using common JS.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Directions

1. Export `helloMessage` from **messages/hello-message.js** and import it into
   **messages/say-message.js**. If you run the **messages/say-message.js** file,
   you should see the following printed in the terminal:

   ```plaintext
   "Greetings! Let us begin!"
   ```

2. Export `sayMessage` from **messages/say-message.js** and import it into
   **send-messages/say-hello-to.js**. If you run the
   **send-messages/say-hello-to.js** file, you should see the following printed
   in the terminal:

   ```plaintext
   "Greetings! Let us begin!"
   "Hello Woody!"
   ```

3. Export `sayHelloTo` from **send-messages/say-hello-to.js** and import it into
   **send-messages/give-message-to-mrs-potato.js**. If you run the
   **send-messages/give-message-to-mrs-potato.js** file, you should see the
   following printed in the terminal:

   ```plaintext
   "Greetings! Let us begin!"
   "Hello Woody!"
   "Hello Mrs. Potato!"
   (Psst... Hi Buzz)
   ```

4. Run the **index.js** file. You should see an error in the terminal. Import or
   export from files until there are no more errors in the terminal. Once you
   successfully exported the necessary modules for the **index.js** file and
   imported them, you should see the following printed in the terminal:

   ```plaintext
   "Greetings! Let us begin!"
   "Hello Woody!"
   "Hello Mrs. Potato!"
   (Psst... Hi Buzz)
   "Hello Mr. Potato!"
   "Hello Mrs. Potato!"
   (Psst... You are looking very spudly today!)
   "Hello Mrs. Potato!"
   (Psst... There's a good deal on mattresses tomorrow.)
   "Hello Mrs. Potato!"
   (Psst... Do you like to do things in unnecessarily complicated ways?)
   ```
