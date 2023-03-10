import { RecoilRoot } from 'recoil';
import { ChakraProvider, Box, theme, Heading, Flex } from "@chakra-ui/react"
import TodoList from './components/TodoList';
import ItemCreator from './components/ItemCreator';
import DisplaySelector from './components/DisplaySelector';

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Box p={8} h={24} w={"full"} display="flex" alignItems='center' bg="teal.400">
          <Heading>Todo</Heading>
        </Box>
        <Flex flexDirection='column' fontSize="xl" gridGap={2} px={4}>
          <Box>
            <DisplaySelector />
          </Box>
          <Box>
            <ItemCreator />
          </Box>
          <Box>
            <TodoList />
          </Box>
        </Flex>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;