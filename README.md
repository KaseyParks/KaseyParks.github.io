<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game Updates</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🎮 Welcome!</h1>
    <p class="tagline">Subscribe to get updates. This email is automated; if you reply, a human will respond.</p>

    <form id="subscribe-form" action="https://formspree.io/f/your-form-id" method="POST">
      <input type="email" name="email" placeholder="Enter your email" required>
      <button type="submit">Subscribe</button>
      <p class="success-message" id="success-message"></p>
    </form>

    <footer>
      <p>© 2025 Game Updates. All rights reserved.</p>
    </footer>
  </div>

  <script src="script.js"></script>
</body>
</html>
