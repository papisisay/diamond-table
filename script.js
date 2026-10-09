
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
const filterButtons = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close navigation after selecting a link
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Interactive menu categories
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((filter) => {
      filter.classList.remove("active");
    });

    button.classList.add("active");

    dishes.forEach((dish) => {
      const matches =
        selectedCategory === "all" ||
        dish.dataset.category === selectedCategory;

      dish.classList.toggle("hidden", !matches);
    });
  });
});
