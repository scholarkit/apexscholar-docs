# End-to-End Encryption

Your research data is important. End-to-End Encryption ensures only you can read it, even if someone else gets access to the storage.

---

## What It Means

When you turn on encryption, all your structured data (notes, saved papers metadata, tasks) is encrypted in your browser before being sent to the cloud. The key to unlock it never leaves your computer—not even we have it.

This is called *zero-knowledge* security.

---

## What Is Encrypted?

- Projects and settings
- Journal entries and notes
- Paper metadata (title, authors, abstract)
- AI insights
- Kanban tasks
- Grant records

**Not encrypted**: Uploaded files (PDFs, images). Those are stored as raw files. If you need file encryption, consider encrypting them before upload or using Puter’s own encryption features.

---

## Enabling Encryption

1. Sign in and go to **Settings**
2. Find **End-to-End Encryption**
3. Enter a strong passphrase (8+ characters)
4. Confirm and click **Enable**

The app will encrypt all existing data. You’ll see a confirmation when done.

---

## Unlocking Your Vault

After enabling, the next time you open the app you’ll see a **Vault Locked** screen. Enter your passphrase to decrypt and load your data.

The app stays unlocked while the browser window/tab is open. Closing the browser requires unlocking again.

---

## Changing or Disabling

You can change your passphrase anytime (Settings → Change Passphrase). The data is automatically re-encrypted.

Disabling encryption does **not** decrypt your stored data. If you disable, your data will remain unreadable unless you re-enable with the same passphrase. We recommend:

1. Export an unencrypted backup first (Settings → Export Backup)
2. After verifying the backup, you can disable if needed

---

## Forgot Your Passphrase?

There is no way to recover it. Without the passphrase, encrypted data is permanently inaccessible.

**Please store your passphrase in a password manager** or a secure physical location. Do not share it with anyone.

---

## Why Use Encryption?

- **Privacy**: Your university or employer can’t scan your cloud storage
- **Security**: If the storage provider has a breach, your data remains unreadable
- **Compliance**: Some research regulations require encryption for sensitive data

If you work with patient data, trade secrets, or classified research, you should enable E2EE.

---

## Technical Details (for Admins)

AES-GCM-256, PBKDF2 with 100k iterations, 16-byte salt, 12-byte IV. Keys stored only in memory. See the developer documentation for implementation specifics.

---

**Alternatively**, if you just want basic privacy, the app already uses HTTPS and Puter’s own security. E2EE is an extra layer for the paranoid.
