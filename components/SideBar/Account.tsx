import ProfileIcon from "./ProfileIcon";

type AccountProps = {};

//todo: add user authentication update

const Account: React.FC<AccountProps> = () => {
  return (
    <div className="absolute bottom-6 flex items-center">
      <ProfileIcon />

      <div>
        <p>Display Name</p>
        <p>@username</p>
      </div>
      ...
    </div>
  );
};
export default Account;
