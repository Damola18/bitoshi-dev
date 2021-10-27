// All the tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach((clickedTab) => {
    clickedTab.addEventListener("click", () => {
        // Remove the active classes from all the tabs
        tabs.forEach((tab) => { 
            tab.classList.remove("active");
        });

        clickedTab.classList.add("active");
        const clickedTabChgColour = getComputedStyle
        (clickedTab).getPropertyValue(
            "color"
        );
        // document.body.style.background = clickedTabChgColour; 

    });
  
});