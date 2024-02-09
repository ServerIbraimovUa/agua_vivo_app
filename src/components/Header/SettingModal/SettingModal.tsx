import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import Icon from '../../Icon/Icon';
import { selectUser } from '../../../redux/auth/authSelectors';
import { useAppDispatch } from '../../../redux/redux_ts/hook';
import {
  updateUserAvatarThunk,
  updateUserInfoThunk,
} from '../../../redux/auth/auth.operations';
import {
  FormGenderWrap,
  FormSettingStyled,
  FormUserPassword,
  FormGenderContair,
  FormPasswordInput,
  FormNameInput,
  FormEmailInput,
  UserInfoWrap,
  BtnSubmit,
  FormUserWrap,
  MainInfoWrap,
} from './SettingModal.styled';
import { toast } from 'react-toastify';
import AvatarForm from './Avatar/AvatarForm';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n/i18n';
import { removeScrollLock } from '../../Modal/services/services';

type SettingForm = {
  avatar: File | null;
  gender: 'woman' | 'man';
  name: string;
  email: string;
  password?: string;
  newPassword: string;
  repeatNewPassword?: string;
};

const SettingModal: React.FC<{ setVisible: (boolean: boolean) => void }> = ({
  setVisible,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const [passwordToggle, setPasswordToggle] = useState('password');
  const [newPasswordToggle, setNewPasswordToggle] = useState('password');
  const [repeatNewPasswordToggle, setRepeatNewPasswordToggle] =
    useState('password');

  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SettingForm>({
    defaultValues: {
      gender: user.gender || 'woman',
      name: user.name || '',
      email: user.email,
      password: '',
      newPassword: '',
      repeatNewPassword: '',
    },
  });

  const handleTogglePassword = (field: string) => {
    if (field === 'password') {
      setPasswordToggle(prev => (prev === 'password' ? 'text' : 'password'));
    } else if (field === 'newPassword') {
      setNewPasswordToggle(prev => (prev === 'password' ? 'text' : 'password'));
    } else if (field === 'repeatNewPassword') {
      setRepeatNewPasswordToggle(prev =>
        prev === 'password' ? 'text' : 'password'
      );
    }
  };

  const onSubmit: SubmitHandler<SettingForm> = async data => {
    let newData: Partial<SettingForm> = {};

    if (file) {
      await dispatch(updateUserAvatarThunk(file))
        .unwrap()
        .then(() => toast.success(`${t('settingModal.avatar')}`))
        .catch(() => toast.error(`${t('settingModal.notifyError')}`));
    }

    if (data.gender !== user.gender || data.name !== user.name) {
      newData = { ...newData, gender: data.gender, name: data.name };
    }

    if (data.newPassword && data.newPassword !== data.password) {
      newData = {
        ...newData,
        password: data.password,
        newPassword: data.newPassword,
      };
    }

    if (Object.keys(newData).length > 0) {
      await dispatch(updateUserInfoThunk(newData))
        .unwrap()
        .then(() => toast.success(`${t('settingModal.notify')}`))
        .catch(() => toast.error(`${t('settingModal.notifyError')}`));
    }

    setVisible(false);
    removeScrollLock();
    reset({
      password: '',
      newPassword: '',
      repeatNewPassword: '',
    });
  };

  return (
    <FormSettingStyled onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <AvatarForm setFile={setFile} />
      <FormUserWrap>
        <MainInfoWrap>
          <FormGenderWrap>
            <span className="user-gender-title">
              {t('settingModal.gender')}
            </span>
            <FormGenderContair>
              <label className="gender-label">
                <input {...register('gender')} value="woman" type="radio" />
                <span className="gender-sub-title">{t('settingModal.w')}</span>
              </label>
              <label className="gender-label">
                <input {...register('gender')} value="man" type="radio" />
                <span className="gender-sub-title">{t('settingModal.m')}</span>
              </label>
            </FormGenderContair>
          </FormGenderWrap>
          <UserInfoWrap>
            <label className="label-name">
              <span className="user-info-title">{t('settingModal.name')}</span>
              <FormNameInput
                {...register('name')}
                className={errors.name ? 'error-input' : ''}
                type="text"
                placeholder={t('authPlaceholders.name')}
              />
            </label>

            <label className="label-email disabled-label">
              <span className="user-info-title">
                {t('authPlaceholders.email')}
              </span>
              <FormEmailInput
                disabled
                {...register('email')}
                className={errors.email ? 'error-input' : ''}
                type="email"
                placeholder={t('authPlaceholders.yourEmail')}
              />
            </label>
          </UserInfoWrap>
        </MainInfoWrap>
        <FormUserPassword>
          <span className="password-title">
            {t('authPlaceholders.password')}
          </span>

          <label className="password-label">
            <span className="password-sub-title">
              {' '}
              {t('settingModal.outdated')}
            </span>
            <FormPasswordInput
              {...register('password', {
                validate: (value, { newPassword }) => {
                  if (newPassword) {
                    return !!value || `${t('dailyModal.field')}`;
                  }
                  return true;
                },
              })}
              className={errors.password ? 'error-input' : ''}
              type={passwordToggle}
              placeholder={t('authPlaceholders.password')}
            />
            <span
              className="toggle-password"
              onClick={() => handleTogglePassword('password')}
            >
              {passwordToggle === 'text' ? (
                <Icon className="password-eye-icon" id="eye" />
              ) : (
                <Icon className="password-eye-outline-icon" id="eye-outline" />
              )}
            </span>
            {errors.password && (
              <p className="error-message">{`${errors.password.message}`}</p>
            )}
          </label>

          <label className="password-label">
            <span className="password-sub-title">{t('settingModal.new')}</span>
            <FormPasswordInput
              {...register('newPassword', {
                validate: (value, { password }) => {
                  if (password && value === password) {
                    return i18n.t('settingModal.newError');
                  }
                  if (password) {
                    return !!value || `${t('dailyModal.field')}`;
                  }
                  return true;
                },
                minLength: {
                  value: 8,
                  message: `${t('settingModal.atLeast')}`,
                },
                maxLength: {
                  value: 64,
                  message: `${t('settingModal.max')}`,
                },
              })}
              className={errors.newPassword ? 'error-input' : ''}
              type={newPasswordToggle}
              placeholder={t('authPlaceholders.password')}
            />
            <span
              className="toggle-password"
              onClick={() => handleTogglePassword('newPassword')}
            >
              {newPasswordToggle === 'text' ? (
                <Icon className="password-eye-icon" id="eye" />
              ) : (
                <Icon className="password-eye-outline-icon" id="eye-outline" />
              )}
            </span>
            {errors.newPassword && (
              <p className="error-message">{`${errors.newPassword.message}`}</p>
            )}
          </label>

          <label className="password-label">
            <span className="password-sub-title">
              {t('settingModal.repeat')}
            </span>
            <FormPasswordInput
              {...register('repeatNewPassword', {
                validate: value =>
                  value === getValues('newPassword') ||
                  `${t('settingModal.match')}`,
              })}
              className={errors.repeatNewPassword ? 'error-input' : ''}
              type={repeatNewPasswordToggle}
              placeholder={t('authPlaceholders.password')}
            />
            <span
              className="toggle-password"
              onClick={() => handleTogglePassword('repeatNewPassword')}
            >
              {repeatNewPasswordToggle === 'text' ? (
                <Icon className="password-eye-icon" id="eye" />
              ) : (
                <Icon className="password-eye-outline-icon" id="eye-outline" />
              )}
            </span>
            {errors.repeatNewPassword && (
              <p className="error-message">{`${errors.repeatNewPassword.message}`}</p>
            )}
          </label>
        </FormUserPassword>
      </FormUserWrap>
      <BtnSubmit disabled={isSubmitting} type="submit">
        {isSubmitting ? `${t('settingModal.saving')}` : `${t('addWater.save')}`}
      </BtnSubmit>
    </FormSettingStyled>
  );
};

export default SettingModal;
