import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id

  const roomId = document.querySelector('#room-id').dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()} esta pergunta`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modal.open()
}
