# 📋 React Application Form

A professional, fully responsive **Application Form** built with **React JS** — featuring modern UI design, real-time form state management, smooth animations, and clean validation.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## ✨ Features

- ✅ **Fully Controlled Form** — All inputs managed via React `useState`
- 🎨 **Modern Professional UI** — Clean card layout with gradient header and smooth animations
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop screens
- 🔘 **Custom Radio Buttons** — Clickable gender selection cards (Male / Female / Other)
- ☑️ **Custom Checkboxes** — Styled subject selector cards (English / Maths / Physics)
- 📁 **Custom File Upload** — Styled resume upload with filename display
- 🔄 **Reset Functionality** — Clears all fields back to default state
- ✅ **Submit Feedback** — Button turns green with a success message for 3 seconds on submit
- 🎯 **Centered Layout** — Form perfectly centered on screen using Flexbox
- 🌐 **Google Fonts** — Uses the `Sora` font family for a polished look

---

## 📸 Preview

> Form is centered on screen with a blue gradient header, icon-prefixed inputs, custom radio/checkbox cards, and a styled file upload area.

---

## 🗂️ Project Structure

```
react-application-form/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── App.jsx          # Main form component with all state & logic
│   ├── App.css          # All styling — layout, inputs, buttons, animations
│   └── main.jsx         # React entry point
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/react-application-form.git
```

**2. Navigate into the project folder**
```bash
cd react-application-form
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:5173
```

---

## 🧠 How It Works

### State Management (`App.jsx`)

Each form field has its own state variable managed with React's `useState` hook:

| State Variable    | Type    | Purpose                              |
|-------------------|---------|--------------------------------------|
| `firstName`       | String  | Stores first name input              |
| `lastName`        | String  | Stores last name input               |
| `email`           | String  | Stores email input                   |
| `contact`         | String  | Stores phone number                  |
| `gender`          | String  | Tracks selected gender radio option  |
| `subjects`        | Object  | Tracks English/Maths/Physics toggles |
| `resume`          | File    | Stores uploaded file object          |
| `url`             | String  | Stores portfolio/LinkedIn URL        |
| `selectedOption`  | String  | Tracks skill level dropdown value    |
| `about`           | String  | Stores textarea content              |
| `submitted`       | Boolean | Controls submit success animation    |

### Key Functions

```js
handleSubmit(e)        // Prevents page reload, logs data, triggers success animation
handleReset()          // Resets all state variables to default values
handleSubjectChange()  // Toggles checkbox true/false for selected subject
```

---

## 🎨 Styling Highlights (`App.css`)

| Feature                  | Description                                                  |
|--------------------------|--------------------------------------------------------------|
| CSS Variables (`:root`)  | Centralized color/spacing tokens for easy theming            |
| Flexbox Centering        | `body` uses flex to center the form on all screen sizes      |
| `@keyframes slideUp`     | Form slides up and fades in on page load                     |
| `.radio-card.active`     | Selected gender card highlights in blue                      |
| `.checkbox-card.active`  | Selected subject card highlights in blue                     |
| `.file-upload-label`     | Dashed-border styled upload box replacing default file input |
| `input:focus`            | Blue ring glow effect on focused input fields                |
| `@media` query           | Single-column layout on screens smaller than 520px           |

---

## 📦 Form Fields

| Field            | Input Type   | Required |
|------------------|--------------|----------|
| First Name       | Text         | ✅ Yes   |
| Last Name        | Text         | ✅ Yes   |
| Email Address    | Email        | ✅ Yes   |
| Contact Number   | Tel          | ✅ Yes   |
| Gender           | Radio        | ✅ Yes   |
| Best Subject     | Checkbox     | ❌ No    |
| Upload Resume    | File         | ✅ Yes   |
| Portfolio URL    | URL          | ✅ Yes   |
| Skill Level      | Select       | ❌ No    |
| About Yourself   | Textarea     | ✅ Yes   |

---

## 🛠️ Built With

- [React 18](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Fast build tool and dev server
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) — Custom styling with variables and animations
- [Google Fonts — Sora](https://fonts.google.com/specimen/Sora) — Typography

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
