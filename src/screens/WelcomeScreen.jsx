// Project files
import Image from "../assets/images/welcome-bg.png";
import ButtonCreateTask from "../components/ButtonCreateTask";

export default function WelcomeScreen({setModal}) {
  return (
    <div id="welcome-page">
      <img src={Image} alt="Woman getting out of a store with shopping bags" />
      <h1>Organize it all with Todoist</h1>
      <p>
      The best way to organize your life. Organize your tasks, lists and reminders in one easy to use app.
      </p>
      <p>
      To do list gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you.
      </p>

      {/* Primary controls */}
      <ButtonCreateTask setModal={setModal}/>
    </div>
  );
}
