import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  CircuitBoard,
  Cpu,
  Eye,
  Fingerprint,
  Github,
  Globe,
  Lock,
  Mail,
  PlayCircle,
  ScanLine,
  Shield,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react'

const navItems = [
  'Overview',
  'Method',
  'Experiments',
  'Results',
  'Team',
  'Roadmap',
]

const highlights = [
  {
    icon: Brain,
    title: 'RSVP-Driven Identity Signals',
    description:
      'Exploring subject-specific neural signatures evoked by rapid serial visual presentation instead of static, spoofable biometrics.',
  },
  {
    icon: Shield,
    title: 'High-Security Use Cases',
    description:
      'Positioned as an active auxiliary authentication layer for labs, restricted facilities, and other high-trust environments.',
  },
  {
    icon: ScanLine,
    title: 'Cross-Domain Robustness',
    description:
      'Built around cross-subject, cross-session, and cross-device evaluation to emphasize realism over benchmark-only performance.',
  },
]

const metrics = [
  { label: 'Authentication Protocol', value: '1:1 Verification' },
  { label: 'Stimulation Paradigm', value: 'RSVP / THINGS-style' },
  { label: 'Research Direction', value: 'EEG Biometrics' },
  { label: 'Deployment Target', value: 'GitHub Pages Ready' },
]

const methodSteps = [
  {
    title: 'Visual Challenge Stream',
    text: 'Rapid image sequences trigger time-locked neural responses while preserving room for subject-specific variability.',
  },
  {
    title: 'EEG Acquisition & Cleaning',
    text: 'Preprocessing, artifact suppression, epoching, and channel alignment prepare the signal for robust representation learning.',
  },
  {
    title: 'Dual-Objective Encoding',
    text: 'A shared backbone supports both stimulus-aware representation learning and identity-oriented metric embedding.',
  },
  {
    title: 'Verification Decision',
    text: 'Template matching, similarity scores, ROC analysis, FAR/FRR, and EER collectively drive the final authentication score.',
  },
]

const experimentCards = [
  {
    title: 'Cross-Subject Verification',
    tag: 'Core Benchmark',
    text: 'Evaluate whether RSVP-evoked EEG embeddings can separate genuine users from impostors under a fixed stimulation protocol.',
  },
  {
    title: 'Cross-Day Stability',
    tag: 'Robustness',
    text: 'Measure how authentication quality degrades or survives across sessions collected on different days.',
  },
  {
    title: 'Cross-Device Transfer',
    tag: 'Practicality',
    text: 'Study domain shift introduced by hardware variation and adaptation strategies required for realistic deployment.',
  },
]

const resultSlots = [
  'ROC / DET Curves',
  'UMAP Subject Embeddings',
  'Ablation Study Table',
  'Cross-Day Performance Drop',
]

const teamRoles = [
  {
    role: 'Project Lead',
    note: 'Replace with team member, research focus, and contact channel.',
  },
  {
    role: 'Algorithm & Modeling',
    note: 'Replace with signal processing, metric learning, and evaluation ownership.',
  },
  {
    role: 'Experiment & Data Collection',
    note: 'Replace with RSVP protocol design, subject recruitment, and acquisition pipeline.',
  },
  {
    role: 'Frontend & Visual Communication',
    note: 'Replace with GitHub Pages site, diagrams, and competition presentation materials.',
  },
]

const roadmap = [
  'Finalize project branding, homepage, and narrative structure',
  'Lock RSVP paradigm and dataset / protocol scope',
  'Implement preprocessing and subject verification baseline',
  'Add cross-day and cross-device evaluation pipeline',
  'Polish figures, demo assets, and competition-ready presentation',
]

