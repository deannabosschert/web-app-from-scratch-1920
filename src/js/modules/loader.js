export function loadingState(state) {
  const loader = document.querySelector('div.loader')
  state === 'active'
  if (state === 'active') {
    loader.classList.add('loading')
  } else {
    loader.classList.remove('loading')
  }
}