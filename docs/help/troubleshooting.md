# Troubleshooting

Common problems and how to fix them. If you’re stuck, try these first.

---

## “API key missing” errors

**Problem**: When searching, you see “SERPAPI_API_KEY missing” or “NCBI_API_KEY missing”.

**Meaning**: The instance you’re using hasn’t configured those search sources. ArXiv, Semantic Scholar, and OpenAlex will still work. To enable Google Scholar or PubMed, an admin must add keys to the `.env` file.

**What you can do**: Use the sources that are working, or ask your admin to add keys.

---

## PDF won’t upload

**Problem**: Upload fails or stalls.

**Possible causes**:
- Your storage quota is full (1 GB on free Puter accounts)
- The file type is not supported (try PDF, PNG, JPG only)
- Network issue; try again or use a smaller file

---

## Compilation fails in Composr

**Problem**: Clicking Compile results in an error after ~2 minutes.

**Why**: The LaTeX workflow on the admin’s GitHub repo encountered an error (missing package, syntax error).

**Fix**:
- Check your LaTeX source for typos (unclosed braces, missing backslashes)
- Simplify: comment out large sections and recompile to isolate the error
- If it’s a missing package, the admin must install it in the workflow’s TeX Live setup

---

## I saved a paper but can’t find it

**Check**:
- Are you in the correct **project**? The project dropdown in the top bar controls which project’s data you see.
- Did the bookmark actually show a success toast? If not, try again.

---

## Vault locked screen appears every time

That’s expected if E2EE is enabled. Enter your passphrase to unlock. The session stays unlocked as long as you keep the browser open.

If you see it immediately after unlocking, your browser may be blocking `localStorage` (privacy extension). Try a normal window.

---

## Forgot E2EE passphrase

There is no reset. If you forget the passphrase, your encrypted data is lost.

You can:
- Reset the app (Settings → Reset All Data) if you have an unencrypted backup to restore
- Or start fresh with a new vault

**Lesson**: Store your passphrase in a password manager.

---

## Search returns no results

Try a simpler query. Some sources cover specific domains (PubMed is biomedical). Remove uncommon acronyms. Make sure the toggle for at least one source is turned on.

---

## Chat with PDF doesn’t work

Requirements:
- PDF must have selectable text (not a scanned image)
- MOONSHOT_API_KEY (or other AI key) must be configured by admin
- The PDF must be uploaded to Resources

---

## Slow or unresponsive app

- Clear your browser cache and reload
- Close other tabs using Puter (session might be locked)
- Check your internet connection

---

## Still stuck?

- Search existing [GitHub Issues](https://github.com/scholarkit/apexscholar/issues)
- Join our [Discord](https://discord.gg/clawd) for live help
- Post a new issue with screenshots and browser console logs

We’ll try to help.
