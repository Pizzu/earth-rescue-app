import { SidebarLink } from '@components/link';
import { Divider, Logo } from '@components/ui';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-22 bg-neutral-200 border-r-0.06 border-neutral-300">
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-col gap-3 pt-3">
          <Logo size="medium" position="relative" />
          <Divider />
        </div>
        <div className="flex flex-col gap-8 justify-items-center mt-11">
          <SidebarLink title="Home" href="/" icon="houseIcon" width="1.5" height="1.5" />
          <SidebarLink title="Trees" href="/trees" icon="treesIcon" width="1.875" height="1.79" />
          <SidebarLink title="Goals" href="/goals" icon="goalsIcon" width="1.875" height="1.875" />
          <SidebarLink title="News" href="/news" icon="newsIcon" width="1.8" height="1.8" />
          <SidebarLink title="Community" href="/community" icon="communityIcon" width="2.19" height="2" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
