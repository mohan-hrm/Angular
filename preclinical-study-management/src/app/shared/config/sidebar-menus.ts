// src/app/shared/config/sidebar-menus.ts

/** Menu item definition */
export interface SidebarItem {
  label: string;
  route?: string;
  children?: SidebarItem[];
  expanded?: boolean;
}

/** Top-level section definition */
export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

/** All menus grouped by section key */
export const SIDEBAR_MENUS: Record<string, SidebarSection[]> = {
  study: [
    {
      title: 'Studies',
      items: [
        { label: 'List / View', route: '/studies' },
        {
          label: 'Assignments',
          expanded: false,
          children: [
            { label: 'Groups', route: '/assignments/groups' },
            { label: 'Subgroups', route: '/assignments/subgroups' },
            { label: 'Cages', route: '/assignments/cages' },
            { label: 'Phases', route: '/assignments/phases' },
            { label: 'Measurement Schedule', route: '/assignments/measurement-schedule' },
            {
              label: 'Compounds',
              route: '/assignments/compounds',
              children: [
                { label: 'Dosing Specification', route: '/assignments/compounds/dosing' },
                { label: 'Add Compounds', route: '/assignments/compounds/add' }
              ]
            }
          ]
        },
        { label: 'Audit Trail', route: '/audit-trail' }
      ]
    },
    {
      title: 'Study Templates',
      items: [
        { label: 'List / View', route: '/templates/list' },
        {
          label: 'Assignments',
          expanded: false,
          children: [
            { label: 'Groups', route: '/templates/assignments/groups' },
            { label: 'Subgroups', route: '/templates/assignments/subgroups' }
          ]
        },
        { label: 'Audit Trail', route: '/templates/audit' }
      ]
    },
    {
      title: 'Other Study Setup',
      items: [
        { label: 'Study Phases', route: '/study-phases' },
        { label: 'Study Types', route: '/study-types' },
        { label: 'Study Subtypes', route: '/study-subtypes' },
        { label: 'Compound Management', route: '/compound-management' }
      ]
    }
  ],

  animals: [
    {
      title: 'Animal Management',
      items: [
        { label: 'Animal List', route: '/animals/list' },
        { label: 'Group Assignment', route: '/animals/group-assignment' },
        { label: 'Cage Assignment', route: '/animals/cage-assignment' },
        { label: 'Mark Dead / Restructure', route: '/animals/mark-dead' },
        { label: 'Audit Trail', route: '/animals/audit' }
      ]
    }
  ],

  measurements: [
    {
      title: 'Measurement Management',
      items: [
        { label: 'Measurement Entry', route: '/measurements/entry' },
        { label: 'Measurement Types', route: '/measurements/types' },
        { label: 'Schedule', route: '/measurements/schedule' },
        { label: 'Bulk Import', route: '/measurements/bulk-import' },
        { label: 'Audit Trail', route: '/measurements/audit' }
      ]
    }
  ],

  reports: [
    {
      title: 'Reports & Analytics',
      items: [
        { label: 'Study Reports', route: '/reports/study' },
        { label: 'Scheduled Reports', route: '/reports/scheduled' },
        { label: 'Audit Reports', route: '/reports/audit' },
        { label: 'Charts / KPIs', route: '/reports/charts' }
      ]
    }
  ],

  admin: [
    {
      title: 'Administration / Setup',
      items: [
        { label: 'Users', route: '/admin/users' },
        { label: 'Roles / Permissions', route: '/admin/roles' },
        { label: 'System Settings', route: '/admin/settings' },
        { label: 'Audit Config', route: '/admin/audit-config' },
        { label: 'Master Data', route: '/admin/master-data' }
      ]
    }
  ],

  help: [
    {
      title: 'Help / Documentation',
      items: [
        { label: 'User Guide', route: '/help/user-guide' },
        { label: 'About', route: '/help/about' },
        { label: 'Support', route: '/help/support' }
      ]
    }
  ]
};
