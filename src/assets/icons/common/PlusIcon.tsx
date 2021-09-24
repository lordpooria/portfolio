import StyledSvgIcon from "../SvgIcon";

export const PlusIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon id="mdi-plus" viewBox="0 0 24 24" {...props}>
      <path 
       fill="currentColor"
      d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </StyledSvgIcon>
  );
};
export const PlusSquareIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon id="mdi-plus" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3588 2H7.6412C4.25586 2 2 4.4199 2 7.89317V16.1068C2 19.5833 4.24992 22 7.6412 22H16.3588C19.7501 22 22 19.5833 22 16.1068V7.89317C22 4.41665 19.7501 2 16.3588 2ZM7.6412 3.39535H16.3588C18.9563 3.39535 20.6047 5.16587 20.6047 7.89317V16.1068C20.6047 18.8341 18.9563 20.6047 16.3588 20.6047H7.6412C5.04372 20.6047 3.39535 18.8341 3.39535 16.1068V7.89317C3.39535 5.16949 5.04923 3.39535 7.6412 3.39535ZM12 7.88587C12.3532 7.88587 12.6451 8.14834 12.6913 8.48887L12.6977 8.58354V11.2935H15.4109C15.7962 11.2935 16.1085 11.6058 16.1085 11.9911C16.1085 12.3444 15.8461 12.6363 15.5055 12.6825L15.4109 12.6888H12.6977V15.3988C12.6977 15.7841 12.3853 16.0964 12 16.0964C11.6468 16.0964 11.3549 15.834 11.3087 15.4934L11.3023 15.3988V12.6888H8.58915C8.20383 12.6888 7.89147 12.3765 7.89147 11.9911C7.89147 11.6379 8.15394 11.346 8.49448 11.2998L8.58915 11.2935H11.3023V8.58354C11.3023 8.19823 11.6147 7.88587 12 7.88587Z"
        fill="currentColor"
      />
    </StyledSvgIcon>
  );
};
