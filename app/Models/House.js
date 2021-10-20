import { generateId } from "../Utils/generateId.js"

export class House {
  constructor(data) {
    // NOTE creates a random id when the object is created
    this.id = generateId()
    this.address = data.address
    this.neighborhood = data.neighborhood
    this.yearBuilt = data.yearBuilt
    this.price = data.price
    this.color = data.color
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded">
        <img width="100%" class="house-img rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p><b>${this.address} - ${this.neighborhood} - ${this.yearBuilt}</b></p>
          <p>${this.description}</p>
          <div class="d-flex align-items-center">
            <div style="background-color: ${this.color}" class="color-swatch mx-2"></div>
            <p class="m-0"><em>$${this.price}</em></p>
            </div>
            <div class="text-end">
            <button title="delete house" class='btn btn-danger justify-self-end' onclick="app.houseController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}
