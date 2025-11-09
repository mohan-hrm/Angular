import { Routes } from '@angular/router';

// Import your page components
import { Home } from './features/dashboard/pages/home/home';
import { StudyList } from './features/study/components/study-list/study-list';
import { CreateStudy } from './features/study/pages/create-study/create-study';
import { Groups } from './features/study/pages/assignments/groups/groups';
import { Subgroups } from './features/study/pages/assignments/subgroups/subgroups';
import { Cages } from './features/study/pages/assignments/cages/cages';
import { Phases } from './features/study/pages/assignments/phases/phases';
import { MeasurementSchedule } from './features/study/pages/assignments/measurement-schedule/measurement-schedule';
import { Compounds } from './features/study/pages/assignments/compounds/compounds';
import { AuditTrail as StudyAuditTrail } from './features/study/pages/audit-trail/audit-trail';

import { AnimalList } from './features/animals/pages/animal-list/animal-list';
import { GroupAssignment } from './features/animals/pages/group-assignment/group-assignment';
import { CageAssignment } from './features/animals/pages/cage-assignment/cage-assignment';
import { MarkDeadRestructure } from './features/animals/pages/mark-dead-restructure/mark-dead-restructure';
import { AuditTrail as AnimalAuditTrail } from './features/animals/pages/audit-trail/audit-trail';

import { MeasurementEntry } from './features/measurements/pages/measurement-entry/measurement-entry';
import { MeasurementTypes } from './features/measurements/pages/measurement-types/measurement-types';
import { Schedule } from './features/measurements/pages/schedule/schedule';
import { BulkImport } from './features/measurements/pages/bulk-import/bulk-import';
import { AuditTrail as MeasurementAuditTrail } from './features/measurements/pages/audit-trail/audit-trail';

import { StudyReports } from './features/reports/pages/study-reports/study-reports';
import { ScheduledReports } from './features/reports/pages/scheduled-reports/scheduled-reports';
import { AuditReports } from './features/reports/pages/audit-reports/audit-reports';
import { ChartsKpis } from './features/reports/pages/charts-kpis/charts-kpis';

import { Users } from './features/admin/pages/users/users';
import { RolesPermissions } from './features/admin/pages/roles-permissions/roles-permissions';
import { SystemSettings } from './features/admin/pages/system-settings/system-settings';
import { AuditConfig } from './features/admin/pages/audit-config/audit-config';
import { MasterData } from './features/admin/pages/master-data/master-data';

import { UserGuide } from './features/help/pages/user-guide/user-guide';
import { About } from './features/help/pages/about/about';
import { Support } from './features/help/pages/support/support';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: Home },

  // Study Management
  { path: 'studies', component: StudyList },
  { path: 'create-study', component: CreateStudy },
  { path: 'assignments/groups', component: Groups },
  { path: 'assignments/subgroups', component: Subgroups },
  { path: 'assignments/cages', component: Cages },
  { path: 'assignments/phases', component: Phases },
  { path: 'assignments/measurement-schedule', component: MeasurementSchedule },
  { path: 'assignments/compounds', component: Compounds },
  { path: 'audit-trail', component: StudyAuditTrail },

  // Animal Management
  { path: 'animals/list', component: AnimalList },
  { path: 'animals/group-assignment', component: GroupAssignment },
  { path: 'animals/cage-assignment', component: CageAssignment },
  { path: 'animals/mark-dead', component: MarkDeadRestructure },
  { path: 'animals/audit', component: AnimalAuditTrail },

  // Measurement Management
  { path: 'measurements/entry', component: MeasurementEntry },
  { path: 'measurements/types', component: MeasurementTypes },
  { path: 'measurements/schedule', component: Schedule },
  { path: 'measurements/bulk-import', component: BulkImport },
  { path: 'measurements/audit', component: MeasurementAuditTrail },

  // Reports
  { path: 'reports/study', component: StudyReports },
  { path: 'reports/scheduled', component: ScheduledReports },
  { path: 'reports/audit', component: AuditReports },
  { path: 'reports/charts', component: ChartsKpis },

  // Administration
  { path: 'admin/users', component: Users },
  { path: 'admin/roles', component: RolesPermissions },
  { path: 'admin/settings', component: SystemSettings },
  { path: 'admin/audit', component: AuditConfig },
  { path: 'admin/master-data', component: MasterData },

  // Help
  { path: 'help/user-guide', component: UserGuide },
  { path: 'help/about', component: About },
  { path: 'help/support', component: Support },

  { path: '**', redirectTo: 'dashboard' }
];
