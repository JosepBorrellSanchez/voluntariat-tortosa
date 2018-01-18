import { mount } from '@vue/test-utils'
import Login from '@/components/Login'

describe('Login', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Login)
  })

  it('shows message', () => {
    expect(wrapper.find('h1').text()).to.equal('Login')
  })

  it('change message', () => {
    let button = wrapper.find('button')

    expect(wrapper.find('.message h1').text()).to.equal('Login')

    button.trigger('click')

    expect(wrapper.find('.message h1').text()).to.equal('Changed')
  })
})
