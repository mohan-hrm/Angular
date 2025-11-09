@echo off
echo ===============================================================
echo 🏗️  Generating Empty Angular Pages for All Menus
echo ===============================================================

:: -------------------------------
:: STUDY MANAGEMENT (already has list-view)
:: -------------------------------
call ng g c features/study/pages/create-study --standalone --skip-tests --style=scss
call ng g c features/study/pages/assignments/groups --standalone --skip-tests --style=scss
call ng g c features/study/pages/assignments/subgroups --standalone --skip-tests --style=scss
call ng g c features/study/pages/assignments/cages --standalone --skip-tests --style=scss
call ng g c features/study/pages/assignments/phases --standalone --skip-tests --style=scss
call ng g c features/study/pages/assignments/measurement-schedule --standalone --skip-tests --style=scss
call ng g c features/study/pages/assignments/compounds --standalone --skip-tests --style=scss
call ng g c features/study/pages/audit-trail --standalone --skip-tests --style=scss

:: -------------------------------
:: STUDY TEMPLATES
:: -------------------------------
call ng g c features/templates/pages/list-view --standalone --skip-tests --style=scss
call ng g c features/templates/pages/assignments --standalone --skip-tests --style=scss
call ng g c features/templates/pages/audit-trail --standalone --skip-tests --style=scss

:: -------------------------------
:: DASHBOARD
:: -------------------------------
call ng g c features/dashboard/pages/home --standalone --skip-tests --style=scss

:: -------------------------------
:: ANIMAL MANAGEMENT
:: -------------------------------
call ng g c features/animals/pages/animal-list --standalone --skip-tests --style=scss
call ng g c features/animals/pages/filter-by-study --standalone --skip-tests --style=scss
call ng g c features/animals/pages/group-assignment --standalone --skip-tests --style=scss
call ng g c features/animals/pages/cage-assignment --standalone --skip-tests --style=scss
call ng g c features/animals/pages/mark-dead-restructure --standalone --skip-tests --style=scss
call ng g c features/animals/pages/audit-trail --standalone --skip-tests --style=scss

:: -------------------------------
:: MEASUREMENT MANAGEMENT
:: -------------------------------
call ng g c features/measurements/pages/measurement-entry --standalone --skip-tests --style=scss
call ng g c features/measurements/pages/measurement-types --standalone --skip-tests --style=scss
call ng g c features/measurements/pages/schedule --standalone --skip-tests --style=scss
call ng g c features/measurements/pages/bulk-import --standalone --skip-tests --style=scss
call ng g c features/measurements/pages/audit-trail --standalone --skip-tests --style=scss

:: -------------------------------
:: REPORTS & ANALYTICS
:: -------------------------------
call ng g c features/reports/pages/study-reports --standalone --skip-tests --style=scss
call ng g c features/reports/pages/scheduled-reports --standalone --skip-tests --style=scss
call ng g c features/reports/pages/audit-reports --standalone --skip-tests --style=scss
call ng g c features/reports/pages/charts-kpis --standalone --skip-tests --style=scss

:: -------------------------------
:: ADMINISTRATION / SETUP
:: -------------------------------
call ng g c features/admin/pages/users --standalone --skip-tests --style=scss
call ng g c features/admin/pages/roles-permissions --standalone --skip-tests --style=scss
call ng g c features/admin/pages/system-settings --standalone --skip-tests --style=scss
call ng g c features/admin/pages/audit-config --standalone --skip-tests --style=scss
call ng g c features/admin/pages/master-data --standalone --skip-tests --style=scss

:: -------------------------------
:: HELP / DOCUMENTATION
:: -------------------------------
call ng g c features/help/pages/user-guide --standalone --skip-tests --style=scss
call ng g c features/help/pages/about --standalone --skip-tests --style=scss
call ng g c features/help/pages/support --standalone --skip-tests --style=scss

echo ===============================================================
echo ✅ Empty pages created successfully!
echo You can now add routes and navigation in app.routes.ts
echo ===============================================================
pause
