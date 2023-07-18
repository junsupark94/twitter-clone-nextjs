import ProfileIcon from "./ProfileIcon";

type AccountProps = {};

//todo: add user authentication update

const Account: React.FC<AccountProps> = () => {
  return (
    <div className="flex items-center">
      <ProfileIcon />

      <div className="2xl:hidden">
        <div>
          <p>Display Name</p>
          <p>@username</p>
        </div>
        ...
      </div>
    </div>
  );
};
export default Account;
