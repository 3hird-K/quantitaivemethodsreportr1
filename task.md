🧠 Project Overview

Build a modern, Apple Keynote–style web presentation (scroll-based, not slides) for:

Title:
Data-Driven Insights: Applying Statistical Methods to Real-World Problems

Subject: Quantitative Methods (IT324)
Instructor: Cheryll S. Pagal, MSAMS
Topic: Multiple Regression Analysis of Laptop Specs

⚙️ Tech Stack (STRICT REQUIREMENTS)
Framework: Next.js (App Router)
UI Components: shadcn/ui
Styling: Tailwind CSS
Animations: AOS
Charts: recharts
Icons: lucide-react
Fonts: Inter or Poppins
🎯 Core UX Concept

❌ DO NOT build traditional slides
✅ Build scroll-based storytelling sections

Each section must:

Fill screen (min-h-screen)
Be centered
Animate on scroll
Focus on ONE key idea
🎨 Design System
🌑 Colors
Background: #0B0F19
Card: bg-white/5
Border: border-white/10
Gradient Accent: from-blue-500 to-indigo-600
🔤 Typography
Hero: text-5xl md:text-7xl font-bold
Section Title: text-3xl md:text-5xl
Body: text-base text-gray-400
🪟 Components Style
Rounded: rounded-2xl
Glass effect: backdrop-blur-xl
Spacing: very generous (important)
🧱 Required Components

Create reusable components:

SlideSection.tsx → wrapper (handles layout + spacing)
Navbar.tsx → sticky top navigation
ProgressIndicator.tsx → shows section progress
StatCard.tsx → displays key numbers
ChartCard.tsx → reusable chart container
FormulaBlock.tsx → styled equation display
🧭 Navigation Features
Sticky navbar
Section indicator (1–6)
Smooth scrolling
Optional: scroll progress bar
🎞️ SECTION IMPLEMENTATION
🟦 Section 1 — Problem

Title: Why do Laptops Cost So Much?

Content:

Context paragraph
Research Question
Hypothesis:
H₀: RAM & SSD have no effect
Hₐ: RAM & SSD significantly affect price

UI Requirements:

Centered hero layout
Large bold title
2 glass cards:
Research Question
Hypothesis

Animation:

fade-up
🟪 Section 2 — Method

Title: Data Collection & Method Selection

Content:

Method: Multiple Linear Regression
Dataset: Kaggle (N=30)
Variables:
X₁: RAM (GB)
X₂: SSD (GB)
Y: Price (PHP)
Tools:
Python
Pandas
Scikit-learn
Matplotlib

UI Requirements:

3-column grid
Cards with icons
Clean spacing
🟩 Section 3 — Regression Model

Title: The Regression Model

Formula:
Y = 10,117.75 + 1,469.95(X₁) + 20.35(X₂)

Stats:

Intercept: 10,117.75
RAM: 1,469.95 per GB
SSD: 20.35 per GB
R²: 0.9921

UI Requirements:

Centered formula (highlighted)
Stat cards below
Emphasize R²

Animation:

zoom-in (staggered)
🟧 Section 4 — Visualizations

Title: Data Visualization

Charts:

Price vs RAM
Price vs SSD

UI Requirements:

2 chart cards side-by-side
Axis labels
Tooltip enabled

Animation:

fade-up
🟥 Section 5 — Insights

Title: What do the results mean?

Content:

Reject H₀ (p < 0.001)
Comparison:
+8GB RAM ≈ +11,760 PHP
+256GB SSD ≈ +5,210 PHP

UI Requirements:

Highlight box for hypothesis result
Comparison cards or bars
Emphasize RAM impact visually
🟨 Section 6 — Conclusion

Title: Final Recommendations

Content:

Students:
Choose 16GB RAM
Use external/cloud storage
Market:
Avoid overpriced SSD upgrades
Future:
Include CPU in model

UI Requirements:

3-column layout
Checklist style
Icons
🎬 Animation Rules

Using AOS:

Use ONLY:
fade-up
fade-right
zoom-in
Duration: ~800ms
Use stagger delays

❌ Avoid over-animation
❌ No bouncing effects

✨ Interaction Requirements
Smooth scroll
Hover: scale cards slightly
Clean transitions
No lag
🚀 Bonus Features (Optional)
Dark mode toggle
Scroll progress bar
Intro landing section
Export to PDF
Presenter notes
📦 Final Deliverable
Fully functional Next.js app
Clean, modern UI (portfolio quality)
Responsive design
Ready for live presentation
Optional deployment (Vercel)
⚠️ Critical Rules
Keep content minimal (presentation, not report)
One key idea per section
Maintain strong visual hierarchy
Prioritize readability over complexity