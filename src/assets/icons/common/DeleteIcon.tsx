import React from "react";
import themeObj from "src/providers/theme/themeObject";
import StyledSvgIcon from "../SvgIcon";

export const DeleteIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon
      {...props}
      viewBox="0 0 24 24"
      id="Iconly-Light-outline-Delete"
    >
      <g transform="translate(3 2)">
        <path
          data-name="Delete"
          d="M5.134,19.959A2.916,2.916,0,0,1,2.19,17.13l-.128-1.259L1.84,13.427l-.228-2.681-.26-3.218a.744.744,0,0,1,.67-.807.735.735,0,0,1,.773.587l.03.294.245,3.018.266,3.127c.121,1.354.224,2.45.307,3.219a1.453,1.453,0,0,0,1.521,1.494c2.452.053,4.977.054,7.606.005a1.477,1.477,0,0,0,1.586-1.507l.127-1.253c.037-.386.076-.813.119-1.275l.267-3.076.321-3.946a.743.743,0,0,1,.688-.689l.1,0a.741.741,0,0,1,.671.706l-.01.206-.314,3.851L16,15.241c-.069.751-.132,1.383-.185,1.881A2.939,2.939,0,0,1,12.8,19.964Q10.863,20,9,20,7.034,20,5.134,19.959ZM14.082,4.99H.732A.752.752,0,0,1,.632,3.5l.1-.006H3.918a.878.878,0,0,0,.829-.61l.029-.111.247-1.263A1.993,1.993,0,0,1,6.779.006L6.936,0h4.127a1.988,1.988,0,0,1,1.876,1.391l.048.162.238,1.215a.884.884,0,0,0,.745.715l.113.007h3.186a.751.751,0,0,1,.1,1.493l-.1.007Zm-2.168-1.5a2.441,2.441,0,0,1-.086-.262l-.038-.166-.227-1.169a.521.521,0,0,0-.413-.385L11.064,1.5H6.936a.525.525,0,0,0-.464.278l-.026.067L6.21,3.063a2.449,2.449,0,0,1-.124.427Z"
          fill="inherit"
        />
      </g>
    </StyledSvgIcon>
  );
};
export const DeleteBoldIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon
      {...props}
      viewBox="0 0 24 24"
      id="Iconly-Light-outline-Delete"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
        fill="currentColor"
      />
    </StyledSvgIcon>
  );
};
export const DeleteBulkIcon = (props: CommonIconProps) => {
  return (
    <StyledSvgIcon {...props} viewBox="0 0 24 24" id="Iconly-Bulk-Delete">
      <g id="Delete" transform="translate(3 2)">
        <path
          data-name="Fill 1"
          d="M15.289.792c0,.068-.533,6.809-.837,9.646a2.918,2.918,0,0,1-3,2.827c-1.293.029-2.56.039-3.806.039-1.323,0-2.616-.01-3.872-.039A2.917,2.917,0,0,1,.847,10.438C.534,7.591.011.86,0,.792A.794.794,0,0,1,.192.234.71.71,0,0,1,.715,0H14.585a.73.73,0,0,1,.523.234.748.748,0,0,1,.181.558"
          transform="translate(1.354 6.696)"
          fill={themeObj.palette.info.red}
          opacity="0.4"
        />
        <path
          data-name="Fill 4"
          d="M18,3.977a.722.722,0,0,0-.713-.733H14.371A1.281,1.281,0,0,1,13.13,2.227L12.967,1.5a1.985,1.985,0,0,0-1.9-1.5H6.936A1.988,1.988,0,0,0,5.023,1.546l-.153.682A1.283,1.283,0,0,1,3.63,3.244H.714A.722.722,0,0,0,0,3.977v.38a.729.729,0,0,0,.714.733H17.287A.729.729,0,0,0,18,4.357Z"
          transform="translate(0 0)"
          fill={themeObj.palette.info.red}
        />
      </g>
    </StyledSvgIcon>
  );
};