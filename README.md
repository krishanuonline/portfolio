src/
│
├── assets/                 # Images, icons, fonts
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/             # Reusable global components
│   ├── ui/                 # Wrapped UI library components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── layout/             # App layout level components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── NavLinks.jsx
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── FooterLinks.jsx
│   │
│   └── common/             # Small shared components
│       ├── SectionWrapper.jsx
│       ├── Container.jsx
│       └── ScrollToTop.jsx
│
├── sections/               # 🔥 MAIN WEBSITE SECTIONS
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── HeroContent.jsx
│   │   ├── HeroCTA.jsx
│   │   └── hero.data.js
│   │
│   ├── About/
│   │   ├── About.jsx
│   │   ├── AboutStats.jsx
│   │   ├── AboutTimeline.jsx
│   │   └── about.data.js
│   │
│   ├── Services/
│   │   ├── Services.jsx
│   │   ├── ServiceCard.jsx
│   │   └── services.data.js
│   │
│   ├── FeaturedWork/
│   │   ├── FeaturedWork.jsx
│   │   ├── WorkCard.jsx
│   │   └── work.data.js
│   │
│   ├── HowWeWork/
│   │   ├── HowWeWork.jsx
│   │   ├── StepCard.jsx
│   │   └── process.data.js
│   │
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── testimonials.data.js
│   │
│   ├── Team/
│   │   ├── Team.jsx
│   │   ├── TeamMemberCard.jsx
│   │   └── team.data.js
│   │
│   ├── Articles/
│   │   ├── Articles.jsx
│   │   ├── ArticleCard.jsx
│   │   └── articles.data.js
│   │
│   └── Contact/
│       ├── Contact.jsx
│       ├── ContactForm.jsx
│       └── contact.schema.js
│
├── hooks/                  # Custom hooks
│   ├── useScrollSpy.js
│   ├── useIntersection.js
│   └── useTheme.js
│
├── utils/                  # Helper functions
│   ├── constants.js
│   ├── scroll.js
│   └── formatters.js
│
├── styles/                 # Global styles
│   ├── globals.css
│   └── tailwind.css
│
├── App.jsx                 # Section composition
├── main.jsx                # React root
└── index.html
