const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    const id = $('[name= "character-id"]').val()
    charactersAPI.getOneRegister(id)
  }

  document.getElementById('delete-one').onclick = function () {
    const id = $('[name= "character-id-delete"]').val()
    charactersAPI.deleteOneRegister(id)
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {

    const id = $('[name= "chr-id"] ').val()
    e.preventDefault()
    charactersAPI.updateOneRegister(id)

  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()
    charactersAPI.createOneRegister()

  }
})
