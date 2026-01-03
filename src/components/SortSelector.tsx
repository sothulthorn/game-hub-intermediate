import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface SortSelectorProps {
  onSelectSortOrder?: (sortOrder: string) => void;
  selectedSortOrder?: string;
}

const SortSelector = ({
  onSelectSortOrder,
  selectedSortOrder,
}: SortSelectorProps) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: 'metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{' '}
        {selectedSortOrder
          ? sortOrders.find((order) => order.value === selectedSortOrder)?.label
          : 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder?.(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
