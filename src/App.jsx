import './App.css'
import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      title: "What is GitHub and how does it work?",
      content:
        "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
    },
    {
      title: "How do I see GitHub's availability?",
      content: "Check our real-time status report on status.github.com. You can also subscribe to updates if you rely on GitHub services for your CI/CD or business operations.",
    },
    {
      title: "Why is GitHub so popular?",
      content:
        "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
    },
    {
      title: "What is Git?",
      content:
        "Git is a distributed version control system used to track changes in source code during software development. It allows multiple developers to work on the same project efficiently without overwriting each other's work.",
    },
    {
      title: "What's the difference between Git and GitHub?",
      content:
        "Git is a tool for managing version control locally, while GitHub is a cloud-based platform built around Git that adds collaboration features like pull requests, issues, code reviews, and CI/CD pipelines.",
    },
    {
      title: "How do I contribute to an open source project?",
      content:
        "You can fork the repository, make changes in a new branch, and then submit a pull request. Most projects have a CONTRIBUTING.md file that outlines the process and standards to follow.",
    },
    {
      title: "What is a pull request?",
      content:
        "A pull request lets you tell others about changes you've pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the changes before merging them into the main branch.",
    },
    {
      title: "How do GitHub Actions work?",
      content:
        "GitHub Actions let you automate workflows directly in your GitHub repo. You can define actions in YAML files to build, test, or deploy your code automatically whenever a certain event (like a push) occurs.",
    },
    {
      title: "What is GitHub Copilot?",
      content:
        "GitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI. It suggests entire lines or blocks of code as you type, based on the context of your current file and project.",
    },
    {
      title: "Is GitHub free????????",
      content:
        "GitHub offers free plans for individuals and teams, which include unlimited public and private repositories. Paid plans offer more features such as advanced CI minutes, storage, and access controls.",
    }
  ]

  return (
    <>
      <Accordion items={items} />
    </>
  )
}

export default App
