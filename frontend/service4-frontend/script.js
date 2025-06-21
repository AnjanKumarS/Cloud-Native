console.log("Dashboard page loaded");

document.addEventListener('DOMContentLoaded', () => {
    const refreshBtn = document.getElementById('refresh-btn');
    
    // Load status on page load
    loadStatus();
    
    // Refresh button event
    refreshBtn.addEventListener('click', loadStatus);
    
    async function loadStatus() {
        try {
            const response = await fetch('http://localhost:30007/');
            const data = await response.json();
            
            // Update status for each service
            document.getElementById('login-status').innerHTML = data['Login Service'] || '❌ Offline';
            document.getElementById('product-status').innerHTML = data['Product Service'] || '❌ Offline';
            document.getElementById('contact-status').innerHTML = data['Contact Service'] || '❌ Offline';
            
            // Add visual feedback
            refreshBtn.textContent = '✅ Refreshed';
            setTimeout(() => {
                refreshBtn.textContent = '🔄 Refresh Status';
            }, 2000);
            
        } catch (error) {
            console.error('Error loading status:', error);
            document.getElementById('login-status').innerHTML = '❌ Error';
            document.getElementById('product-status').innerHTML = '❌ Error';
            document.getElementById('contact-status').innerHTML = '❌ Error';
        }
    }
});
