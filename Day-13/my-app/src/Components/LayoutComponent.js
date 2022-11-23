import useResize from "../hook/useResize";

const LayoutComponent = () => {
  const onScreenSmall = useResize(768);
  return (
    <div>
      <h2>Your are browsing on {onScreenSmall ? 'Small' : 'Large'} Device</h2>
    </div>
  );
};

export default LayoutComponent;
