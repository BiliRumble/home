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
            <p style={{fontSize: '16px'}}>Copyright © <span style={{fontSize: '16px'}}>&nbsp;2019&nbsp;-&nbsp;</span> 2024 rumble <span style={{fontSize: '16px'}}>&nbsp;&amp;&nbsp;
                <a style={{fontSize: '16px'}} href="https://icp.gov.moe/?keyword=20240013" rel={'me noopener noreferrer'} target={'_blank'}>萌ICP备20240013号</a></span></p>
            </Flex>
        </Section>
    );
}