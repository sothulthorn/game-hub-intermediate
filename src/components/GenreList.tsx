import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.name}>
            <HStack paddingY="5px">
              <Image
                boxSize={'32px'}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
