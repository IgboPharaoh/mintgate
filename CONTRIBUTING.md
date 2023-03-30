Contributing to Mintgate
========================

How to contribute
=================
* Create an [issue](https://github.com/GETLN/mintgate/issues/new).
* Claim an [issue](https://github.com/GETLN/mintgate/issues) to have it assigned to you.

<br/>

Setting up your local environment
=================================
1. Set up your development environment:
    * Install your favorite text editor / IDE
    * Install [NodeJS](https://nodejs.org/en/download)
2. Create an acount on [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) if you do not already have one.
3. Fork the project repository: click on the 'Fork' button to create a copy of the repository under your GitHub account.
4. Clone your fork of the repository to your local machine:
```bash
$ git clone git@github.com:[your_github_handle]/GETLN/mintgate.git
$ cd mintgate
```
5. Configure your fork: add the upstream remote. This saves a reference to the main `Mintgate` repository, which you can use to ensure your fork is synchronized with the latest changes:
```bash
$ git remote add upstream git@github.com:/GETLN/mintgate.git
```
6. Check that the upstream and origin remote aliases are configured correctly by running `git remote -v`. This should display:
```bash
origin  git@github.com:[your_github_handle]/mintgate.git (fetch)
origin  git@github.com:[your_github_handle]/mintgate.git (push)
upstream        git@github.com:GETLN/mintgate.git (fetch)
upstream        git@github.com:GETLN/mintgate.git (push)
```
7. To sync your fork with the latest changes on the `upstream/main` branch:
```bash
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
```
8. Install dependencies:
```bash
yarn install
```
or
```bash
npm install
```
9. Start the development server:
```bash
$ yarn start
```
or
```bash
$ npm start
```
* This should open the running web application on a new tab in your browser. 

<br/>

Start developing
----------------

10. Create a feature branch for your changes:
```bash
git checkout -b feature_name
```
- It is good practice to always use a feature branch. Working directly from the **main** branch is risky business!
11. When done editing, add and commit to record your changes in Git:
```bash
$ git add modified_files
$ git commit -m "brief description of changes"
```
12. Push the changes to your GitHub account:
```bash
$ git push -u origin feature_name
```

<br/>

Submit your Pull Request(PR)
----------------------------
- After pushing changes to your GitHub fork, submit a pull request(PR) to the `main` branch of the `https://github.com/GETLN/mintgate` repo.
- Your PR description should ideally [reference the issue it resolves](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

<br/>

## Happy Hacking! 🚀