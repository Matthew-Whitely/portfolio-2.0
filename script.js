const app = {};
//nav Buttons
app.profileBtn = document.querySelector(".profileBtn");
app.portfolioBtn = document.querySelector(".portfolioBtn");
app.contactBtn = document.querySelector(".contactBtn");

//seections
app.profile = document.querySelector(".profile");
app.portfolio = document.querySelector(".portfolio");
app.contact = document.querySelector(".contact");

//animations FOR PROFILE AND HEADER
app.headerAnimation = document.querySelector(".animationContainer");
app.tractor = document.querySelector(".tractor");
app.tow = document.querySelector(".tow");
app.profileAnimation = document.querySelector(".profileAnimation2");

//ANIMATION FOR PORTFOLIO
app.portfolioAnimation = document.querySelector(".portfolioAnimation2");

//button functions
app.buttonActions = () => {
  app.profileBtn.addEventListener("click", function (e) {
    e.preventDefault();
    app.profile.classList.remove("hidden");
    app.profileAnimation.classList.toggle("profileAnimation2");
    app.profileAnimation.classList.toggle("profileAnimation");
    app.portfolio.classList.add("hidden");
    app.contact.classList.add("hidden");
    app.tractor.remove();
    app.tow.remove();

    //for portfolio so it will restart from beggining
    app.portfolioAnimation.classList.remove("portfolioAnimation");
    app.portfolioAnimation.classList.add("portfolioAnimation2");
  });

  app.portfolioBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //portfolio animation
    app.portfolioAnimation.classList.toggle("portfolioAnimation");
    app.portfolioAnimation.classList.toggle("portfolioAnimation2");
    app.portfolio.classList.remove("hidden");
    //making sure the other sections are hidden
    app.profile.classList.add("hidden");
    app.contact.classList.add("hidden");
    //profile animation so when you click it it will start for the beggining
    app.profileAnimation.classList.remove("profileAnimation");
    app.profileAnimation.classList.add("profileAnimation2");
    app.tractor.remove();
    app.tow.remove();
  });

  app.contactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    app.contact.classList.toggle("hidden");
    app.profile.classList.add("hidden");
    app.portfolio.classList.add("hidden");

    //restart animation form other sections
    app.profileAnimation.classList.remove("profileAnimation");
    app.profileAnimation.classList.add("profileAnimation2");

    app.portfolioAnimation.classList.remove("portfolioAnimation");
    app.portfolioAnimation.classList.add("portfolioAnimation2");
  });
};

app.animation = () => {
  app.tractor.addEventListener("animationend", () => {
    app.tractor.remove();
    app.tow.remove();
  });
};

app.init = () => {
  app.buttonActions();
  app.animation();
};

app.init();
