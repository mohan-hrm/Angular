ng g c layout/sidebar-study --standalone --skip-tests --flat=false
ng g c layout/sidebar-animal --standalone --skip-tests --flat=false
ng g c layout/sidebar-measurements --standalone --skip-tests --flat=false
ng g c layout/sidebar-reports --standalone --skip-tests --flat=false
ng g c layout/sidebar-admin --standalone --skip-tests --flat=false
ng g c layout/sidebar-help --standalone --skip-tests --flat=false

# Study Templates pages
ng g c features/study/templates/pages/list-view --standalone --skip-tests --flat=false
ng g c features/study/templates/pages/assignments/groups --standalone --skip-tests --flat=false
ng g c features/study/templates/pages/assignments/subgroups --standalone --skip-tests --flat=false
ng g c features/study/templates/pages/audit-trail --standalone --skip-tests --flat=false

# Other Study Setup pages
ng g c features/study/pages/study-phases --standalone --skip-tests --flat=false
ng g c features/study/pages/study-types --standalone --skip-tests --flat=false
ng g c features/study/pages/study-subtypes --standalone --skip-tests --flat=false
ng g c features/study/pages/compound-management --standalone --skip-tests --flat=false
