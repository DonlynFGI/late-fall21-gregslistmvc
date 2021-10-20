import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]

  house = [
    new House({ address: '101 East Variable Avenue', neighborhood: 'Good', yearBuilt: '1980', price: 1500000, color: '#FF0000', description: 'Beautiful house located mid-town. Schools nearby', imgUrl: 'https://live.staticflickr.com/4153/4839717638_49364bdf03_b.jpg' }),

    new House({ address: '2105 North Semicolon Street', neighborhood: 'A bit shifty', yearBuilt: '1999', price: 28000000, color: '#FA0075', description: 'Minimal house in a less-than average neighborhood. Only a few spiders', imgUrl: 'https://i2.wp.com/worleygig.com/wp-content/uploads/2013/07/pink-retro-modern-house.jpg' }),

    new House({ address: '1615 West !Important Way', neighborhood: 'Keep your doors locked', yearBuilt: '1967', price: 12000, color: '#8d6d3a', description: 'Budget-friendly house for those frugal type customers, definitely a bargain buy!', imgUrl: 'https://s14458.realeverest.com/uploads/sites/4537/2020/08/badneighbors-001-768x456.jpg' })
  ]

  job = [
    new Job({ jobtitle: 'Gardener needed', payment: 15, description: 'I need someone to maintain and water my garden', imgUrl: 'https://th.bing.com/th/id/OIP.nadYDAVuNh2b2OY7voVorgHaFj?pid=ImgDet&rs=1' }),

    new Job({ jobtitle: 'Hot Men Needed', payment: 50, description: 'I need hot men, no questions asked. Looking for help with pool cleaning', imgUrl: 'https://th.bing.com/th/id/OIP.C7z-WU4CtYb2_w2feCq48AHaE7?pid=ImgDet&rs=1' }),

    new Job({ jobtitle: '"Pest" Removal', payment: 5000, description: 'I need a certain recent "house guest" removed, looking for someone with a particular set of skills.', imgUrl: 'https://i.imgur.com/YJBRpiD.jpg' }),
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
