const HelpPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-thin text-accent pb-2">
        Tetris controls:
      </h1>
      <table className="table-fixed border-b border-white">
        <thead>
          <tr className="border-b border-white">
            <td className="w-40">Category</td>
            <td className="w-40">Key</td>
            <td className="w-60">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td rowSpan={2} className="border-b border-white">
              Camera controls
            </td>
            <td className="mx-2">Scroll wheel:</td>
            <td>move camera up/down</td>
          </tr>
          <tr className="table-row border-b border-white">
            <td>Arrow keys:</td>
            <td>move camera vertically</td>
          </tr>
          <tr className="table-row">
            <td rowSpan={4}>Piece rotations</td>
            <td>i/k/j/l</td>
            <td>move piece up/down/left/right</td>
          </tr>
          <tr>
            <td>w/x</td>
            <td>rotate x-y axis</td>
          </tr>
          <tr>
            <td>a/d</td>
            <td>rotate x-z axis</td>
          </tr>
          <tr className="border-b border-white">
            <td>e/z</td>
            <td>rotate y-z axis</td>
          </tr>
          <tr>
            <td rowSpan={2}>Piece dropping</td>
            <td>s</td>
            <td>drop piece</td>
          </tr>
          <tr>
            <td>o</td>
            <td>lower piece down 1 square</td>
          </tr>
        </tbody>
      </table>
      <h1 className="text-xl font-thin text-accent pb-2 mt-4">
        Rules
      </h1>
      <ul className="list-decimal list-inside">
        <li>
          Lines are cleared when 10 squares in a row. Rows are first cleared
          horizontally, then vertically
        </li>
        <li>You lose if a square reaches a height of 20</li>
        <li>smoother gravity</li>
      </ul>
      <h1 className="text-xl font-thin text-accent pb-2 mt-4">
        Coming soon:
      </h1>
      <ul className="list-decimal list-inside">
        <li>better title screen</li>
        <li>scoring</li>
        <li>smoother gravity</li>
      </ul>
    </div>
  );
};
export default HelpPage;
