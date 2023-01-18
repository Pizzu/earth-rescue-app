import { AccountNavMenuItem, Divider } from '@components/ui';

const AccountNavMenu: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-neutral-100 shadow-[0_2px_25px_rgba(0,0,0,0.05)] border-neutral-300 border-0.06 rounded-3xl">
      <div className="flex flex-col gap-2">
        <AccountNavMenuItem title="View Profile" href="/profile" width="1.5" height="1.5" icon={'userIcon'} />
        <AccountNavMenuItem title="Settings" href="/settings" width="1.5" height="1.5" icon={'settingsIcon'} />
        <AccountNavMenuItem title="Orders" href="/orders" width="1.5" height="1.5" icon={'receiptIcon'} />
      </div>
      <Divider />
      <div className="flex flex-col gap-2">
        <AccountNavMenuItem title="Help center" href="/help" width="1.5" height="1.5" icon={'helpIcon'} />
        <AccountNavMenuItem title="Support" href="/support" width="1.5" height="1.5" icon={'supportIcon'} />
        <AccountNavMenuItem title="Logout" href="/logout" width="1.5" height="1.5" icon={'logoutIcon'} danger={true} />
      </div>
    </div>
  );
};

export default AccountNavMenu;
