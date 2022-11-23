import useResize from "../hook/useResize";

const LayoutComponent = () => {
  const onSmallScreen = useResize();
  return (
    <div>
      <h2>Your are browsing on {onSmallScreen ? "Small" : "Large"} Device</h2>
    </div>
  );
};

export default LayoutComponent;
