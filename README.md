# Shaunak — Personal Professional Portfolio

A sleek, strictly dark portfolio website engineered with semantic HTML5, modern CSS3, and vanilla JavaScript ES6+. Designed for personal branding and instant deployment on **GitHub Pages**.

---

## Design & Color System (Strictly Dark)

- **Canvas Background**: `#0F1015` (Deep slate black — distraction-free, zero glare)
- **Cards & Containers**: `#171922` (Elevated dark charcoal surface with `#262938` structural borders)
- **Active & Hover Surface**: `#202330`
- **Primary Text**: `#F3F4F6` (High-contrast, crisp off-white for effortless readability)
- **Secondary Text & Metadata**: `#9096A6` (Subtle grey for descriptions, dates, and tags)
- **Accent**: `#4A90E2` (Muted Blue for primary CTA buttons, active navigation indicator, status pulse dots, and hover highlights)

---

## Contact & Form Configuration

- **Direct Email**: `kulkarnishaunak2006@gmail.com`
- **GitHub Profile**: [github.com/Shaunak-Kulkarni](https://github.com/Shaunak-Kulkarni)
- **LinkedIn Profile**: [linkedin.com/in/shaunak-kulkarni-303ab1329](https://www.linkedin.com/in/shaunak-kulkarni-303ab1329)
- **Google Form Link**: Connected to [Shaunak's Contact Form](https://docs.google.com/forms/d/e/1FAIpQLSfLY08WUzKrG5tN4rvs7WfVzhyLWubNa4U-63FDe87xbDnqlw/viewform?usp=publish-editor)

---

## Features

- **Clean Minimalist Header**: Top-left corner logo space removed for an unobstructed, modern navigation bar.
- **Clean Hero Section**: Focused, spacious layout keeping the headline *"Building with intent, learning with curiosity"*, personal introduction for Shaunak, and iteration badge.
- **Iteration Counter**: Currently at **v1.8** (`Still learning & improving day by day`), easily incrementable in `script.js`.
- **Linear Journey Timeline**: Chronological, distraction-free roadmap highlighting academic foundations, full-stack projects, and milestones.
- **Curricular & Non-Curricular Interests**:
  - *Engineering & Systems*: Full-Stack Web Architecture, Database Modeling & Performance, Clean Code.
  - *Creative & Passions*: Photography & Visual Framing, Videography & Visual Editing, Automotive & Motorcycles.
- **6 Curated Projects**: Clean cards with number, title, concise description, and direct link to Shaunak's GitHub repository.
- **Google Form Integration**: Prominent Muted Blue "Open Contact Form (Google Form) ↗" button directly linked to your Google Form.
- **1-Click Copy Email**: Copies `kulkarnishaunak2006@gmail.com` directly to clipboard with visual toast alert.
- **Viewable Resume PDF**: Immediately viewable `resume.pdf` opening in a new tab.

---

## How to Update the Version

Open `portfolio/script.js` and edit line 10:
```javascript
const PORTFOLIO_VERSION = "v1.8"; // Increment on your next update!
```

---

## How to Host on GitHub Pages

1. In your terminal, navigate to the `portfolio/` folder:
   ```bash
   cd portfolio
   git add .
   git commit -m "Add GitHub and LinkedIn links, remove quote card (v1.8)"
   git push origin main
   ```
2. Repository: `https://github.com/Shaunak-Kulkarni/portfolio` (or `<username>.github.io`)
3. Link and push:
   ```bash
   git remote add origin https://github.com/Shaunak-Kulkarni/<repo-name>.git
   git push -u origin main
   ```
4. If using a project repo, enable Pages under **Settings** → **Pages** (Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`).
