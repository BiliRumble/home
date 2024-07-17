import { Flex } from "@chakra-ui/react";
import { Section } from "../../components/Setion/Section";

export default function Footer() {
    return(
        <Section
            borderRadius={'0'}
            w={'100%'}
            p={'5px 20px'}
        >
            <Flex
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'center'}
            align={'center'}
            flexDir={'column'}
            >
            <p>©2019 - {new Date().getFullYear()} rumble</p>
            </Flex>
        </Section>
    );
}