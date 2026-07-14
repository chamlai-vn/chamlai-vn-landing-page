// Single source of truth for the landing page's outbound links.
// Edit here, then run `npm run build` to regenerate config.js.
export const LINKS = {
    cta: "https://demo.chamlai.vn",
    github: "https://github.com/chamlai-vn/",
    contact: "https://www.linkedin.com/in/nvbien2000",
    author: "https://www.linkedin.com/in/nvbien2000",
};
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-link]").forEach((el) => {
        const key = el.dataset.link;
        const href = LINKS[key];
        if (href)
            el.href = href;
    });
});
