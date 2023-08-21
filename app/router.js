import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayerController } from "./controllers/PlayerController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: PlayerController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
      <section class="row text-center">
      <h2>GameNight</h2>
    </section>
    <section class="row" id="players">
    
    </section>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {

  }
]