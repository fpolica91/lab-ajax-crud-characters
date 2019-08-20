class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }



  getFullList() {

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then(result => {
        let container = $(".characters-container")
        result.data.map(char => {
          let list = ` <div class="character-info">
        <div class="name">${char.name}</div>
        <div class="occupation">${char.occupation}</div>
        <div class="cartoon">${char.debt}</div>
        <div class="weapon">${char.weapon}</div>
      </div>`
          container.append(list)
        });
      })

  }

  getOneRegister(id) {

    axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
      .then(
        result => {
          let container = $(".characters-container")
          container.html(' ')
          let list = ` <div class="character-info">
        <div class="name">${result.data.name}</div>
        <div class="occupation">${result.data.occupation}</div>
        <div class="cartoon">${result.data.debt}</div>
        <div class="weapon">${result.data.weapon}</div>
      </div>`
          container.append(list)
        })
      .catch(err => console.log(err))
  }

  createOneRegister() {
    const name = $('#createName').val()
    const occupation = $('#createOccupation').val()
    const weapon = $('createWeapon').val()
    const charInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon
    }




  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
      .then(response => console.log('deleted ' + response.data))
      .catch(err => console.log(err))
  }
}
