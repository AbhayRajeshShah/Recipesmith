import "./App.scss";
import SmokeScreen from "./components/Smokescreen";

function App() {
  return (
    <div className="App">
      <SmokeScreen text1={"Instant Recipes, Meal Plans & Much More !"} />
      <section id="services">
        <p className="title">Services</p>
        <div className="service-cards">
          <div className="service">
            <img
              src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBtYWtlcnxlbnwwfHx8fDE2Nzg2MTAxNjE&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              srcset=""
            />
            <p className="sub-title">Cook Book</p>
            <p className="desc">
              A Complete Collection of Recipes, Plating Techniques & Instruction
              to help you make not only mouth watering but also visually
              appealing tasty food
            </p>
          </div>
          <div className="service">
            <img
              src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              srcset=""
            />
            <p className="sub-title">Meal Planner</p>
            <p className="desc">
              A service that helps users plan out their meals for the week ahead
              and make sure they are eating the right amount of food for their
              goals.
            </p>
          </div>
          <div className="service">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              srcset=""
            />
            <p className="sub-title">Nutrition Tracker</p>
            <p className="desc">
              This enables a user to track his nutrition with each meal to help
              them with their fitness & health goals.
            </p>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="title">About Us</p>
        <p className="desc">
          The daily problem of having to decide on a menu that is not repeated
          often, is healthy and ofcourse delicious can be tiresome. This is why
          we started Recipesmith. A perfect place to find good tasting , healthy
          and easy to make recipes which can get rid of this issue.
        </p>
        <p className="desc">
          Complete Meal Plans, Nutrition Tracker and various other features
          enable users to have utmost power over their choices of food. Inter
          Cuisine diet is something often considered to be tough but with
          recipesmith you'll see just how easy these recipes are to make.
        </p>
        <p className="desc">
          Thank you for taking the time to learn about Recipe Smith. We look
          forward to helping you make tasty and healthy meals in the comfort of
          your own home.
        </p>
      </section>
      <footer>
        <p className="logo">Recipe Smith</p>
        <div className="socials">
          <a href="http://google.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
