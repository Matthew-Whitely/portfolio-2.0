const app = {};
//nav Buttons
app.profileBtn = document.querySelector(".profileBtn");
app.portfolioBtn = document.querySelector(".portfolioBtn");
app.contactBtn = document.querySelector(".contactBtn");

//seections
app.profile = document.querySelector(".profile");
app.portfolio = document.querySelector(".portfolio");
app.contact = document.querySelector(".contact");

app.buttonActions = () => {
  app.profileBtn.addEventListener("click", function (e) {
    e.preventDefault();
    app.profile.classList.toggle("hidden");
    app.portfolio.classList.add("hidden");
    app.contact.classList.add("hidden");
  });

  app.portfolioBtn.addEventListener("click", function (e) {
    e.preventDefault();
    app.portfolio.classList.toggle("hidden");
    app.profile.classList.add("hidden");
    app.contact.classList.add("hidden");
  });

  app.contactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    app.contact.classList.toggle("hidden");
    app.profile.classList.add("hidden");
    app.portfolio.classList.add("hidden");
  });
};

app.init = () => {
  app.buttonActions();
};

app.init();
