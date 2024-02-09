import { FC, ReactNode, useEffect } from 'react';
import { Overlay } from './Modal.styled';
import Icon from '../Icon/Icon';
import { removeScrollLock } from './services/services';

interface Props {
  setVisible: (boolean: boolean) => void;
  title: string;
  children: ReactNode;
  setting?: boolean;
  logout?: boolean;
  daily?: boolean;
  delete?: boolean;
  isTeamModal?: boolean;
}

const Modal: FC<Props> = ({
  setVisible,
  isTeamModal,
  title,
  children,
  ...arg
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setVisible(false);
        removeScrollLock();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setVisible]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      setVisible(false);
      removeScrollLock();
    }
  };

  return (
    <Overlay
      onClick={handleBackdropClick}
      $setting={arg.setting}
      $daily={arg.daily}
      $logout={arg.logout}
      $delete={arg.delete}
    >
      <div
        className="modal"
        style={
          isTeamModal
            ? { backgroundColor: 'var(--secondary-light-blue)' }
            : { backgroundColor: 'var(--primary-white)' }
        }
      >
        <div
          className="header"
          style={
            isTeamModal
              ? {
                  color: 'var(--primary-blue)',
                  marginBottom: '0px',
                  fontStyle: 'italic',
                }
              : { color: '#2f2f2f', marginBottom: '24px', fontStyle: 'normal' }
          }
        >
          <p>{title}</p>
          <button
            onClick={() => {
              setVisible(false);
              removeScrollLock();
            }}
          >
            <Icon className="modal-icon" id="close" />
          </button>
        </div>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
