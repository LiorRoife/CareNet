import axios from 'axios';
import ROUTES from './routes/routesModel';

function saveMessagesToServer(messages) {
  axios
    .post(ROUTES.NEW_REPORT,{messages})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error saving messages:', error);
    });
}
export default saveMessagesToServer;
