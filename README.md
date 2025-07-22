# YC Directory

A modern web application that allows users to **search, browse, and explore** a curated list of startup companies, inspired by the Y Combinator model. Designed with performance and user experience in mind, **YC Directory** helps users discover innovative startups with ease.

![GitHub Repo stars](https://img.shields.io/github/stars/Moin333/YC_Directory?style=social)
![GitHub forks](https://img.shields.io/github/forks/Moin333/YC_Directory?style=social)
![GitHub license](https://img.shields.io/github/license/Moin333/YC_Directory)
![GitHub issues](https://img.shields.io/github/issues/Moin333/YC_Directory)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)

---

## 📌 Table of Contents

- [Introduction](#introduction)
- [Live Demo](#-live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

**YC Directory** is a modern, user-friendly web application designed to help users explore a curated list of startup companies, especially those funded by Y Combinator. Built using **Next.js**, **Sanity CMS**, and **Tailwind CSS**, the app provides a smooth and interactive experience for startup discovery.

This project is ideal for:
- Early-stage founders sharing their startups
- Investors browsing potential ventures
- Tech enthusiasts exploring innovations

---

## 🌐 Live Demo

👉 [Click here to view the live project](https://yc-directory-nine-psi.vercel.app/)

---

## Features

* **Search & Filter**: Quickly find startups based on keywords, category, or name.
* **Detailed Profiles**: Click on a startup card to view full details including pitch, category, founder info, and more.
* **View Counter**: Real-time view count updates as users explore the startup details.
* **Submit Startup Pitch**: Authenticated users can submit their own startup ideas via a markdown-enabled editor.
* **GitHub Auth**: Simple authentication mechanism via GitHub for secure access.
* **Dynamic Routing**: Smooth navigation across pages using Next.js dynamic routes.

---

## Tech Stack

* **Frontend**: Next.js 15, React 19, Tailwind CSS, Radix UI
* **CMS**: Sanity v3 (schema-driven content modeling)
* **Authentication**: NextAuth.js (GitHub Provider)
* **Styling Tools**: Shadcn UI, clsx, tailwind-merge

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Moin333/YC_Directory.git
   cd YC_Directory
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Setup Sanity Studio** (optional if you have admin rights)

   ```bash
   cd sanity
   sanity install
   ```
4. **Run the Development Server**

   ```bash
   npm run dev
   ```
5. Visit the app at `http://localhost:3000`

---

## Usage

* **Login via GitHub**: Click the login button to authenticate.
* **Create a Pitch**: Navigate to the "Submit Your Pitch" page and fill out the form.
* **Browse Startups**: Use the search bar or explore homepage cards.
* **Check Views**: Each detail page shows how many times it's been viewed.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
2. **Create your feature branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes**:

   ```bash
   git commit -m "Add your message"
   ```
4. **Push to the branch**:

   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

Please ensure your code adheres to the existing code style and is well-tested.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Moin333/YC_Directory/blob/main/LICENSE) file for details.

---

*Handcrafted with ❤️ by [Moin Ansari](https://github.com/Moin333)*
