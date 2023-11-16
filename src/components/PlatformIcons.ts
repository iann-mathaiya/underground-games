import { IconType } from "react-icons"
import { BsGlobe } from "react-icons/bs"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo, SiAtari, SiSega, SiCommodore } from "react-icons/si"
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"

export const Icons: { [key: string]: IconType } = {
  xbox: FaXbox,
  mac: FaApple,
  web: BsGlobe,
  sega: SiSega,
  pc: FaWindows,
  linux: FaLinux,
  atari: SiAtari,
  ios: MdPhoneIphone,
  android: FaAndroid,
  nintendo: SiNintendo,
  commodore: SiCommodore,
  playstation: FaPlaystation,
}
