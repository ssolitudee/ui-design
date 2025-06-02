# Inventory Analyzer AI Chatbot Setup Guide

This document provides step-by-step instructions to set up the Inventory Analyzer AI Chatbot project from scratch. It includes all dependencies, file structures, and code samples needed to recreate the project on a new machine.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Code editor (e.g., VS Code)

## Project Setup

### 1. Create a New Next.js Project

```bash
# Create a new Next.js project with TypeScript
npx create-next-app@latest ui-design --typescript
```

When prompted, select the following options:
- Would you like to use TypeScript? **Yes**
- Would you like to use ESLint? **Yes**
- Would you like to use Tailwind CSS? **Yes**
- Would you like to use the `src/` directory? **Yes**
- Would you like to use App Router? **Yes**
- Would you like to customize the default import alias (@/*)? **Yes** (Use @/)

### 2. Install Additional Dependencies

```bash
# Install required dependencies
npm install @emotion/react @emotion/styled
```

### 3. Project Structure

Create the following directory structure:

```
ui-design/
├── public/
│   ├── assets/
│   │   ├── UBS_BIG.D.svg
│   │   ├── ask.svg
│   │   ├── chat.svg
│   │   ├── summary.svg
│   │   └── (other SVG files)
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── styles.css
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── MainLayout.tsx
│   │       └── Sidebar.tsx
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## File Contents

### 1. `src/app/page.tsx`

This is the main page component for the chatbot interface.

```tsx
import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="page">
      {/* Welcome section */}
      <div className="welcome">
        <div className="container">
          {/* Company logo */}
          <div className="logo">
            <Image
              src="/assets/UBS_BIG.D.svg"
              alt="UBS Logo"
              width={120}
              height={40}
              priority
            />
          </div>
          
          {/* Welcome message */}
          <div className="message">
            <h1 className="title">
              <span className="highlight">Hi,</span>
              <span> I'm Inventory Analyzer AI</span>
            </h1>
            <h2 className="subtitle">Please select an agent below:</h2>
          </div>
          
          {/* Agent selection buttons */}
          <div className="buttons">
            <button className="primary-btn">
              <Image 
                src="/assets/summary.svg" 
                alt="Summary Icon" 
                width={20} 
                height={20} 
                className="icon"
              />
              Summary Agent
            </button>
            <button className="secondary-btn">
              <Image 
                src="/assets/chat.svg" 
                alt="Chatbot Icon" 
                width={20} 
                height={20} 
                className="icon"
              />
              Chatbot Agent
            </button>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="faq">
        <div className="faq-container">
          <div className="faq-card">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                What's my current stock levels?
              </button>
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                Show me low inventory items
              </button>
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                Generate monthly inventory report
              </button>
              <button className="faq-btn">
                <Image 
                  src="/assets/ask.svg" 
                  alt="Question Icon" 
                  width={20} 
                  height={20} 
                  className="icon icon-gray"
                />
                Optimize reorder points
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat input section */}
      <div className="chat-input">
        <div className="chat-container">
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Ask about your inventory..."
              className="textfield"
            />
            <button className="send-btn">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 2. `src/app/styles.css`

This file contains all the custom styles for the chatbot interface.

