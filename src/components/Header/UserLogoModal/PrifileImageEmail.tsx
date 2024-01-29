
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';

const PrifileImageEmail = () => {
    const { email } = useSelector(selectUser);
    const emailParts = email.split('');
    const firstEmailLetter = emailParts[0].toUpperCase();
  return (
    
        <span className="profile-image-email">
            {firstEmailLetter}
      
        </span>
    
  );
}

export default PrifileImageEmail;
