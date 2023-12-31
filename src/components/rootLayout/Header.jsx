import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Flex, HStack, Heading, useColorModeValue } from '@chakra-ui/react';
import Searchbar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      gap="1rem"
      alignItems={'center'}
      px={{ base: 2, lg: 4 }}
      py={2}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <HStack spacing={4} ml={2}>
        <FontAwesomeIcon icon={faMugHot} size="xl" />
        <Heading fontSize={'1.5rem'} display={{ base: 'none', lg: 'block' }}>
          Code-ial
        </Heading>
      </HStack>

      <Searchbar />

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Header;
