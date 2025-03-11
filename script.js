document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Load saved state from localStorage
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem("task_" + index);
        if (savedState === "true") {
            checkbox.checked = true;
        }
        checkbox.addEventListener("change", () => {
            localStorage.setItem("task_" + index, checkbox.checked);
        });
    });
});
