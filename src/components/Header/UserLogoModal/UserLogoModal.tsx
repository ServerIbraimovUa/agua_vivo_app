import { useRef, useState } from 'react';
import SettingModal from '../SettingModal/SettingModal';
import Modal from '../../Modal/Modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import { LogoWrapper } from './UserLogoModal.styled';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import Icon from '../../Icon/Icon';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../Language/LanguageModal';
import { addScrollLock } from '../../Modal/services/services';
// import PrifileImageEmail from "./PrifileImageEmail";

const UserLogoModal = () => {
  const [languagesVisible, setLanguagesVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  const { email, avatar, name } = useSelector(selectUser);

  useOutsideClick(menuRef, () => {
    if (anchorEl) {
      setTimeout(() => setAnchorEl(false), 100);
    }
  });

  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  const { t } = useTranslation();
  return (
    <LogoWrapper className="sixth-step">
      <button className="open-btn" onClick={handleClick}>
        <span className="name">{!name ? email?.substring(0, 8) : name}</span>
        <img
          className="user-photo"
          src={`${avatar}`}
          alt="default_logo"
          width="28"
          height="28"
        ></img>
        <Icon className="arrow-down" id="arrow-down" />
      </button>
      <div className={`btn-down ${anchorEl ? 'open' : ''}`} ref={menuRef}>
        <button
          className="button-popover"
          onClick={() => {
            setSettingsVisible(true);
            addScrollLock();
          }}
        >
          <div className="btn-container-setting">
            <Icon className="gear_settings" id="gear_settings" />
            <span className="button-popover-name">{t('header.setting')}</span>
          </div>
        </button>
        {settingsVisible && (
          <Modal
            setVisible={setSettingsVisible}
            title={t('header.setting')}
            setting={true}
          >
            <SettingModal setVisible={setSettingsVisible} />
          </Modal>
        )}
        <button
          onClick={() => {
            setVisible(true);
            addScrollLock();
          }}
        >
          <div className="btn-container-logout">
            <Icon className="logout" id="logout" />
            <span className="button-popover-name">{t('header.logout')}</span>
          </div>
        </button>
        {visible && (
          <Modal
            setVisible={setVisible}
            title={t('header.logout')}
            logout={true}
          >
            <UserLogoutModal setVisible={setVisible} />
          </Modal>
        )}
        <button
          onClick={() => {
            setLanguagesVisible(true);
            addScrollLock();
          }}
        >
          <div className="btn-container-lang">
            <Icon className="logout" id="global" />
            <span className="button-popover-name">{t('header.languages')}</span>
          </div>
        </button>
        {languagesVisible && (
          <Modal setVisible={setLanguagesVisible} title={t('header.languages')}>
            <LanguageModal />
          </Modal>
        )}
      </div>
    </LogoWrapper>
  );
};

export default UserLogoModal;
