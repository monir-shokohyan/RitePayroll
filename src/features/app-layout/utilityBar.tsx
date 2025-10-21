import { UtilityContainer } from './styles'
import { Flex } from '@mantine/core'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaPhoneAlt } from "react-icons/fa";
import IconWithText from '@shared/ui/IconWithText'
import { MdEmail } from "react-icons/md";
import { LuGlobe } from "react-icons/lu";

const UtilityBar = () => {
  return (
    <UtilityContainer>
        <Flex gap={10}>
            <IconWithText 
                text='+256 755 818183' 
                icon={FaPhoneAlt} 
                handleClick={() => window.location.href = 'tel:+256755818183'}
            />
            <IconWithText 
                text='sales@lotus.co.ug' 
                icon={MdEmail} 
                handleClick={() => window.location.href = 'mailto:sales@lotus.co.ug'}
            />
            <IconWithText 
                text='www.lotus.co.ug' 
                icon={LuGlobe} 
                handleClick={() => window.open('https://www.lotus.co.ug', '_blank')}
            />
            
        </Flex>
        <Flex gap={10}>

            <IconWithText allowText={false} icon={FaFacebook} iconSize={20} />
            <IconWithText allowText={false} icon={FaLinkedin} iconSize={20} />
            <IconWithText allowText={false} icon={FaInstagram} iconSize={20} />
            <IconWithText allowText={false} icon={FaGithub} iconSize={20} />
            <IconWithText allowText={false} icon={FaPhoneAlt} iconSize={20} />

        </Flex>
    </UtilityContainer>
  )
}

export default UtilityBar