export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    get PlayerTemplateCard() {
        return `
        <div class="col-3">
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="man">
      </div>
      <div class="col-6">
        ${this.name}
      </div>
      <div class="col-1">
       <button class="btn btn-danger" onclick="app.PlayerController.minusPoint('${this.name}')"> - </button>
      </div>
      <div class="col-1">
        ${this.score}
      </div>
      <div class="col-1">
      <button class="btn btn-success" onclick="app.PlayerController.scorePoint('${this.name}')"> + </button>
      </div>`
    }
}