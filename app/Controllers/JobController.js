import { ProxyState } from "../AppState.js"
import { getJobForm } from "../Forms/Jobform.js"
import { jobService } from "../Services/JobService.js"

function _drawJob() {
  const job = ProxyState.job
  let template = ''
  job.forEach(job => template += job.Template)
  // add to page
  document.getElementById('listings').innerHTML = template
}


export class JobController {
  constructor() {
    ProxyState.on('job', _drawJob)
  }

  createJob() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const formElem = window.event.target
    const jobData = {
      jobtitle: formElem.jobtitle.value,
      payment: formElem.payment.value,
      description: formElem.description.value,
      imgUrl: formElem.imgUrl.value
    }

    jobService.createJob(jobData)

    // clear the form
    formElem.reset()
    // Close the modal
    // @ts-ignore
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }

  deleteJob(id) {
    jobService.deleteJob(id)
  }

  showJob() {
    _drawJob()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getJobForm()
  }
}