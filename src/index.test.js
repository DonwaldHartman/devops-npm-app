describe('index.js', () => {
  it('should find the root element', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    expect(document.getElementById('root')).toBe(rootElement);
  });
});