import clsx from 'clsx';

const Grid = (props) => {
  return (
    <div {...props} className={clsx('grid grid-flow-row gap-2 py-5', props.className)}>
      {props.children}
    </div>
  );
}

const GridCell = (props) => {
  return (
    <div
      {...props}
      className={clsx(
        'relative aspect-square h-full w-full transition-opacity',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

Grid.Cell = GridCell;
export default Grid;