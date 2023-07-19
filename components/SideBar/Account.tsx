import ProfileIcon from "./ProfileIcon";

type AccountProps = {};

//todo: add user authentication update

const Account: React.FC<AccountProps> = () => {
  return (
    <div className="flex items-center p-3 my-3">
      <ProfileIcon />

      <div className="mx-3 flex flex-col">
        <p>Display Name</p>
        <p>@username</p>
      </div>
      <div className="grow flex justify-end">
        <div>...</div>
      </div>
    </div>
  );
};
export default Account;
