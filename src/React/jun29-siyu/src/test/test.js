const spy = chai.use(spies).spy
const {document}=(new JSDOM('')).window
global.document = document
global.window = document.defaultView

describe('Button', () => {
    it('renders with text', () => {
        const text = 'text'
        const renderer = new ShallowRenderer()
        renderer.render(<Button text={text} />)
        const button = renderer.getRenderOutput()

        expect(button.type).to.equal('button')
        expect(button.props.children).to.equal(text)
    })

    it('fires the onClick callback', () => {
        const onClick = spy()
        const tree = TestUtils.renderIntoDocument(
            <Button onClick={onClick} />
        )
        const button = TestUtils.findRenderedDOMComponentWithTag(
            tree,
            'button'
        )

        TestUtils.Simulate.click(button)
        expect(onClick).to.be.called()
    })
})
