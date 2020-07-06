
$(document).ready(function() {

        var desc = document.querySelector('.description');
        var pq = document.querySelector('.pq');
        var ai = document.querySelector('.ai');
        var cm = document.querySelector('.cm');

        desc.innerHTML = "I won't bore you with the details until you pick a topic...";

        var pqinfo =
        "<b>Position: Extraordinary Intern</b><br>" +
        "This summer I'm working as a software enginnering intern at ProQuest on their UX Design team! More info to come.";
        var aiinfo =
        "<b>Position: Media Design Fellow</b><br>" +
        "In the Academic Innovations Lab, we coordinate and produce all of U of M’s online course content for learners on campus and across the globe." +
        "I’m involved in the production process which involves recording interviews, lectures, b-roll, etc. as well as the post-production work of editing. Also, my work includes creating and animating the graphics that Academic Innovations use to advertise their courses on social media.";
        var cminfo =
        "<b>Position: Research Assistant (Team Lead)</b><br>" +
        "Projects:<br>" +
        "Hybrid Teams - Our goal, at a high level, is to research the effects of introducing AI agents with varied ML models into a Human/AI team, given some classification task, in order to find out if the human worker is capable of maintaining an adequate mental model of their AI teammates or master the given classification task.<br><br>" +
        "Expresso Research Assistant - an application that allows web developers to create responsive interfaces by defining keyframes.";

        function changeColor(bye) {
          if (bye == "pq") {
            pq.style.color = "#7A4419";
            cm.style.color = "#262322";
            ai.style.color = "#262322";
          } else if (bye == "ai") {
            ai.style.color = "#7A4419";
            cm.style.color = "#262322";
            pq.style.color = "#262322";
          } else if (bye == "cm") {
            cm.style.color = "#7A4419";
            pq.style.color = "#262322";
            ai.style.color = "#262322";
          }
        }


        function changeDesc(eye) {
          if (eye == "pq") {
            desc.innerHTML = pqinfo;
            changeColor(eye);
          } else if (eye == "ai") {
            desc.innerHTML = aiinfo;
            changeColor(eye);
          } else if (eye == "cm") {
            desc.innerHTML = cminfo;
            changeColor(eye);
          } else {
            desc.innerHTML = "can't find it :("
          }
        }

        pq.onclick = function(){
          changeDesc("pq");
        }
        ai.onclick = function(){
          changeDesc("ai");
        }
        cm.onclick = function(){
          changeDesc("cm");
        }

});
