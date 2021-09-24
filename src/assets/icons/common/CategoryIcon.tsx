import themeObj from "src/providers/theme/themeObject";
import StyledSvgIcon from "../SvgIcon";

export const CategoryBulkIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon viewBox="0 0 24 24" id="category-icon-bulk" {...props}>
      <g transform="translate(0 0)">
        <path
          data-name="Fill 1"
          d="M2.539,0H5.924A2.549,2.549,0,0,1,8.463,2.56V5.975a2.549,2.549,0,0,1-2.539,2.56H2.539A2.549,2.549,0,0,1,0,5.975V2.56A2.549,2.549,0,0,1,2.539,0"
          transform="translate(11.537 0)"
          fill={themeObj.palette.grey["600"]}
        />
        <path
          data-name="Combined Shape"
          d="M14.075,20a2.549,2.549,0,0,1-2.538-2.56V14.026a2.549,2.549,0,0,1,2.538-2.561h3.387A2.549,2.549,0,0,1,20,14.026V17.44A2.549,2.549,0,0,1,17.462,20ZM2.539,20A2.55,2.55,0,0,1,0,17.44V14.026a2.55,2.55,0,0,1,2.539-2.561H5.925a2.549,2.549,0,0,1,2.538,2.561V17.44A2.549,2.549,0,0,1,5.925,20Zm0-11.465A2.549,2.549,0,0,1,0,5.974V2.56A2.549,2.549,0,0,1,2.539,0H5.925A2.548,2.548,0,0,1,8.463,2.56V5.974A2.549,2.549,0,0,1,5.925,8.535Z"
          transform="translate(0 0)"
          fill="#FFF"
        />
      </g>
    </StyledSvgIcon>
  );
};
export const CategoryIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon viewBox="0 0 24 24" id="category-icon" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.01348 2H4.97574C3.33089 2 2 3.34244 2 4.99552V8.05963C2 9.71203 3.33117 11.0551 4.97574 11.0551H8.01348C9.65805 11.0551 10.9892 9.71203 10.9892 8.05963V4.99552C10.9892 3.34244 9.65833 2 8.01348 2ZM4.97574 3.39535H8.01348C8.88499 3.39535 9.59387 4.11039 9.59387 4.99552V8.05963C9.59387 8.94418 8.88461 9.6598 8.01348 9.6598H4.97574C4.10461 9.6598 3.39535 8.94418 3.39535 8.05963V4.99552C3.39535 4.11039 4.10423 3.39535 4.97574 3.39535ZM19.0252 2H15.9865C14.3417 2 13.0108 3.34244 13.0108 4.99552V8.05963C13.0108 9.71203 14.342 11.0551 15.9865 11.0551H19.0252C20.669 11.0551 22 9.71184 22 8.05963V4.99552C22 3.34264 20.6693 2 19.0252 2ZM15.9865 3.39535H19.0252C19.8959 3.39535 20.6047 4.11049 20.6047 4.99552V8.05963C20.6047 8.94407 19.8955 9.6598 19.0252 9.6598H15.9865C15.1154 9.6598 14.4061 8.94418 14.4061 8.05963V4.99552C14.4061 4.11039 15.115 3.39535 15.9865 3.39535ZM4.97574 12.9449H8.01348C9.65852 12.9449 10.9892 14.2875 10.9892 15.9413V19.0045C10.9892 20.6576 9.65833 22 8.01348 22H4.97574C3.33089 22 2 20.6576 2 19.0045V15.9413C2 14.2875 3.3307 12.9449 4.97574 12.9449ZM8.01348 14.3402H4.97574C4.10413 14.3402 3.39535 15.0553 3.39535 15.9413V19.0045C3.39535 19.8896 4.10423 20.6047 4.97574 20.6047H8.01348C8.88499 20.6047 9.59387 19.8896 9.59387 19.0045V15.9413C9.59387 15.0553 8.88509 14.3402 8.01348 14.3402ZM19.0252 12.9449H15.9865C14.3415 12.9449 13.0108 14.2875 13.0108 15.9413V19.0045C13.0108 20.6576 14.3417 22 15.9865 22H19.0252C20.6693 22 22 20.6574 22 19.0045V15.9413C22 14.2877 20.6695 12.9449 19.0252 12.9449ZM15.9865 14.3402H19.0252C19.896 14.3402 20.6047 15.0554 20.6047 15.9413V19.0045C20.6047 19.8895 19.8959 20.6047 19.0252 20.6047H15.9865C15.115 20.6047 14.4061 19.8896 14.4061 19.0045V15.9413C14.4061 15.0553 15.1149 14.3402 15.9865 14.3402Z"
        fill="currentColor"
      />
    </StyledSvgIcon>
  );
};
