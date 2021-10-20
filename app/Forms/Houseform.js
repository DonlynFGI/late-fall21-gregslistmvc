export function getHouseForm() {
  return /*html*/`
  <form onsubmit="app.houseController.createHouse()">
    <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id=address" aria-describedby="address"
        placeholder="Address..." required>
    </div>
    <div>
      <label for="neighborhood" class="form-label">Neighborhood</label>
      <input type="text" class="form-control" name="neighborhood" id="neighborhood" aria-describedby="neighborhood"
        placeholder="Neighborhood..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="yearBuilt" class="form-label">Year Built</label>
      <input type="number" class="form-control" name="yearBuilt" id="yearBuilt" aria-describedby="yearBuilt"
        placeholder="Year Built..." min="1950" max="2022" required>
    </div>
    <div>
      <label for="color" class="form-label">Color</label>
      <input type="color" class="form-control" name="color" id="color" aria-describedby="color" required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
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