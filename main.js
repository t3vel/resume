function switchLanguage() {
    const contentEn = document.getElementById("content-en");
    const contentUa = document.getElementById("content-ua");
    const sidebarEn = document.getElementById("sidebar-en");
    const sidebarUa = document.getElementById("sidebar-ua");
    const button = document.getElementById("language-switch");

    if (contentEn.style.display === "none") {
        contentEn.style.display = "block";
        contentUa.style.display = "none";
        sidebarEn.style.display = "block";
        sidebarUa.style.display = "none";
        button.textContent = "UA";
    } else {
        contentEn.style.display = "none";
        contentUa.style.display = "block";
        sidebarEn.style.display = "none";
        sidebarUa.style.display = "block";
        button.textContent = "EN";
    }
}