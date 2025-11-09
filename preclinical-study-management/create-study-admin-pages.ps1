# Create missing Study Template and Other Study Setup pages
$pages = @(
    # --- Study Templates ---
    "features/study/templates/pages/list-view",
    "features/study/templates/pages/assignments/groups",
    "features/study/templates/pages/assignments/subgroups",
    "features/study/templates/pages/audit-trail",

    # --- Other Study Setup ---
    "features/study/pages/study-phases",
    "features/study/pages/study-types",
    "features/study/pages/study-subtypes",
    "features/study/pages/compound-management",

    # --- Admin ---
    "features/admin/pages/audit-config"
)

foreach ($page in $pages) {
    Write-Host "Creating component for $page ..."
    ng g c $page --standalone --skip-tests --flat=false
}

Write-Host "✅ All components created successfully!"
