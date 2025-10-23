import { VerticalLine } from "@features/app-layout/styles";
import { Flex, Image } from "@mantine/core";
import { TextResponsive, TitleWithFamily } from "@shared/ui/Typography";
import Wrapper from "@shared/ui/horWrapper";
import { SavedColors } from "@shared/constants";
import ActionLayout from "@shared/ui/ActionLayout";
import IconWithText from "@shared/ui/IconWithText";
import { MdOutlineReply } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import ContactForm from "./contactForm";

function Ui() {
  return (
    <>
      <Wrapper
        bgImage="/bgNet.png"
        isReverseWrap={false}
        fullHeight={false}
        rightSection={<ContactForm />}
        RSJustify="center"
        leftWidth="60%"
        rightWidth="40%"
      >
        <TextResponsive color={SavedColors.Primaryblue} fontSize="18px" fontWeight="600">
          Contact Us
        </TextResponsive>
        <TitleWithFamily font="Nunito" fontSize="48px" fontWeight="800">
          Get in Touch with Lotus Soft Technologies Ltd.
        </TitleWithFamily>
        <VerticalLine opacity={20} />
        
        <Flex wrap="wrap">
          <Flex direction="column" w={{ base: "100%", lg: "50%" }}>
            <IconWithText
              fontWeight="600"
              hoverActive={false}
              iconSize={25}
              icon={MdOutlineReply}
              allowTextRes
              textRes="Reply within 24 hrs"
              textColor={SavedColors.TextColor}
            ></IconWithText>
          </Flex>

          <Flex direction="column" w={{ base: "100%", lg: "50%" }}>
            <IconWithText
              fontWeight="600"
              hoverActive={false}
              iconSize={25}
              icon={BsTelephoneFill}
              allowTextRes
              textRes="Telephone support"
              textColor={SavedColors.TextColor}
            ></IconWithText>
          </Flex>
        </Flex>

        <TextResponsive font="Roboto" fontSize="18px">
          We’re here to assist you with any inquiries about our products, services, or custom solutions. Reach out to us
          through the contact form below or use the provided information to connect with our team directly.
        </TextResponsive>

        <ActionLayout
          title="Open Hours"
          description="Mon - Fri"
          descriptionSecond="9:00AM - 06:00PM "
          descriptionThird="Sat"
          descriptionForth="9:00AM - 01:00PM "
          Icon={IoIosTime}
        />

        <Flex wrap="wrap" gap={20}></Flex>
      </Wrapper>

      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d997.4388992642018!2d32.602187269648496!3d0.321274341063542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTknMTYuNiJOIDMywrAzNicxMC4yIkU!5e0!3m2!1sen!2sug!4v1761226756063!5m2!1sen!2sug"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export { Ui };