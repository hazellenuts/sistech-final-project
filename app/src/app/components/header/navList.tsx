import Link from 'next/link';
import pathMappings, { PathMappingKeys } from './path-mappings';

interface NavItem {
  name: string;
  page: PathMappingKeys;
}

const navItems: NavItem[] = [
  { name: 'News', page: 'news' },
  { name: 'Video', page: 'video' },
  { name: 'JLPT Test', page: 'JLPTMainpage' },
  { name: 'Dictionary', page: 'dictionary' },
];

const NavList = () => {
  return (
    <ul className="flex space-x-8">
      {navItems.map((item) => (
        <li key={item.name} className='text-ocean-600 font-bold'>
          <Link href={pathMappings[item.page]} className="text-lg hover:text-ocean-300">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
