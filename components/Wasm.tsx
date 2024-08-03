const Wasm = () => {
  return (
    <>
      <canvas id="canvas" className="border border-secondary mx-auto hidden tb:block"/>
      <script type="text/javascript" src="/static/loader.js" async/>
      <script type="text/javascript" src="/static/out.js" async/>
    </>
  );
};

export default Wasm;
