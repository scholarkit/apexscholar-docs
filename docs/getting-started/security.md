# End-to-End Encryption: Keeping Your Research Private

Apex Scholar includes a strong privacy feature: **End-to-End Encryption (E2EE)**. When enabled, all your research data (notes, saved papers, tasks) is encrypted in your browser before being saved to the cloud. This means only you can read it—not even the storage provider or the Apex Scholar team.

---

## Should I enable encryption?

**Yes, if:**
- Your research is sensitive (unpublished data, patient data, proprietary methods)
- You want the highest privacy protection
- You are self-hosting and want to ensure data is encrypted at rest

**You might skip it if:**
- You just use the demo instance for testing
- You don’t mind that your stored data is visible to the storage provider (already secure, but not zero-knowledge)

---

## How to Enable Encryption

1. Sign in and go to **Settings**
2. Find the **End-to-End Encryption** section
3. Type a **strong passphrase** (at least 8 characters; use a password manager)
4. Confirm the passphrase
5. Click **Enable Encryption**

The app will now encrypt all existing data (your projects, saved papers, notes, etc.). This takes a few seconds.

After that, your vault is protected. On your next visit (or after closing the browser), you’ll see a **Vault Locked** screen. Enter your passphrase to unlock.

---

## Important: Your Passphrase is the Key

There is **no recovery** if you forget your passphrase. Not even we can reset it.

**Do this now:**
- Store your passphrase in a password manager (e.g., Bitwarden, 1Password)
- Or write it down in a secure physical location
- Do NOT share it with anyone

If you lose your passphrase, all encrypted data is permanently lost.

---

## What Gets Encrypted?

- Projects metadata
- Journal entries and notes
- Saved papers (metadata only—PDF files are NOT encrypted)
- AI insights
- Knowledge graphs
- Kanban tasks
- Grant records
- Settings

**Note**: Uploaded files (PDFs, images) are not encrypted by this feature. If you need file encryption, consider encrypting them before upload or using Puter’s own encryption features.

---

## Changing Your Passphrase

1. Go to **Settings** → **End-to-End Encryption**
2. Click **Change Passphrase**
3. Enter your **current** passphrase
4. Enter the **new** passphrase (8+ chars)
5. Click **Update**

The app re-encrypts all data with the new key automatically.

---

## Disabling Encryption (Not Recommended)

Disabling does **not** automatically decrypt your stored data. Your data will remain encrypted and unreadable unless you re-enable with the same passphrase.

If you must disable:

1. **Export an unencrypted backup** first (Settings → Export Backup) while E2EE is still enabled
2. Confirm the backup can be restored (optional test)
3. Then you may disable
4. To start fresh without encryption: Reset All Data and re-import the unencrypted backup

---

## Verifying Encryption

Open your browser’s DevTools → Application → Local Storage. Look for keys like `research_entries`. Their value should look like:

```json
{"version":1,"iv":"...","salt":"...","ciphertext":"..."}
```

That means the data is encrypted. If you see plain JSON like `[{...}]`, encryption is not active.

---

## Security Notes

- The encryption key is derived from your passphrase using PBKDF2 (100,000 iterations) and a random salt.
- Each data item uses a fresh 12-byte IV with AES-GCM-256 encryption.
- The key lives only in your browser’s memory while the app is open. It is never stored on disk or sent to any server.
- This is zero-knowledge security.

---

## Still Curious?

Read more about encryption in the [Encryption feature page](/features/encryption) or check the [FAQ](/help/faq).
