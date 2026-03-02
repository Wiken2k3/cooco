import Pasta from '../assets/pasta.jpg'
import Pancake from '../assets/pancake.jpg'

export const discoverFeeds = [
  {
    id: '1',
    source: 'Minimalist Baker',
    avatar: 'https://ui-avatars.com/api/?name=Minimalist+Baker&background=random',
    title: 'Pasta',
    image: Pasta,
    time: '2h ago',
    servings: 10,
    duration: '1hr 10min',
    ingredients: ['1/2 cup Medjool dates, pitted', '1 cup walnuts', '2 tbsp cocoa powder'],
    steps: ['Gather ingredients. In a food processor...', 'In a mixing bowl, combine dates...', 'Roll into balls and chill.']
  },
  {
    id: '2',
    source: 'NYT Cooking',
    avatar: 'https://ui-avatars.com/api/?name=NYT+Cooking&background=random',
    title: 'Pancake',
    image: Pancake,
    time: '2h ago',
    servings: 4,
    duration: '30min',
    ingredients: ['2 cups flour', '1 tbsp sugar', '1 cup milk'],
    steps: ['Mix dry ingredients.', 'Add milk and eggs.', 'Cook on griddle.']
  }
]