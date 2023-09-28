import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface DashboardTopBoxProps {
  title: string;
  value: number;
  icon: ReactNode;
  bgColor: string;
  color: string;
  bgColorIcon: string;
}

export function TopBox({
  title, value, icon, bgColor, color, bgColorIcon
}: DashboardTopBoxProps) {
  return (
    <Box
      bgcolor={'#282828'}
      height={'20vh'}
      width={'100% - 20px'}
      borderRadius={'20px'}
      padding={'20px'}
      display={'grid'}
      gap={'10px'}
      gridTemplateColumns={'1fr 2fr 1fr'}
    >
      <Box
        height={'100%'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
      >
        <Box
          bgcolor={bgColorIcon}
          borderRadius={'10px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'8vh'}
          width={'80%'}
        >
          {icon}
        </Box>
      </Box>
      <Box
        height={'100%'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'start'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Typography
          fontSize={'16px'}
          color={'#9B9B9B'}
        >
          {title}
        </Typography>
        <Typography
          fontSize={'24px'}
          color={'#fff'}
        >
          R$ {value}
        </Typography>
      </Box>
      <Box
        height={'100%'}
        width={'100%'}
        justifyContent={'start'}
        alignItems={'center'}
        display={'flex'}
      >
        <Typography
          fontSize={'12px'}
        >
          <br />
          <span style={{
            backgroundColor: bgColor,
            color: color,
            borderRadius: '10px',
            padding: '5px',
          }}>+ 0.00%</span>
        </Typography>

      </Box>
    </Box>
  );
}
