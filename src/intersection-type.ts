type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

// Combining multiple types into one.
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
