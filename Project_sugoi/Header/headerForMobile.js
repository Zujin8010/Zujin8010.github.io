const toggleButton = document.getElementById('toggleButton');
        const closeButton = document.getElementById('closeButton');
        const collapseElement = document.getElementById('navbarSupportedContent');

        let isCollapsed = true;







        toggleButton.addEventListener('click', function () {
            isCollapsed = !isCollapsed;
            updateCollapse();
        });

        closeButton.addEventListener('click', function () {
            isCollapsed = !isCollapsed;
            updateCollapse();
        });
        function loadingPage() {
            const newPosition = isCollapsed ? '-100%' : '100%';
            collapseElement.style.left = newPosition;
        }
        function updateCollapse() {
            const newPosition = isCollapsed ? '-100%' : '0'; // Slide to left edge
            collapseElement.style.left = newPosition;
        }