import { Box, SvgHandler } from '@components/ui';

const Searchbar: React.FC = () => {
  return (
    <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <Box className="relative">
        <Box className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
          <SvgHandler icon="searchIcon" width="1.25" height="1.25" />
        </Box>
        <input
          type="text"
          id="default-search"
          className="block py-4 pl-12 pr-5 w-full h-full text-200 font-medium text-neutral-800 bg-neutral-100 rounded-full border-0.06 placeholder:text-neutral-500 border-neutral-500 focus:ring-primaryGreen focus:border-primaryGreen"
          placeholder="Search for a tree..."
          required={true}
        />
      </Box>
    </form>
  );
};

export default Searchbar;
