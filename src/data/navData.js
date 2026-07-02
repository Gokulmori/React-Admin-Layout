export const navSections = [
  {
    label: 'Dashboards',
    items: [
      { label: 'E-Commerce', href: '/', icon: 'ShoppingBag' },
      { label: 'CRM', href: '/crm', icon: 'Contact' },
      { label: 'Analytics', href: '/analytics', icon: 'Earth' },
      { label: 'Project Management', href: '/project-management', icon: 'KanbanSquare' },
      { label: 'Email Marketing', href: '/email-marketing', icon: 'AtSign' },
    ],
  },
  {
    label: 'Application Views',
    items: [
      {
        label: 'User',
        icon: 'CircleUserRound',
        children: [
          { label: 'Profile', href: '/user/profile' },
          { label: 'Timeline', href: '/user/timeline' },
          { label: 'Connection', href: '/user/connections' },
        ],
      },
      { label: 'File Manager', href: '/file-manager', icon: 'FolderClosed' },
      { label: 'Contacts', href: '/contacts', icon: 'SquareUser' },
      { label: 'Mail', href: '/mail', icon: 'Mail' },
      { label: 'Messages', href: '/messages', icon: 'MessageCircle' },
      { label: 'Todo Lists', href: '/todo', icon: 'CheckCircle' },
      { label: 'Calendar', href: '/calendar', icon: 'Calendar' },
    ],
  },
  {
    label: 'Miscellaneous',
    items: [
      {
        label: 'Sample Pages',
        icon: 'PanelTop',
        children: [
          { label: 'Invoice', href: '/sample-pages/invoice' },
          { label: 'Pricing Table', href: '/sample-pages/pricing-table' },
          { label: 'Search Results', href: '/sample-pages/search-results' },
          { label: 'FAQ', href: '/sample-pages/faq' },
          { label: 'Teams', href: '/sample-pages/teams' },
          { label: 'Login', href: '/sample-pages/login' },
          { label: 'Register', href: '/sample-pages/register' },
          { label: 'Forgot Password', href: '/sample-pages/forgot-password' },
          { label: 'Coming Soon', href: '/sample-pages/coming-soon' },
          { label: 'Error', href: '/sample-pages/error' },
        ],
      },
      {
        label: 'Content',
        icon: 'Type',
        children: [
          { label: 'Typography', href: '/content/typography' },
          { label: 'Icons', href: '/content/icons' },
          { label: 'Tables', href: '/content/tables' },
        ],
      },
      { label: 'Forms', href: '/forms', icon: 'FileText' },
      { label: 'Components', href: 'https://ui.shadcn.com/docs/components/accordion', icon: 'Component', external: true },
      { label: 'Charts', href: '/charts', icon: 'PieChart' },
    ],
  },
]
