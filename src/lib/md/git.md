# Git

[`Git`](https://git-scm.com/) is a distributed version control system that helps developers track changes, collaborate on projects, and manage source code history. Created by Linus Torvalds, Git is designed to be fast, efficient, and flexible. It is widely used in software development to maintain codebases, track changes, and facilitate collaboration among team members.
<br/>

Git operates on a branching model, allowing developers to create branches for new features or bug fixes, and then merge them back into the main branch. It provides a decentralized approach, meaning every developer has a complete copy of the repository, enabling work to continue offline. Git also includes powerful tools for resolving conflicts, inspecting history, and collaborating with others through platforms like GitHub, GitLab, or Bitbucket.

<br/>

Git is :

- distributed: Allows each developer to have a complete copy of the repository, enabling offline work and decentralized collaboration.
- flexible: Supports various branching strategies, allowing developers to experiment with features in separate branches before merging into the main branch.
- fast: Operates efficiently even on large codebases, making it suitable for projects of all sizes.

<br/>

## Example

```ts
# Basic Git commands for a new project

# Initialize a new Git repository
git init

# Add files to the staging area
git add .

# Commit changes to the local repository
git commit -m "Initial commit"

# Create a new branch for a new feature
git branch feature-branch
git checkout feature-branch

# Make changes and commit to the feature branch
git add .
git commit -m "Add new feature"

# Switch back to the main branch
git checkout main

# Merge the feature branch into the main branch
git merge feature-branch

# Push changes to a remote repository (e.g., GitHub)
git remote add origin <repository-url>
git push -u origin main

```

> Git is a distributed version control system widely used in software development to track changes, collaborate on projects, and manage source code history efficiently.
