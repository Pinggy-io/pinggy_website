# Instructions to contribute

## Setup git

Install git and set your name and email  as follows:

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Add SSH Key to your Gitlab Account 

Create a SSH keypair using

```
ssh-keygen
```

Get the public key as follow and add it to Gitlab Account.

```
cat /path/to/id_rsa.pub
```

## Clone


```
git clone git@gitlab.com:alstonia/pinggy_website.git
```

## Work in a different branch than main

```
git checkout -b your_branch_name
```

Make sure this branch is up to date with the remote  main.

```
git checkout main
git pull origin main
git checkout your_branch_name
git rebase main
```

## Do Work

Write code in `your_branch_name` branch

```
git add .
git commit -m "Sensible message"
git push origin `your_branch_name`
```

## Pull request

Go to gitlab: https://gitlab.com/alstonia/pinggy_website

Create a PR from your branch to main.