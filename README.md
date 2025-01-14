# Zombie Preparedness Prototype

## 1. Overview

The goal is to **rapidly** create a user-facing site that demonstrates:

- **U.S. Web Design System (USWDS) compliance**
- **Accessibility** and **responsive** best practices
- A **multi-page** structure with clear links, tables, alerts, and process lists
- Minimal code to show how quickly to build a USWDS-compliant prototype

This site includes a **Home** page with alerts, an **official Gov Banner**, and links to a **Preparedness 101** page. The latter features a summary box, tables, an icon list, a process list, and more.

---

## 2. Why React & @trussworks/react-uswds

1. **Faster Development**

   - **React** provides a component-based architecture, enabling quick assembly of reusable UI pieces. This shortens the time to spin up new pages or rearrange content.
   - **@trussworks/react-uswds** wraps USWDS components (Alert, Banner, Table, etc.) with React APIs. I avoided manually writing USWDS markup for every pattern, which **speeds up** development.

2. **Reduced Complexity**

   - Instead of installing raw USWDS and hand-coding each component, I leverage **pre-built** React components. This helps ensure consistent application of USWDS classes.
   - For proof-of-concept or quick prototypes, the **Trussworks library** is typically easier to set up than customizing USWDS SCSS or building everything from scratch.

3. **Compliance & Accessibility**

   - The Trussworks library adheres to accessibility standards out of the box, matching USWDS guidelines.

4. **Alternatives**
   - If I needed more granular theming, I might go with **vanilla USWDS** (importing the SCSS files and customizing tokens). However, for a **rapid** prototype, the convenience of **@trussworks/react-uswds** is compelling.

---

## 4. Setup & Installation

1. **Install Dependencies**
   ```
   npm install
   ```
2. **Start Local Dev Server**

```
npm start
```

3. **Build for Production**

```
npm run build
```
