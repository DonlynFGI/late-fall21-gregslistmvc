import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor(data) {
    // NOTE creates a random id when the object is created
    this.id = generateId()
    this.jobtitle = data.jobtitle
    this.payment = data.payment
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
  // the get<space>Template defines that this is a getter function
  // getter function FAKES a property
  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded">
        <img width="100%" class="job-img rounded-top" src="${this.imgUrl}" alt="job image">
        <div class="p-3">
          <p><b>${this.jobtitle}</b></p>
          <p>${this.description}</p>
          <div class="d-flex align-items-center">
            <p class="m-0"><em>$${this.payment}</em></p>
            </div>
            <div class="text-end">
            <button title="delete job" class='btn btn-danger justify-self-end' onclick="app.jobController.deleteJob('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}
