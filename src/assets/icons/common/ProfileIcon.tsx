import themeObj from "src/providers/theme/themeObject";
import StyledSvgIcon from "../SvgIcon";

export const ProfileBulkIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon id="Profile" viewBox="0 0 24 24" {...props}>
      <g transform="translate(4 2)">
        <path
          data-name="Fill 1"
          d="M8,0C3.684,0,0,.68,0,3.4S3.661,6.825,8,6.825c4.313,0,8-.679,8-3.4S12.334,0,8,0"
          transform="translate(0 13.175)"
          fill="#FFF"
        />
        <path
          data-name="Fill 4"
          d="M5.292,10.584A5.292,5.292,0,1,0,0,5.292a5.273,5.273,0,0,0,5.292,5.292"
          transform="translate(2.705 0)"
          fill={themeObj.palette.secondary["500"]}
        />
      </g>
    </StyledSvgIcon>
  );
};
export const ProfileIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon viewBox="0 0 24 24" {...props}>
      <g id="Profile" transform="translate(4 2)">
        <path
          id="Profile-2"
          data-name="Profile"
          d="M6.676,19.964c-.121,0-.206,0-.284,0l-.144-.005a2.214,2.214,0,0,1-.4-.047,15.4,15.4,0,0,1-2.333-.338l-.256-.054a3.961,3.961,0,0,1-2.975-1.9A2.936,2.936,0,0,1,0,16.363,2.876,2.876,0,0,1,.287,15.1a4.334,4.334,0,0,1,3.2-1.948,16.744,16.744,0,0,1,2.339-.331c.718-.063,1.448-.094,2.17-.094s1.452.031,2.17.094l.461.039a17.218,17.218,0,0,1,1.873.292c1.727.355,2.749.979,3.215,1.962a2.912,2.912,0,0,1,0,2.5c-.464.978-1.512,1.616-3.2,1.949l-.468.1a15.713,15.713,0,0,1-1.88.245c-.715.061-1.442.092-2.158.092C7.563,20,7.114,19.988,6.676,19.964Zm-.734-5.7a15.528,15.528,0,0,0-2.156.305,3.21,3.21,0,0,0-2.205,1.168,1.417,1.417,0,0,0-.14.624,1.452,1.452,0,0,0,.139.627c.255.527,1.025.93,2.228,1.165l.353.075a15.507,15.507,0,0,0,1.874.249,1.84,1.84,0,0,0,.287.033l.393.006c.429.023.866.035,1.3.035.678,0,1.366-.029,2.047-.087a14.344,14.344,0,0,0,2.162-.315l.225-.048c1.061-.24,1.743-.624,1.973-1.108a1.463,1.463,0,0,0,0-1.259c-.245-.516-1.008-.92-2.209-1.167a15.575,15.575,0,0,0-2.152-.3l-.013,0c-.675-.059-1.361-.089-2.038-.089S6.628,14.2,5.943,14.264ZM2.692,5.335A5.313,5.313,0,1,1,8,10.67,5.33,5.33,0,0,1,2.692,5.335Zm1.442,0A3.871,3.871,0,1,0,8,1.448,3.883,3.883,0,0,0,4.134,5.335Z"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </StyledSvgIcon>
  );
};
export const ProfileBoldIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
        fill="inherit"
      />
    </StyledSvgIcon>
  );
};
