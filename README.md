# 🐈‍⬛ kittygpt-serve

A tiny CLI that spins up a local server with the required endpoints (`/completion` and `/voicechat`) for [KittyGPT](https://github.com/camilaprav/kittygpt) to run locally.

> Use this when you want to test KittyGPT without exposing your OpenAI key to the browser, or if you want to try voice chat (which unfortunately requires a server for initial token fetching).

---

## 🚀 Usage

```bash
npx @camilaprav/kittygpt-serve
```

What this does:

- Initialize `.env` with endpoint variables if the file doesn't exist
- Serve the current directory as static files
- Expose `/completion` and `/voicechat` endpoints locally
- Read environment variables from `.env` (for your OpenAI API endpoints and key)

---

## 📦 Environment Variables

Create a `.env` file to set the required environment variables:

```bash
OPENAI_API_COMPLETIONS_ENDPOINT=https://api.openai.com/v1/chat/completions
OPENAI_API_VOICECHAT_ENDPOINT=https://api.openai.com/v1/realtime/sessions
OPENAI_API_KEY=sk-...your key here...
```

---

## 📙 Documentation

For full usage details, including completions and voicechat APIs:

👉 [https://github.com/camilaprav/kittygpt](https://github.com/camilaprav/kittygpt)

---

## 🧵 License

**GPL-v3.0 or later**

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

You should have received [a copy](COPYING) of the GNU General Public License
along with this program. If not, see https://www.gnu.org/licenses/.
