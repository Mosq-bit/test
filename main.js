function openTab(tabId) {
    // Скрыть все вкладки
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    // Убрать активный класс со всех кнопок
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    // Показать выбранную вкладку и сделать кнопку активной
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

function toggleAccordion(header) {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Закрыть все аккордеоны при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    const accordionContents = document.querySelectorAll(".accordion-content");
    accordionContents.forEach(content => {
        content.style.display = "none";
    });
});