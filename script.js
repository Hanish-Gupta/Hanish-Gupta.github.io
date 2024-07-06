function showTab(tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Show the skills tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('skills');
});
