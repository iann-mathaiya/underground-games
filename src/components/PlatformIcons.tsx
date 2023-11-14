import { IconType } from "react-icons"
import { BsGlobe } from "react-icons/bs"
import { SiNintendo } from "react-icons/si"
import { MdPhoneIphone } from "react-icons/md"
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"

export const Icons : { [key: string]: IconType } = {
    xbox: FaXbox,
    mac: FaApple,
    web: BsGlobe,
    pc: FaWindows,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    playstation: FaPlaystation,
}