const faq = [
  {
    q: 'Why RSVP instead of SSVEP?',
    a: 'This project focuses on higher-level visual responses that may preserve richer subject-specific neural variability, even though the modeling challenge is harder.',
  },
  {
    q: 'Is this meant to replace passwords or face ID?',
    a: 'No. The current framing is an active auxiliary authentication layer for high-security scenarios, not a universal consumer replacement.',
  },
  {
    q: 'What content is still missing?',
    a: 'Team identities, advisor information, experimental figures, demo videos, logos, and quantitative results can all be dropped into the placeholders already prepared here.',
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <div className="noise" />
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <Brain size={18} />
          </div>
          <div>
            <strong>NeuroGate</strong>
            <span>RSVP-based EEG Authentication</span>
          </div>
        </div>
        <nav>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="ghost-button" href="#team">
          Join the Team
        </a>
      </header>

      <main>
        <section className="hero-section" id="overview">
          <div className="hero-copy">
            <div className="badge-row">
              <span className="hero-badge">
                <Sparkles size={14} />
                National Innovation Project
              </span>
              <span className="hero-badge muted">
                <BadgeCheck size={14} />
                Showcase Template v0.1
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Building a futuristic research homepage for an RSVP-driven EEG
              identity authentication project.
            </motion.h1>
            <p className="hero-text">
              This is a rich project landing page scaffold for your competition
              team. Real figures, names, results, and demo assets can be dropped
              in later without changing the overall visual structure.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#method">
                Explore the Framework
                <ArrowRight size={16} />
              </a>
              <a className="secondary-button" href="#results">
                <PlayCircle size={16} />
                Preview Result Slots
              </a>
            </div>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-panel glow">
              <div className="panel-header">
                <span>Live System Concept</span>
                <span className="status-dot" />
              </div>
              <div className="signal-stage">
                <div className="signal-card large">
                  <Eye size={24} />
                  <span>RSVP Challenge Stream</span>
                </div>
                <div className="signal-wave" />
                <div className="signal-card">
                  <Activity size={20} />
                  <span>EEG Response</span>
                </div>
                <div className="signal-card">
                  <Fingerprint size={20} />
                  <span>Identity Embedding</span>
                </div>
                <div className="signal-card success">
                  <Lock size={20} />
                  <span>Verification Decision</span>
                </div>
              </div>
              <div className="placeholder-note">
                Replace this concept block with EEG plots, pipeline renderings,
                or a real system dashboard screenshot.
              </div>
            </div>
          </div>
        </section>

        <section className="highlights-section">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article key={title} className="glass-card highlight-card">
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section id="method" className="content-section">
          <SectionTitle
            eyebrow="Method"
            title="A complete visual narrative, even before the real assets arrive"
            description="The site is structured so your future diagrams, benchmark plots, and experimental visuals can drop into place cleanly."
          />
          <div className="method-layout">
            <div className="method-steps glass-card">
              {methodSteps.map((step, index) => (
                <div key={step.title} className="step-item">
                  <div className="step-index">0{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="diagram-card glass-card">
              <div className="diagram-top">
                <Cpu size={18} />
                <span>Framework Diagram Placeholder</span>
              </div>
              <div className="diagram-grid">
                <div>Stimulus Design</div>
                <div>Epoch Processing</div>
                <div>Backbone Encoder</div>
                <div>Verification Head</div>
                <div>Template Store</div>
                <div>Risk Score</div>
              </div>
              <p>
                Swap this area with a polished architecture figure, animated SVG,
                or a clean pipeline overview exported from Figma.
              </p>
            </div>
          </div>
        </section>

        <section id="experiments" className="content-section">
          <SectionTitle
            eyebrow="Experiments"
            title="Research sections that already feel competition-ready"
            description="These blocks are designed to hold your actual experimental protocol, benchmark setup, and robustness studies."
          />
          <div className="experiment-grid">
            {experimentCards.map((card) => (
              <article key={card.title} className="glass-card experiment-card">
                <span className="mini-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="dual-panels">
            <div className="glass-card panel-block">
              <Waves size={18} />
              <h3>EEG Signal / RSVP Timeline Slot</h3>
              <p>
                Put your RSVP timing chart, trigger sequence, channel montage,
                or pre/post-processing waveform examples here.
              </p>
            </div>
            <div className="glass-card panel-block">
              <CircuitBoard size={18} />
              <h3>Benchmark / Dataset Slot</h3>
              <p>
                Use this space for THINGS-EEG notes, acquisition protocol,
                participant count, device list, or evaluation split design.
              </p>
            </div>
          </div>
        </section>

        <section id="results" className="content-section">
          <SectionTitle
            eyebrow="Results"
            title="Result placeholders that won’t look empty when data is still cooking"
            description="Instead of a blank section, the site uses polished result frames so you can progressively replace them with real figures."
          />
          <div className="results-grid">
            {resultSlots.map((slot) => (
              <div key={slot} className="result-slot glass-card">
                <Globe size={18} />
                <h3>{slot}</h3>
                <p>Drop in charts, screenshots, or comparative plots later.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="content-section">
          <SectionTitle
            eyebrow="Team"
            title="Built for a full competition team profile, not a tiny demo page"
            description="Replace placeholders with real identities, photos, institutions, and advisor information when your roster is finalized."
          />
          <div className="team-grid">
            {teamRoles.map((member) => (
              <article key={member.role} className="glass-card team-card">
                <div className="avatar-placeholder" />
                <h3>{member.role}</h3>
                <p>{member.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="content-section roadmap-section">
          <SectionTitle
            eyebrow="Roadmap"
            title="A clear path from concept page to award-level project presence"
            description="This section helps the homepage feel active, ambitious, and genuinely under construction."
          />
          <div className="roadmap-list glass-card">
            {roadmap.map((item, index) => (
              <div key={item} className="roadmap-item">
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section faq-section">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions judges, mentors, and collaborators will probably ask"
            description="A good showcase page anticipates objections and frames the project in a mature, research-driven way."
          />
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.q} className="glass-card faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-section glass-card">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2>Now it just needs your real project assets.</h2>
            <p>
              Logos, EEG figures, advisor names, GitHub links, videos, and
              benchmark plots can all be filled in later without redesigning the
              page from scratch.
            </p>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href="https://github.com" target="_blank" rel="noreferrer">
              <Github size={16} />
              GitHub Placeholder
            </a>
            <a className="secondary-button" href="mailto:team@example.com">
              <Mail size={16} />
              Contact Placeholder
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>NeuroGate — RSVP-based EEG identity authentication showcase template.</p>
        <p>Replace all placeholder content with your team’s official materials.</p>
        <div className="footer-links">
          <a href="#overview">Overview</a>
          <a href="#method">Method</a>
          <a href="#results">Results</a>
        </div>
      </footer>
    </div>
  )
}

export default App
