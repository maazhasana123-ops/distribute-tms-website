# Deployment Instructions for Claude

**Context:** The `distribute-tms-website` Next.js frontend has been fully built, aligned with the `distribute_tms_design_system.md`, and all changes are already committed locally to the `main` branch. 

However, we hit local filesystem permission errors (specifically `EPERM` issues with `~/.config/gh/config.yml` and `~/.npm/` cache folders) that blocked us from pushing this repo to GitHub and deploying to Vercel via CLI tools. 

Please take over and execute the final deployment steps for the user.

## Priority Task:
1. **GitHub Push:** Push this local Git repository to a remote GitHub repository. You can try authenticating or creating the repo via the GitHub CLI (`gh repo create distribute-tms-website --public --source=. --remote=origin --push`), or use your authenticated capabilities if you have a workflow for it.
2. **Vercel Deploy:** Deploy the code securely to Vercel. You can attempt to run `npx vercel --prod` if you can bypass the `auth.json` permission error on the Vercel CLI, or simply orchestrate the deployment through the Vercel GitHub integration.

*Note: All `package.json` dependencies are present, and the project builds successfully.*
