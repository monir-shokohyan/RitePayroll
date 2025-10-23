import { IconType } from "react-icons"
import { HiLightBulb } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";

interface WhyMapType {
    icon: IconType
    title: string
    description: string
}


export const WhyMap:WhyMapType[] = [
    {
        icon: HiLightBulb,
        title: 'Innovation',
        description: 'we pioneer cutting-edge software and IT solutions, empowering businesses in Uganda and beyond to thrive through creative, scalable technology.',
    },
    {
        icon: FaShieldAlt,
        title: 'Integrity',
        description: 'we uphold unwavering honesty and ethical standards in every solution we deliver, building trust and reliability for our clients across Uganda and beyond.',
    },
    {
        icon: FaTrophy,
        title: 'Customer Success',
        description: 'we prioritize your growth, delivering tailored software and IT solutions that drive efficiency, productivity, and success for businesses across Uganda.',
    },
    {
        icon: FaHandsHelping,
        title: 'Collaboration',
        description: 'we partner closely with businesses across Uganda, co-creating tailored software solutions that drive shared success and growth.',
    },
    {
        icon: GrPowerCycle,
        title: 'Continuous Improvement',
        description: 'we relentlessly pursue excellence, refining our software and IT solutions to deliver ever-evolving value and innovation for businesses across Uganda.',
    },
]