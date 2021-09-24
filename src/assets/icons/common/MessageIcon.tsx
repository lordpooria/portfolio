import themeObj from "src/providers/theme/themeObject";
import StyledSvgIcon from "../SvgIcon";

export const MessageBulkIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon
      viewBox="0 0 24 24"
      id="Iconly_Light-outline_Message"
      {...props}
    >
      <path
        id="Fill_1"
        data-name="Fill 1"
        d="M20,7.143a5.047,5.047,0,0,1-5.03,5.06H5.05A5.047,5.047,0,0,1,0,7.163v-.01S.006,2.727.014.5A.5.5,0,0,1,.822.109C3.2,1.994,7.447,5.431,7.5,5.476a4.067,4.067,0,0,0,2.53.89,4.013,4.013,0,0,0,2.53-.9C12.613,5.43,16.767,2.1,19.179.18a.5.5,0,0,1,.811.39C20,2.779,20,7.143,20,7.143"
        transform="translate(2 8.797)"
        fill={themeObj.palette.info.blue}
        opacity="0.4"
      />
      <path
        id="Fill_4"
        data-name="Fill 4"
        d="M18.973,2.674A5.035,5.035,0,0,0,14.527,0H4.547A5.035,5.035,0,0,0,.1,2.674.864.864,0,0,0,.322,3.752L7.747,9.691a2.826,2.826,0,0,0,1.78.629h.02a2.826,2.826,0,0,0,1.78-.629l7.425-5.939a.864.864,0,0,0,.221-1.078"
        transform="translate(2.503 3)"
        fill={themeObj.palette.info.blue}
      />
    </StyledSvgIcon>
  );
};
export const MessageIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon
      viewBox="0 0 24 24"
      id="Iconly_Light-outline_Message"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5253 3.00005L7.45618 3C4.28665 3 2 5.56151 2 8.85897V15.141C2 18.4385 4.28665 21 7.45618 21H16.5168C18.0392 20.9829 19.4802 20.3421 20.5126 19.2266C21.5449 18.111 22.0786 16.6183 21.9893 15.0959L21.9906 8.85897C22.0786 7.38171 21.5449 5.88895 20.5126 4.77344C19.4802 3.65794 18.0392 3.01705 16.5253 3.00005ZM7.45618 4.52843L16.5084 4.52838C17.6073 4.54072 18.6532 5.00592 19.4026 5.81562C20.152 6.62533 20.5393 7.70887 20.4745 8.81389L20.4732 15.141C20.5393 16.2911 20.152 17.3747 19.4026 18.1844C18.6532 18.9941 17.6073 19.4593 16.5084 19.4716L7.45618 19.4716C5.16279 19.4716 3.51744 17.6284 3.51744 15.141V8.85897C3.51744 6.37155 5.16279 4.52843 7.45618 4.52843ZM18.024 8.63837C17.7622 8.30886 17.2847 8.25555 16.9576 8.5193L12.8583 11.8242L12.7408 11.9068C12.2575 12.2095 11.6228 12.1816 11.1598 11.8181L7.03057 8.51731L6.93763 8.4536C6.61736 8.26727 6.20141 8.34031 5.96461 8.64086C5.70412 8.97146 5.75904 9.45216 6.08726 9.71453L10.2217 13.0195L10.383 13.1375C11.4231 13.8459 12.8013 13.8067 13.7988 13.0236L17.9058 9.71255L17.9882 9.63551C18.24 9.36261 18.2621 8.93792 18.024 8.63837Z"
        fill="currentColor"
      />
    </StyledSvgIcon>
  );
};
