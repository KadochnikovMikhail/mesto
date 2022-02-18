export  class Section {
    constructor({ items, renderer }, selector) {
      this._items = items;
      this._renderer = renderer;
      this._selector = selector;
    }
  
    renderItems(items) {
      items.forEach((item) => this.addItem(this._renderer(item)))
    }
    

    addItem(element) {
      this._selector.prepend(element);
    }
  };
  