import Cookie from "js-cookie";

const Logout = (props) => {
  const onLogout = () => {
    Cookie.remove("jwtToken");
    const { history } = props;
    history.replace("/");
  };

  return (
    <div>
      <button type="button" className="logout-button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  );
};

export default Logout;
