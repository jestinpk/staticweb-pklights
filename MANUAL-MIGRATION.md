# Move the redesigned PK LIGHTS site to the original repository

Target repository: `https://github.com/jestinpk/staticweb-pklights`

## Recommended: GitHub Codespaces

1. Open the target repository on GitHub.
2. Select **Code → Codespaces → Create codespace on main**.
3. Upload `PK-LIGHTS-pklights-whatsapp-fix.zip` into the Codespace.
4. In the terminal, create a recoverable backup of the old website:

   ```bash
   git switch main
   git pull origin main
   git branch backup-before-redesign
   git push origin backup-before-redesign
   ```

5. Replace the old tracked website files and extract the new package:

   ```bash
   git rm -r .
   unzip -o PK-LIGHTS-pklights-whatsapp-fix.zip
   ```

6. Verify that the ZIP itself is not staged, then commit and push:

   ```bash
   git status
   git add -A
   git commit -m "Launch redesigned PK LIGHTS website"
   git push origin main
   ```

7. Open the repository's **Actions** tab. Wait for **Deploy PK LIGHTS to GitHub Pages** to finish successfully.

The package is configured for the root custom domain `https://pklights.in/`. Do not upload `node_modules`, `dist`, `.vinext`, or another ZIP file.
