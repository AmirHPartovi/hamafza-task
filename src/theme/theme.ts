import { createTheme } from "@mui/material/styles";
import "@fontsource/almarai";
import "@fontsource/lato";

const theme = createTheme({
    palette: {
        primary: {
          main: '#2FD1C5',
          contrastText:'#FFF'
        },
        error:{
            main:'#FF7A7B',
        },
        success:{
            main:'#26BFBF',
        },
        info:{
            main:'#1e90fe',
            100:'#FDD563',
            200:'#8BE38B',
            300:'#B3B4F7',
            400:'#C4D7FF',
            500:'#E48FFF',
        },
        grey:{
            50:'#CCCCCC',
            100:'#585A66',
            200:'#2F394B',
            300:'#00394C',
        },
        text:{
            primary:'#00394C',
            secondary:'#585A66',
            disabled:'#CCCCCC',
        },
        divider:'#E4EDFF',
        background:{
            default:'#F5FBFF'
        },
    },
    typography:{
        fontFamily:'lato',
        fontSize: 16,
        fontWeightLight: 400,
        h3:{
            fontFamily:'almarai',
            fontSize:'1.875rem',// 30px / 16 px
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '120%',
            color:'#00394C',
        },
        h4:{
            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '1.3125rem',//21px
            lineHeight: '120%',
            color: '#2F394B',

        },
    }
  });


export default theme;