import { UtilityContainer } from './styles'
import { Flex } from '@mantine/core'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import IconWithText from '@shared/ui/IconWithText'
import { MdEmail } from "react-icons/md";
import { LuGlobe } from "react-icons/lu";
import { memo } from 'react';

const UtilityBar = memo(() => {
  return (
    <UtilityContainer>
        <Flex gap={10}>
            <IconWithText
                fontSize='14px' 
                text='+256 755 818183' 
                icon={FaPhoneAlt} 
                handleClick={() => window.location.href = 'tel:+256755818183'}
            />
            <IconWithText 
                fontSize='14px'
                text='sales@lotus.co.ug' 
                icon={MdEmail} 
                handleClick={() => window.location.href = 'mailto:sales@lotus.co.ug'}
            />
            <IconWithText 
                fontSize='14px'
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
})

export default UtilityBar