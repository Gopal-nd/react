// NotificationService.js
import { toast } from 'react-hot-toast';

const NotificationService = {
  success: (message) => {
    toast.success(message);
  },
  error: (message) => {
    toast.error(message);
  },
};

export default NotificationService;

