import { ChangeEvent, FC, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/authSelectors";
import { FormAvatar, FormAvatarLabel, FormAvatarTitle } from "./AvatarForm.styled";
import Icon from "../../../Icon/Icon";

type Props = {
  setFile: (file: File) => void;
};

const AvatarForm: FC<Props> = ({ setFile }) => {
  const user = useSelector(selectUser);
  const [previewURL, setpreviewURL] = useState<string | null>(null);
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const fileSizeInMegabytes = selectedFile.size / 1024 / 1024;
      const maxFileSizeInMegabytes = 10;

      if (fileSizeInMegabytes > maxFileSizeInMegabytes) {
        toast.error("The file is too large. Maximum allowed size is 10MB.");
        return;
      }

      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setpreviewURL(reader.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <FormAvatar>
      <FormAvatarTitle>Your photo</FormAvatarTitle>
      <FormAvatarLabel>
        {previewURL ? (
          <img className="avatar-setting" src={previewURL} alt="User avatar" />
        ) : (
          <img className="avatar-setting" src={user.avatar} alt="User avatar" />
        )}{" "}
        <input
          id="fileElem"
          className="input-avatar"
          type="file"
          accept=".jpeg,.jpg,.png,.gif"
          onChange={onChangeFile}
        />
        <Icon className="setting-modal-icon" id="arow-up" />
        <span className="text-loading">Upload a photo</span>
      </FormAvatarLabel>
    </FormAvatar>
  );
};

export default AvatarForm;
