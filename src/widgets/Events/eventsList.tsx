import { EventsCard } from '@/entities/Events/_index'
import { events } from '@/shared/api/mock'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react'
import { sortEventsByActiveAndDate } from '@/shared/helpers/sort'
import { CardsList } from '@/shared/ui/_index'

export const EventsList = () => {
  return (
    <Box w={'full'} p={4} border={'2px solid'} borderColor={'gray.100'} rounded={20}>
      <Tabs w={'full'} variant="soft-rounded">
        <TabList>
          <Tab
            px={3}
            color={'black'}
            _selected={{ color: 'white', bg: 'lightBrand.900', borderColor: 'lightBrand.900' }}
          >
            Встречи {events.length}
          </Tab>
          <Tab
            px={3}
            color={'black'}
            _selected={{ color: 'white', bg: 'lightBrand.900', borderColor: 'lightBrand.900' }}
          >
            Приглашения
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CardsList array={sortEventsByActiveAndDate(events)}>
              {(item) => <EventsCard key={item.id} event={item} />}
            </CardsList>
          </TabPanel>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
