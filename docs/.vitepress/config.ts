import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Apex Scholar Docs',
  description: 'Documentation for Apex Scholar – your AI-powered research workspace',
  
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/getting-started/what-is-this' },
      { text: 'How To', link: '/how-to/find-papers' },
      { text: 'Features', link: '/features/search' },
      { text: 'Help', link: '/help/faq' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: '/reference/changelog' },
          { text: 'Contributing', link: '/help/contributing' }
        ]
      }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is Apex Scholar?', link: '/getting-started/what-is-this' },
            { text: 'First Steps', link: '/getting-started/first-steps' },
            { text: 'Privacy & Security', link: '/getting-started/security' }
          ]
        }
      ],
      '/how-to/': [
        {
          text: 'How To Guides',
          items: [
            { text: 'Find & Save Papers', link: '/how-to/find-papers' },
            { text: 'Organize & Cite', link: '/how-to/save-organize' },
            { text: 'Understand with AI', link: '/how-to/understand-papers' },
            { text: 'Write a Paper (LaTeX)', link: '/how-to/write-paper' },
            { text: 'Stay on Track', link: '/how-to/stay-on-track' },
            { text: 'Cite & Export', link: '/how-to/cite-export' }
          ]
        }
      ],
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Unified Search', link: '/features/search' },
            { text: 'AI Insights', link: '/features/insights' },
            { text: 'Knowledge Graph', link: '/features/graph' },
            { text: 'LaTeX Editor', link: '/features/latex' },
            { text: 'Kanban Board', link: '/features/kanban' },
            { text: 'Grant Tracker', link: '/features/grants' },
            { text: 'Citations', link: '/features/citations' },
            { text: 'File Chat', link: '/features/file-chat' },
            { text: 'Encryption', link: '/features/encryption' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'API Endpoints', link: '/reference/api' },
            { text: 'Environment Variables', link: '/reference/env-vars' },
            { text: 'LaTeX Workflow (Admin)', link: '/reference/latex-workflow' },
            { text: 'Glossary', link: '/reference/glossary' }
          ]
        }
      ],
      '/help/': [
        {
          text: 'Help',
          items: [
            { text: 'FAQ', link: '/help/faq' },
            { text: 'Troubleshooting', link: '/help/troubleshooting' },
            { text: 'Contributing', link: '/help/contributing' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/scholarkit/apexscholar' }
    ],

    footer: {
      message: 'Questions? <a href="https://github.com/scholarkit/apexscholar/issues">Open an issue</a> or join our Discord.',
      copyright: 'Copyright © 2026 Apex Scholar. MIT License.'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    checkLinks: false,
    checkDeadLinks: false
  }
})
