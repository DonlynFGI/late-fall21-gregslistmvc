import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"

class JobService {
  deleteJob(id) {
    // Filters the array of cars removing the one with the id that was passed
    ProxyState.job = ProxyState.job.filter(job => job.id != id)
  }
  createJob(jobData) {
    const job = new Job(jobData)
    ProxyState.job = [...ProxyState.job, job]
  }

}


export const jobService = new JobService()