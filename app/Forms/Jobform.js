export function getJobForm() {
  return /*html*/`
  <form onsubmit="app.jobController.createJob()">
    <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="jobtitle" class="form-label">Job Title</label>
      <input type="text" class="form-control" name="jobtitle" id="jobtitle" aria-describedby="jobtitle"
        placeholder="Job Title..." required>
    </div>
  </div>
    <div>
      <label for="payment" class="form-label">Payment Amount</label>
      <input type="number" class="form-control" name="payment" id="payment" aria-describedby="payment"
        placeholder="Payment Amount..." min='1' required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`
}