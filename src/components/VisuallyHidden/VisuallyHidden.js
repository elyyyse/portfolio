const hiddenStyles = {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  width: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
};

function VisuallyHidden({ children }) {
  return <span style={hiddenStyles}>{children}</span>;
}

export default VisuallyHidden;
