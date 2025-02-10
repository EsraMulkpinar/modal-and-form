Next.js Modal Form Project

This project is a modal form application built with Next.js. Users can click a button to open a modal, fill out the form, and submit it.

🚀 Features

Next.js framework for fast and optimized performance

React Hook Form for efficient form handling

Tailwind CSS for responsive and modern UI

Form validation for improved user input accuracy

Internationalization (i18n) support with multiple languages

Server-side and client-side processing

📌 Installation & Setup

Clone the repository:

git clone https://github.com/EsraMulkpinar/nextjs-modal-form.git

Navigate to the project directory:

cd nextjs-modal-form

Install dependencies:

yarn install  # or npm install

Start the development server:

yarn dev  # or npm run dev

Open your browser and visit: http://localhost:3000

📁 Project Structure

The project is organized as follows:

public/ → Contains static assets such as SVG icons and localization files.

locales/ → Stores JSON files for multilingual support (en, de, tr).

src/ → Main source folder where all development happens.

app/ → Core application pages.

addParticipant.tsx → Component for adding participants.

layout.tsx → Application layout component.

page.tsx → Main page file.

components/ → Reusable UI components.

Button.tsx → Custom button component.

Form.tsx → Modal form component.

Input.tsx → Input field component.

LanguageSwitcher.tsx → Language selection component.

Modal.tsx → Modal component for displaying the form.

context/ → Context provider files.

i18nProvider.tsx → Manages language state across the app.

i18n/ → Internationalization setup.

i18n.ts → Configuration for handling translations.

lib/ → Utility and helper functions.

validation.ts → Contains form validation logic.

🛠 Technologies Used

Next.js - React-based framework

React Hook Form - Form handling

Tailwind CSS 

i18next - Multi-language support

TypeScript - Type safety and better development experience

