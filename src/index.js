import * as components from './components/index'

const install = (instance) => {
  for (let componentKey in components) {
    instance.user((components)[componentKey])
  }
}

export default install

export * from './components'