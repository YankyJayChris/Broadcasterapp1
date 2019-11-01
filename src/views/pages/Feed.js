import Sidebar from "../components/Sidebar.js";
import Notification from "./../components/Notification.js";
import Dashborad from './../components/Dashborad.js';

let Feed = {
  render: async posts => {
    let SidebarFeed = await Sidebar.render();
    let DashboradFeed = await Dashborad.render();
    let NotificationFeed = await Notification.render();
     let view = /*html*/ `
            <div class="content">
               ${SidebarFeed} 
               <div class="center">
                    ${DashboradFeed}
               </div>
               <div class="s-hide">
                    ${NotificationFeed}
                </div>
            </div>
        `;
        return view;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    Sidebar.events();
    Dashborad.events();
    Notification.events();
  }
};

export default Feed;