```css
/* ================ 1. PAGE LAYOUT ================ */
.page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: rgb(17, 24, 39);
  color: white;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.container {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ================ 2. WELCOME SECTION ================ */
.welcome {
  padding: 4rem 0;
  text-align: center;
}

.logo {
  margin-bottom: 2.5rem;
}

.message {
  margin-bottom: 2rem;
}

.title {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight {
  color: rgb(220, 38, 38);
  font-weight: 700;
  margin-right: 0.25rem;
}

.subtitle {
  color: rgb(156, 163, 175);
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0;
}

/* ================ 3. BUTTONS ================ */
.buttons {
  display: flex;
  gap: 1rem;
  margin-top: -0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
  width: 100%;
}

.primary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(220, 38, 38, 0.9);
  color: white;
  border-radius: 0.5rem;
  transition: background-color 150ms;
  min-width: 10rem;
  font-weight: 500;
}

.primary-btn:hover {
  background-color: rgba(220, 38, 38, 1);
}

.secondary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(75, 85, 99, 0.5);
  color: white;
  border-radius: 0.5rem;
  transition: background-color 150ms;
  min-width: 10rem;
  font-weight: 500;
}

.secondary-btn:hover {
  background-color: rgba(75, 85, 99, 0.7);
}

/* ================ 4. FAQ SECTION ================ */
.faq {
  padding: 2rem 0;
  background-color: rgb(31, 41, 55);
}

.faq-container {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.faq-card {
  background-color: rgb(17, 24, 39);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.faq-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: rgb(229, 231, 235);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.faq-btn {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: rgb(31, 41, 55);
  border-radius: 0.5rem;
  text-align: left;
  transition: background-color 150ms;
}

.faq-btn:hover {
  background-color: rgb(55, 65, 81);
}

/* ================ 5. CHAT INPUT ================ */
.chat-input {
  padding: 2rem 0;
  margin-top: auto;
}

.chat-container {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.input-wrap {
  display: flex;
  gap: 0.5rem;
  background-color: rgb(31, 41, 55);
  padding: 0.5rem;
  border-radius: 0.75rem;
}

.textfield {
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: rgb(17, 24, 39);
  color: white;
  border: none;
  border-radius: 0.5rem;
}

.textfield::placeholder {
  color: rgb(156, 163, 175);
}

.textfield:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgb(220, 38, 38);
}

.send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: rgb(220, 38, 38);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
}

.send-btn:hover {
  background-color: rgb(185, 28, 28);
}

/* ================ 6. UTILITY CLASSES ================ */
.icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: middle;
  flex-shrink: 0;
}

.icon-gray {
  opacity: 0.7;
}
```

### 3. `src/app/layout.tsx`

The root layout component for the Next.js app:

```tsx
import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inventory Analyzer AI",
  description: "AI-powered inventory analysis chatbot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-900">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
```

### 4. `src/components/layout/MainLayout.tsx`

The main layout component that provides the header and sidebar:

```tsx
import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-gray-900 text-white h-full border-r border-gray-800">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Chat History</h2>
            <div className="space-y-2">
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Previous Chat 1</div>
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Previous Chat 2</div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
```

### 5. `src/components/layout/Header.tsx`

The header component:

```tsx
import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-6 bg-gray-900 text-white border-b border-gray-800">
      <h1 className="text-xl font-semibold">Inventory Analyzer AI</h1>
      <button className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-white rounded-lg transition-colors">
        New Chat
      </button>
    </header>
  );
};
```

### 6. `src/components/layout/Sidebar.tsx`

The sidebar component (create this file):

```tsx
import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-gray-900 text-white h-full border-r border-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>
        <div className="space-y-2">
          <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Previous Chat 1</div>
          <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Previous Chat 2</div>
        </div>
      </div>
    </aside>
  );
};
```

### 7. `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

### 8. `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
```

## SVG Icons

You'll need to create the following SVG files in the public/assets directory:

### 1. `summary.svg`
Create this file with a bar chart or graph icon.

### 2. `chat.svg`
Create this file with a chat bubble or message icon.

### 3. `ask.svg`
Create this file with a question mark or help icon.

### 4. `UBS_BIG.D.svg`
This would be the company logo, you can use a placeholder logo if needed.

## Running the Project

Once you've created all the required files:

```bash
# Navigate to the project directory
cd ui-design

# Install dependencies
npm install

# Run the development server
npm run dev
```

The site should now be running at `http://localhost:3000`. You'll see the Inventory Analyzer AI Chatbot interface with the welcome message, agent selection buttons, FAQ section, and chat input area.

## Next Steps

This is a static UI implementation. To make it fully functional, you would need to:

1. Implement chat state management
2. Connect to a backend API for chatbot responses
3. Add functionality to the FAQ buttons
4. Implement user authentication if required

The UI is designed to be responsive and should work well on both desktop and mobile devices.
