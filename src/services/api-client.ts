import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '43ccb5a9b79c4ad58e7f478d88d39de0',
  },
});
