import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Forms/Houseform.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouse() {
  const house = ProxyState.house
  let template = ''
  house.forEach(house => template += house.Template)
  // add to page
  document.getElementById('listings').innerHTML = template
}


export class HouseController {
  constructor() {
    ProxyState.on('house', _drawHouse)
  }

  createHouse() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const formElem = window.event.target
    const houseData = {
      address: formElem.address.value,
      neighborhood: formElem.neighborhood.value,
      yearBuilt: formElem.yearBuilt.value,
      price: formElem.price.value,
      color: formElem.color.value,
      description: formElem.description.value,
      imgUrl: formElem.imgUrl.value
    }

    houseService.createHouse(houseData)

    // clear the form
    formElem.reset()
    // Close the modal
    // @ts-ignore
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }

  deleteHouse(id) {
    houseService.deleteHouse(id)
  }

  showHouse() {
    _drawHouse()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }
}