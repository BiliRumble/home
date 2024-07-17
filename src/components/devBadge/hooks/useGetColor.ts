import { useColorMode } from "@chakra-ui/react";
import { colors, DevBadgeIcon } from "../devBadge";

export default function useGetColor(icon: DevBadgeIcon) {
  const { colorMode } = useColorMode();
  const iconID = icon as DevBadgeIcon;
  let color = colors[iconID];

  //if (color === '#FFFFFF' && colorMode === 'light') {
    //color = '#000000';
  /*} else */if (color === '#000000' && colorMode === 'dark') {
    color = '#FFFFFF';
  }

  return color;
}