import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HouseService {
  deleteHouse(id) {
    ProxyState.house = ProxyState.house.filter(house => house.id != id)
  }
  createHouse(houseData) {
    const house = new House(houseData)
    ProxyState.house = [...ProxyState.house, house]
  }

}


export const houseService = new HouseService()