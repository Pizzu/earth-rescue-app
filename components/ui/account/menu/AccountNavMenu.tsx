import { AccountNavMenuItem, Divider } from '@components/ui';

const AccountNavMenu: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-neutral-100 shadow-[0_2px_25px_rgba(0,0,0,0.05)] border-neutral-300 border-0.06 rounded-3xl">
      <AccountNavMenuItem title="View Profile" href="/trees" width="1.5" height="1.5" icon={'houseIcon'} />
      <AccountNavMenuItem title="Documentation" href="/trees" width="1.5" height="1.5" icon={'treesIcon'} />
      <Divider />
      <AccountNavMenuItem title="Documentation" href="/trees" width="1.5" height="1.5" icon={'treesIcon'} />
    </div>
  );
};

export default AccountNavMenu;
