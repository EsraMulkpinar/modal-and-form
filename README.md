Next.js Modal Form Project

This project is a modal form application built with Next.js. Users can click a button to open a modal, fill out the form, and submit it.

🚀 Features

Built with Next.js for fast and efficient development

React Hook Form for form handling

Bootstrap / Tailwind CSS for a sleek design

Form validation support

Server-side and client-side processing

i18n internationalization support

📌 Installation

After cloning the repository, follow these steps:

# Clone the repository
git clone https://github.com/EsraMulkpinar/nextjs-modal-form.git

# Navigate into the project directory
cd nextjs-modal-form

# Install dependencies
yarn install  # or npm install

🚀 Running the Project

To start the project in development mode:

yarn dev  # or npm run dev

Visit http://localhost:3000 in your browser to see the application.

📁 Project Structure

nextjs-modal-form/
│── public/
│   ├── locales/
│   │   ├── de/common.json
│   │   ├── en/common.json
│   │   ├── tr/common.json
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│── src/
│   ├── app/
│   │   ├── addParticipant.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Form.tsx
│   │   ├── Input.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Modal.tsx
│   ├── context/
│   │   ├── i18nProvider.tsx
│   ├── i18n/
│   │   ├── i18n.ts
│   ├── lib/
│   │   ├── validation.ts
│── package.json
│── README.md

🛠 Technologies Used

Next.js - React-based framework

React Hook Form - Form handling

Tailwind CSS / Bootstrap - UI design

i18next - Internationalization (i18n) support

