export const ApiState = (Component) => {
  return (props) => {
    if (props.error) return <div className="color-danger">{props.error}</div>;
    if (props.isLoading) return <div>Loading</div>;
    // if (!props.data?.length) return <div>No data</div>;
    return <Component {...props} />;
  };
};
